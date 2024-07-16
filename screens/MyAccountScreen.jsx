import React from 'react';
import ListComponent from '../components/ListComponent';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../config/colors';
import IconComponent from '../components/IconComponent';
import {View, StyleSheet} from 'react-native';
import ListSeparatorComponent from '../components/ListSeparatorComponent';
const data = [
  {
    id: 1,
    title: 'My Listings',
    name: 'format-list-bulleted',
    backgroundColor: colors.primary,
  },
  {
    id: 2,
    title: 'My Messages',
    name: 'email',
    backgroundColor: colors.secondary,
  },
];
function MyAccountScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.nameComp}>
        <ListComponent
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.optionsList}>

        <FlatList
          data={data}
          keyExtractor={message => message.id.toString()}
          ItemSeparatorComponent={ListSeparatorComponent}
          renderItem={({item}) => (
            <ListComponent
              title={item.title}
              subTitle={item.subTitle}
              
              iconComp={
                <IconComponent
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  iconColor={'white'}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <ListComponent title="Log Out" iconComp={ <IconComponent
                  name="logout"
                  backgroundColor="#ffe66d"
                  iconColor={'white'}
                />}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  optionsList: {
    marginTop: 30,
    backgroundColor:"white"
  },
  nameComp:{
    backgroundColor:"white",paddingVertical:10
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  logout:{
    backgroundColor:"white",
    marginTop:15
  }
});
export default MyAccountScreen;
