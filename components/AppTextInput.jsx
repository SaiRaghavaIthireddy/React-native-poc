import React from 'react';
import {View,StyleSheet ,TextInput} from 'react-native';
import defaultStyles from '../config/defaultStyles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../config/colors';
function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <Icon name={icon} style={{marginHorizontal:10}} size={20}/>}
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        marginVertical:10,
        alignItems:"center"
    },
 
})
export default AppTextInput;