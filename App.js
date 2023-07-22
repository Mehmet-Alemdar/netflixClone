import { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTheme } from './lib/theme';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from './screens/home';

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

import HeaderColorContext from './context/headerColorContext';

export default function App() {
  const netflixLogoSize = width * 0.11;
  const headerRightIconsSize = width * 0.07;

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(
    scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['transparent', 'rgba(0,0,0,0.9)',], 
      extrapolate: 'clamp',
    })
  );

  const [headerHeight, setHeaderHeight] = useState(
    scrollY.interpolate({
      inputRange: [0,200],
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
    <HeaderColorContext.Provider value={[headerBackgroundColor, setHeaderBackgroundColor, scrollY, headerHeight]}>
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
          // headerBackground: () => (
          //   <Animated.View style={{flex: 1, backgroundColor: headerBackgroundColor, display: 'flex'}}>
          //     <Animated.View style={{ height: height / 7}} />
          //     <Animated.View style={{display: 'flex',flexDirection: 'row', height: 40, opacity: headerOpacity, bottom: headerHeight, justifyContent: 'space-around', alignItems: 'center'}}>
          //       <Text style={{color: '#f3f3f3', fontSize: 18, fontWeight: '700'}}>Diziler</Text>
          //       <Text style={{color: '#f3f3f3', fontSize: 18, fontWeight: '700'}}>Filmler</Text>
          //       <Text style={{color: '#f3f3f3', fontSize: 18, fontWeight: '700'}}>Kategoriler</Text>
          //     </Animated.View>
          //   </Animated.View>

          // ),
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
              <Animated.View style={{backgroundColor: headerBackgroundColor, display: 'flex', bottom: headerHeight,}}>
                <Animated.View style={{ height: height / 7.5}} />
                <Animated.View style={{display: 'flex',flexDirection: 'row', height: 30, opacity: headerOpacity, justifyContent: 'space-around', alignItems: 'center'}}>
                  <Text style={{color: '#f3f3f3', fontSize: width * 0.05, fontWeight: '700'}}>Diziler</Text>
                  <Text style={{color: '#f3f3f3', fontSize: width * 0.05, fontWeight: '700'}}>Filmler</Text>
                  <Text style={{color: '#f3f3f3', fontSize: width * 0.05, fontWeight: '700'}}>Kategoriler</Text>
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
