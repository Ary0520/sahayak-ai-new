import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  AuthError
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signup: (email: string, password: string, displayName: string, role: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
}

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  createdAt: Date;
  lastLogin: Date;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const getFirebaseErrorMessage = (error: AuthError): string => {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed. Please try again.';
    case 'auth/popup-blocked':
      return 'Popup was blocked by browser. Please allow popups and try again.';
    case 'auth/cancelled-popup-request':
      return 'Another popup is already open. Please close it and try again.';
    default:
      console.error('Firebase Auth Error:', error);
      return error.message || 'An unexpected error occurred. Please try again.';
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const createUserProfile = async (user: User, additionalData: any = {}) => {
    if (!user) return;
    
    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();
        
        const profileData = {
          uid: user.uid,
          displayName: displayName || 'User',
          email: email || '',
          createdAt,
          lastLogin: createdAt,
          role: additionalData.role || 'teacher',
          ...additionalData
        };

        await setDoc(userRef, profileData);
        console.log('User profile created successfully');
      } else {
        // Update last login
        await setDoc(userRef, { lastLogin: new Date() }, { merge: true });
        console.log('User profile updated with last login');
      }
      
      // Fetch and set user profile
      const updatedUserSnap = await getDoc(userRef);
      if (updatedUserSnap.exists()) {
        const profileData = updatedUserSnap.data() as UserProfile;
        setUserProfile(profileData);
        console.log('User profile loaded:', profileData);
      }
    } catch (error) {
      console.error('Error managing user profile:', error);
      // Don't throw here - allow authentication to succeed even if profile creation fails
    }
  };

  const signup = async (email: string, password: string, displayName: string, role: string) => {
    try {
      console.log('Attempting to create user with email:', email);
      
      if (!email || !password || !displayName) {
        throw new Error('Please fill in all required fields.');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long.');
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully:', user.uid);
      
      await updateProfile(user, { displayName });
      console.log('User profile updated with display name');
      
      await createUserProfile(user, { role });
      console.log('User profile created in Firestore');
      
    } catch (error: any) {
      console.error('Signup error:', error);
      throw new Error(getFirebaseErrorMessage(error));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting to sign in user with email:', email);
      
      if (!email || !password) {
        throw new Error('Please enter both email and password.');
      }

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully:', user.uid);
      
      await createUserProfile(user);
      
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(getFirebaseErrorMessage(error));
    }
  };

  const loginWithGoogle = async () => {
    try {
      console.log('Attempting Google sign-in');
      
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      
      // Configure provider settings
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      const { user } = await signInWithPopup(auth, provider);
      console.log('Google sign-in successful:', user.uid);
      
      await createUserProfile(user, { role: 'teacher' });
      
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      throw new Error(getFirebaseErrorMessage(error));
    }
  };

  const logout = async () => {
    try {
      console.log('Signing out user');
      setUserProfile(null);
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error('Failed to sign out. Please try again.');
    }
  };

  useEffect(() => {
    console.log('Setting up auth state listener');
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Auth state changed:', user ? `User: ${user.uid}` : 'No user');
      
      setCurrentUser(user);
      
      if (user) {
        await createUserProfile(user);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    logout,
    loginWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};