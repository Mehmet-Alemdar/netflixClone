import { FlatList,View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const imageSize = width / 3.5;

const ContentVideo = ({data, title}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{marginRight: 10, display: 'flex', alignItems: 'center'}}>
              <View style={{ position: 'absolute', zIndex: 1, top: '30%',backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 100}}>
                <Feather name="play-circle" size={50} color="white" />
              </View>
              <Image source={{uri: item}} style={styles.image}/>
              <LinearGradient
                colors={['transparent','rgba(0,0,0,0.9)']} 
                start={{y: 0, x: 0}}
                end={{y: 0.8, x: 0}}
                style={{height: 20, position: 'absolute', bottom: 31, zIndex: 1, width: imageSize}}
                >
              </LinearGradient>
              <View style={styles.progress}> 
                <View style={{width: 40, height: 2.5, backgroundColor: '#E50914'}}></View>
              </View>
              <View style={styles.containerBottom}>
                <Feather name="info" size={18} color="#F3F3F3" />
                <Entypo name="dots-three-vertical" size={18} color="#F3F3F3" />
              </View>
            </View> 

          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 5,
  },
  image: {
    width: imageSize, 
    height: imageSize * 1.5, 
    resizeMode: 'contain', 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  progress: {
    width: imageSize,
    backgroundColor: '#B8B8B8',
  },
  containerBottom: {
    width: imageSize,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  }
});

export default ContentVideo;