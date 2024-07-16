import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';
function CardComponent({cardImage,title,subTitle}) {
 
  return (
    <>
   
    {cardImage&&title&&subTitle &&
    <View style={styles.card}>
    <Image source={cardImage} style={styles.image} resizeMode='cover'/>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>}
    </>
  );
}

const styles = StyleSheet.create({

  card: {width: '100%',borderRadius:15,backgroundColor:"white",paddingBottom:20},
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,

  },
  title: {
    margin:10,

  },
  subTitle: {
    color: colors.secondary,
    marginHorizontal:10,
    fontWeight: '900',
  },
});
export default CardComponent;
