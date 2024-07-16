import React from 'react';
import {View, Text, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
function ButtonComponent({title,color,onPress}) {
  const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 15,
      textTransform: 'uppercase',
      fontWeight: '600',
    },
    container: {
      width: '100%',
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      backgroundColor:colors[color],
      justifyContent: 'center',
      marginVertical:15,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={onPress}  >
      <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ButtonComponent;
