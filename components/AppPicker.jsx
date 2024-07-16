import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import ListPicker from './ListPicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import {FlatList} from 'react-native';

function AppPicker({icon, placeholder, ...otherProps}) {
  const [modalVisible, setModalVisible] = useState(false);
  const modalItems = [
    {
      id: 1,
      title: 'Furniture',
    },
    {
      id: 2,
      title: 'Clothing',
    },
    {
      id: 3,
      title: 'Groceries',
    },
  ];
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(prev => !prev)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              style={{marginHorizontal: 10, paddingVertical: 10}}
              size={20}
            />
          )}
          <Text></Text>
          <Text style={{flex: 1}}>
            {selectedItem ? selectedItem : placeholder}
          </Text>
          <Icon name="chevron-down" size={20} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="close"
          onPress={() => setModalVisible(prev => !prev)}></Button>
        <FlatList
          data={modalItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListPicker
              item={item}
              onPress={() => {
                setModalVisible(false)
                setSelectedItem(item.title);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
});
export default AppPicker;
