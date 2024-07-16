import React from 'react';
import {FlatList,TouchableOpacity,View} from 'react-native';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListComponent from '../components/ListComponent';
import ListSeparatorComponent from '../components/ListSeparatorComponent';
const Intialmessages = [
  {id: 1, title: 't1', description: 'd1', image: require('../assets/mosh.jpg')},
  {id: 2, title: 't2', description: 'd2', image: require('../assets/mosh.jpg')},
];
function MessagesScreen(props) {
  const [messages,setMessages] = React.useState(Intialmessages)
  const [refreshing,setRefreshing] = React.useState(false);
  const handleDelete = (message)=>{
    
    setMessages(messages.filter(m=>m.id!== message.id))
  }
  return (
    <>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        ItemSeparatorComponent={<ListSeparatorComponent />}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
            {id: 2, title: 't2', description: 'd2', image: require('../assets/mosh.jpg')},
          ])
        }}
        renderItem={({item}) => (
          <ListComponent
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log("Message selected",item)}
            renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}/>}

          />

        )}
/>
    </>
  );
}

export default MessagesScreen;
