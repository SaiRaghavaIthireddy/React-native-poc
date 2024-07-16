import React from 'react';
import {Image, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListComponent({title, subTitle, image,iconComp ,onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={'lightgrey'} onPress={onPress}>
        <View style={styles.container}>
          {iconComp}
          {image&&<Image source={image} style={styles.image} />}
          <View style={styles.detailsInfo}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  detailsInfo:{
    justifyContent:"center",
  },
  image: {width: 40, height: 40, borderRadius: 50},
  title: {
    fontWeight: '600',
    color: 'black',
  },
});

export default ListComponent;
