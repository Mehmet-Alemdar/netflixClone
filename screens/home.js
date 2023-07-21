import { View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Foundation } from 'react-native-vector-icons';


const { width, height } = Dimensions.get('window');
const Home = () => {
  return (
    <ScrollView>
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
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>New Episodes</Text>
          </View>
          <View style={styles.bannerContainerActionsBox}>
            <View style={styles.actionBox}>
              <Ionicons name="add" size={ 24 } color="#fff" />
              <Text style={styles.actionBoxText}>Listem</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={{color: '#000', fontSize: width * 0.045, fontWeight: 'bold'}}>Oynat</Text>
            </TouchableOpacity>
            <View style={styles.actionBox}>
              <Ionicons name="information-circle" size={ 24 } color="#fff" />
              <Text style={styles.actionBoxText}>Bilgi</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: height / 1.9,
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
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  bannerContainerActionsBox: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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