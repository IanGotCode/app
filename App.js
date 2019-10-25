import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'The Destruction of the Indies',
    subTitle: 'Freddrick Douglas',
    narrator: 'Narrated by Brittany Young',
    image: 'https://storage.googleapis.com/abantuaudio-bucket/Books/Southern%20Horrors/Images/cover.jpg',
    threeDots: './assets/images/threeDots.svg'

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'The Destruction of the Indies',
    subTitle: 'Freddrick Douglas',
    narrator: 'Narrated by Brittany Young',
    image: 'https://storage.googleapis.com/abantuaudio-bucket/Books/Southern%20Horrors/Images/cover.jpg',
    threeDots: './assets/images/threeDots.svg'
  }
];

function Item({ title, subTitle, narrator, timeRemaining, image, threeDots }) {
  return (
    <View style={styles.item}>
      <View style={styles.child}>
        <Image style={styles.image} source={{uri: image}}/>
      </View>
      <View style={{ flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.narrator}>{narrator}</Text>
        <Text style={styles.timeRemaining}>{timeRemaining}</Text>
      </View> 
      <View>
        <Image style={styles.svg} source={{uri: threeDots}} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} 
        subTitle={item.subTitle}
        narrator={item.narrator}
        timeRemaining={item.timeRemaining}
        image={item.image}
        threeDots={item.threeDots}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    // backgroundColor: '#f9c2ff',
    // width: 375,
    // height: 91,
    right: 15,
    top: 30,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
  
  },
  narrator: {

  },
  child: {
    // flex: 1, 
    backgroundColor: 'blue',
    width: 45, 
    height: 68,
    marginRight: 10
  },
  image: {
    width: 45, 
    height: 68, 
    // marginRight: 5, 
    // marginTop: 5
  },
  svg: {
    width: 20,
    height: 40
  }
});