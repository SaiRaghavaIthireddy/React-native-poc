import React from 'react';
import colors from '../config/colors';
import {View, StyleSheet,FlatList} from 'react-native';
import CardComponent from '../components/CardComponent';
const data = [
  {
    id: 1,
    title: 'Red Jacket for sale!',
    subTitle: '$100',
    cardImage: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    subTitle: '$1000',
    cardImage: require('../assets/couch.jpg'),
  },
];
function ListingsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardLayout}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={()=><View style={{marginBottom:20}}></View>}
          renderItem={({item}) => <CardComponent cardImage={item.cardImage} title={item.title}
          subTitle={item.subTitle}/>}
        />
        <CardComponent />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    background: colors.light,
    flex: 1,
  },
  cardLayout: {
    padding: 50,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    backgroundColor: colors.cardBackground,
  },
});
export default ListingsScreen;
