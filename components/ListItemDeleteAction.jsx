import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {View,StyleSheet} from 'react-native';
function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcon name="trash-can-outline" size={30} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    width: 70,
    height:"100%", 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ListItemDeleteAction;
