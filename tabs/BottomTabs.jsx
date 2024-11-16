import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from '../screens/Homepage';
import FavoriteScreen from "../screens/FavoriteScreen";
import BookingScreen from "../screens/BookingScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BarcodeScreen from "../screens/BarCodeScreen";
import CustomBottomTab from "@/components/BottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomBottomTab {...props}/>}>
        <Tab.Group screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Homepage} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ tabBarLabel: 'Favorite' }} />
            <Tab.Screen name="BarcodeScreen" component={BarcodeScreen} options={{ tabBarLabel: 'Scan' }} />
            <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarLabel: 'Message' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
        </Tab.Group>
    </Tab.Navigator>
  );
}
