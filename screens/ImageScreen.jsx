import {Image,View} from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function ImageScreen(){
    return(
        <View style={{backgroundColor:"black"}}>
        <View >
        <View style={{position:"absolute",top:30,left:10}}>
            <MaterialIcon name="close" size={30} color="#fff"/>
        </View>
        <View style={{position:"absolute",top:30,right:10}}  >
            <MaterialIcon name="trash-can-outline" size={30} color="#fff"/>
        </View>
        </View>
        <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
        <Image source={require("../assets/chair.jpg")} style={{width:'100%',height:'100%'}}resizeMode="contain"></Image>
        </View>
        </View>
    )
}