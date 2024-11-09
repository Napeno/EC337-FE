import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Introduction from '../screens/CreatingPlace/Introduction'
import StepOneScreen from '../screens/CreatingPlace/StepOneScreen'
import StepTwoScreen from '../screens/CreatingPlace/StepTwoScreen'
import StepThreeScreen from '../screens/CreatingPlace/StepThreeScreen'
import StepFourScreen from '../screens/CreatingPlace/StepFourScreen'
import BookingScreen from '../screens/BookingScreen'
import ProductDetailScreen from '../screens/ProductScreen'
import BottomTabs from '../tabs/BottomTabs';
import { auth } from '../firebase'; // Import initialized instances
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import QRCodeScreen from "@/screens/QRcodeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    // Optionally, you can add a loading screen here
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MAIN" component={BottomTabs} />
        ) : (
          <Stack.Screen name="LOGIN" component={LoginScreen} />
        )}

          <Stack.Screen name="CREATE" component={Introduction} />
          <Stack.Screen name="PROFILE" component={ProfileScreen} />
          <Stack.Screen name="STEPONE" component={StepOneScreen} />
          <Stack.Screen name="STEPTWO" component={StepTwoScreen} />
          <Stack.Screen name="STEPTHREE" component={StepThreeScreen} />
          <Stack.Screen name="STEPFOUR" component={StepFourScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />

      </Stack.Navigator>



    </NavigationContainer>
  );
};

export default App;
