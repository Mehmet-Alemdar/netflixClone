import { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTheme } from './lib/theme';
import { Ionicons, MaterialIcons} from 'react-native-vector-icons';
import HomeScreen from './screens/home';

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

import HeaderColorContext from './context/headerColorContext';

export default function App() {
  const netflixLogoSize = width * 0.1;
  const headerRightIconsSize = width * 0.07;

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(
    scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['transparent', 'rgba(0,0,0,0.8)',], 
      extrapolate: 'clamp',
    })
  );

  const [headerHeight, setHeaderHeight] = useState(
    scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 40],
      extrapolate: 'clamp',
    })
  )

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150], 
    outputRange: [1, 0], 
    extrapolate: 'clamp',
  });
  
  return (
    <HeaderColorContext.Provider value={[scrollY]}>
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
            return <Ionicons name={iconName} size={iconSize} color={iconColor}/>;
          },
          tabBarStyle: {
            backgroundColor: MyTheme.colors.bottomTabBackground,
          },
          tabBarActiveTintColor: MyTheme.colors.bottomTabActiveText,
          tabBarInactiveTintColor: MyTheme.colors.bottomTabInactiveText,
          headerTransparent: true,
          headerTitle: '',
          headerShadowVisible: false,
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
            ),
            headerBackground: () => (
              <Animated.View  style={{backgroundColor: headerBackgroundColor, bottom: headerHeight,display: 'flex'}}>
                <View style={{ height: height / 7.5}} />
                <Animated.View style={[{display: 'flex',flexDirection: 'row', opacity: headerOpacity, justifyContent: 'center', gap: width / 10, alignItems: 'center'}]}>
                  <Text style={{color: '#F3F3F3', fontSize: width * 0.04, fontWeight: '400'}}>Series</Text>
                  <Text style={{color: '#F3F3F3', fontSize: width * 0.04, fontWeight: '400'}}>Movies</Text>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={{color: '#F3F3F3', fontSize: width * 0.04, fontWeight: '400'}}>Categories</Text>
                    <MaterialIcons name="arrow-drop-down" size={24} color="#F3F3F3" />
                  </View>
                </Animated.View>
              </Animated.View>
            ),
          }}
        />
        <Tab.Screen name="Games" component={HomeScreen} />
        <Tab.Screen name="New and Populer" component={HomeScreen} />
        <Tab.Screen name="Downloads" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </HeaderColorContext.Provider>
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
