import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTheme } from './lib/theme';
import { Ionicons, Foundation } from 'react-native-vector-icons';
import HomeScreen from './screens/home';

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

export default function App() {
  const netflixLogoSize = width * 0.11;
  const headerRightIconsSize = width * 0.07;
  return (
    <NavigationContainer theme={ MyTheme }>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize = 24;
            let iconColor = MyTheme.colors.bottomTabText;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Games') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            } else if (route.name === 'New and Populer') {
              iconName = focused ? 'flame' : 'flame-outline';
            } else if (route.name === 'Downloads') {
              iconName = focused ? 'download' : 'download-outline';
            }
            return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
          },
          tabBarStyle: {
            backgroundColor: MyTheme.colors.bottomTabBackground,
          },
          tabBarActiveTintColor: MyTheme.colors.bottomTabActiveText,
          tabBarInactiveTintColor: MyTheme.colors.bottomTabInactiveText,
          headerTransparent: true,
          headerTitle: '',
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            headerLeft: () => (
              <Image source={require('./assets/netflix.png')} style={{width: netflixLogoSize, height: netflixLogoSize, marginLeft: 5}}/>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 15, gap: 15, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="search" size={ headerRightIconsSize} color={MyTheme.colors.bottomTabText} style={{marginRight: 10}} />
                <Image source={require('./assets/avatar.png')} style={{width: headerRightIconsSize, height: headerRightIconsSize, borderRadius: 6}}/>
              </View>
            )
          }}
        />
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
