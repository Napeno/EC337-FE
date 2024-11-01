import { auth } from '../firebase'; 
import { signOut } from 'firebase/auth';

export const logout = async (navigation) => {
  try {
    await signOut(auth);
    navigation.navigate('LOGIN'); // Navigate to the login screen
  } catch (error) {
    console.error(error);
  }
};
