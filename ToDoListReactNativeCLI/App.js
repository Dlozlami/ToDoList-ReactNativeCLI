import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListCard from './components/ListCard';
import AddListItem from './components/AddListItem';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = item => {
    setTasks([...tasks, item]);
    setModalVisible(false);
  };

  const deleteItem = item =>{
    const updatedTasks = tasks.filter(task => task !== item);
    console.log('deleted item is: ', updatedTasks)
    setTasks(updatedTasks);
   }

 
  return (
    <View style={{padding: 10, flex: 1}}>
      <View>
        {tasks.length === 0 ? (
          <Text>No items to display..</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListCard item={item} deleteItem={deleteItem}/>}
            //  
          />
        )}

        <AddListItem visible={modalVisible} addItem={addItem} />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}
        onPress={() => setModalVisible(true)}>
        <Text>
          <AntDesign name="pluscircle" size={40} color="black" />
         
        </Text> 
      </TouchableOpacity>
    </View>
  );
};

export default List;
