import { useContext} from 'react';
import { View, Text, StyleSheet, Dimensions,Animated, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from 'react-native-vector-icons';
import HeaderColorContext from '../context/headerColorContext';

import data from '../data.json';
import dataV from '../dataVideo.json';

const { width, height } = Dimensions.get('window');

import ContentImage from '../components/contentImage';
import ContentVideo from '../components/contentVideo';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  let [scrollY] = useContext(HeaderColorContext);
  const top10IconSize = width * 0.06;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false,}
  )

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
    <ScrollView
    style={{ flex: 1 }}
    onScroll={handleScroll}
    scrollEventThrottle={6}
    showsVerticalScrollIndicator={false}
    >
      <ImageBackground 
      style={styles.bannerContainer}
      source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNTYzMDcxMjI2MV5BMl5BanBnXkFtZTcwOTE5MjYwMg@@._V1_.jpg'}}
      resizeMode='cover'
      >
        <LinearGradient 
        colors={['transparent','rgba(0,0,0,0.64)','rgba(0,0,0,1)']} 
        style={styles.bannerContainerActions}
        start={{y: 0.1, x: 0}}
        end={{y: 0.95, x: 0}}
        >
          <View style={styles.bannerContainerActionsInfoBox}>
            <Image source={require('../assets/top10.png')} style={{width: top10IconSize, height: top10IconSize, resizeMode: 'contain'}}/>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Number 3 in Movies Today</Text>
          </View>
          <View style={styles.bannerContainerActionsBox}>
            <View style={styles.actionBox}>
              <Ionicons name="add" size={ 24 } color="#fff" />
              <Text style={styles.actionBoxText}>My List</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={{color: '#000', fontSize: width * 0.045, fontWeight: 'bold'}}>Play</Text>
            </TouchableOpacity>
            <View style={styles.actionBox}>
              <Ionicons name="information-circle-outline" size={ 24 } color="#fff" />
              <Text style={styles.actionBoxText}>Info</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{marginBottom: 20}}>
        {dataV.map((item, index) => (
            <ContentVideo key={index} data={item.content} title={item.title}/>
          ))}
        {data.map((item, index) => (
          <ContentImage key={index} data={item.content} title={item.title}/>
        ))}
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: height / 1.5,
    backgroundColor: '#fff',
  },
  bannerContainerActions: {
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    position: 'absolute',
    width: '100%',
    height: '40%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  bannerContainerActionsInfoBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  bannerContainerActionsBox: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.15,
  },
  playButton : {
    backgroundColor: '#fff',
    height: '100%',
    width: '25%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBox: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
  },
  actionBoxText: {
    color: '#fff',
    fontSize: width * 0.03,
  }
});

export default Home;