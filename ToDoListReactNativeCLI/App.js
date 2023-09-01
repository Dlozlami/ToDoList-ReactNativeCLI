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

  return (
    <View>
      {tasks.length === 0 ? (
        <Text>No items to display.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListCard item={item} />}
        />
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 10,
        }}
        onPress={() => setModalVisible(true)}>
        <AntDesign name="pluscircleo" size={40} color="black" />
      </TouchableOpacity>

      <AddListItem visible={modalVisible} addItem={addItem} />
    </View>
  );
};

export default List;
