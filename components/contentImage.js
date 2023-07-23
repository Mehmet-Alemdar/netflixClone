import { FlatList,View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const imageSize = width / 3.5;

const ContentImage = ({data, title}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image}/>
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
    borderRadius: 5,
    marginRight: 10,
  }
});

export default ContentImage;