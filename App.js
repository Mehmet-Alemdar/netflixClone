import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTheme } from './lib/theme';
import HomeScreen from './screens/home';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={ MyTheme }>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Games" component={HomeScreen} />
        <Tab.Screen name="New and Populer" component={HomeScreen} />
        <Tab.Screen name="Downloads" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
