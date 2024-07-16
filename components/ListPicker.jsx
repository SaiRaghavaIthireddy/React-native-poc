import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
function ListPicker({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
<Text style={{padding:10}}>{item.title}</Text>
</TouchableOpacity>);
}

export default ListPicker;