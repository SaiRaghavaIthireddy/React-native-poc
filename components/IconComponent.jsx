import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet} from 'react-native';
function IconComponent({
  name = 'email',
  iconColor = 'white',
  backgroundColor = 'black',
  size = 35,
}) {
    const styles = StyleSheet.create({
        iconContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      });
  
  return (
    <>
      <View backgroundColor={backgroundColor} style={styles.iconContainer}>
        <Icon name={name} color={iconColor} size={size / 2} />
      </View>
    </>
  );
}

export default IconComponent;
