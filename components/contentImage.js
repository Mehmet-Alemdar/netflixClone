import { FlatList,View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const ContentImage = ({data}) => {
  const imageSize = width / 4.2;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
        data={data.content}
        renderItem={(item) => (
          <View style={{marginRight: 10}}>
            <Image source={require('../assets/contentsImages/spiderman.png')} style={{width: imageSize, height: imageSize * 1.5, resizeMode: 'contain', borderRadius: 3}}/>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 5,
  }
});

export default ContentImage;