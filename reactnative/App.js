import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TextInput,TouchableOpacity,  } from 'react-native';

const styles = StyleSheet.create({
  container:{
  padding: 12, flexDirection: "row", alignItems: "center" 
  },
  avatar: {
    width: 120, 
    height: 140,
    
  },
  subcontainer:{
  padding: 16,
  },
  title:{
  fontSize: "15px", fontWeight: "bold"
  },
  subtitle:{
    marginBottom:"10px"
  },
  divlabel:{
  flexDirection: "row", flexWrap: "wrap",marginBottom:"10px"
  },
  label:{
  backgroundColor:"gray", 
  borderRadius: 5,
  padding: 4,
  margin:"3px",
  fontSize: "10px"
  },
  
  icon: {
    width: 20,
    height: 20,
    marginRight:"6px"
  },
  footer: {
    flexDirection: "row"
  },


});
function renderTags({ item, index }) {
         return ( <Text style={styles.label}>
              {item}
          </Text>
         )}

function renderItem({ item, index }) {
      return (
      <View style={styles.container}>
            <Image
            source={{uri: item.picture}}
            style={styles.avatar}
            />
           <ScrollView style={styles.subcontainer} >
            <Text numberOfLines={1} style={styles.title}>
              {item.author}
            </Text>
            <Text numberOfLines={1} style={styles.subtitle}>
              {item.about}
            </Text>
            <FlatList style={styles.divlabel}
              data={item.tags}
              renderItem={renderTags}
            />
            <View style={styles.footer} >
            <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25379.png?w=740&t=st=1652542900~exp=1652543500~hmac=110db1502746247c47e8a7530b80cfbb21f451c6cfa917e3d99a926dc4a27266'}}
            style={styles.icon}
            />
            <Text numberOfLines={1} style={styles.comments}>
              {item.comments.length} coments
            </Text>
             </View>
           </ScrollView>
        </View>
      );
    }
  

const App = () => {

  return (
    <ScrollView>      
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      
    </ScrollView>
  );
}

export default App;
