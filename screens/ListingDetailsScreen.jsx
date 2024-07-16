import React from 'react';
import CardComponent from '../components/CardComponent';
import { View,Image,Text } from 'react-native';
function ListingDetailsScreen(props) {
    return (
        <>
        <View>       
        <CardComponent />
        </View>
       <View style={{padding:10,paddingTop:30,flexDirection:"row",gap:10}}>
        <Image source = {require("../assets/mosh.jpg")} style={{borderRadius:50,height:50,width:50}}/>
        <View>
            <Text style={{fontWeight:"600",color:"black"}}>Mosh Hamedani</Text>
            <Text>5 Listings</Text>
        </View>
       </View>
       </>

    );
}

export default ListingDetailsScreen;