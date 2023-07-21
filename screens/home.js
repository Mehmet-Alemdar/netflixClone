import { View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');
const Home = () => {
  return (
    <ScrollView>
      <ImageBackground 
      style={styles.bannerContainer}
      source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNTYzMDcxMjI2MV5BMl5BanBnXkFtZTcwOTE5MjYwMg@@._V1_.jpg'}}
      resizeMode='cover'
      >

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: height / 1.9,
    backgroundColor: '#fff',
  }
});

export default Home;