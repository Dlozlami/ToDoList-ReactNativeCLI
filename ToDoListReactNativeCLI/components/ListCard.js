// ListCard.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';

const ListCard = ({item,deleteItem}) => {  
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState(item.task);

  const handleEdit = () => {
    setModalVisible(true);
  };

  const saveEdit = () => {    
    setModalVisible(false);
  };
 
  const handleDelete = () => {   
    deleteItem(item);
  };

  
  return (
    <View>
      {/* Display task information here */}
      <Text>{item.deadline}</Text>
      <Text>{item.task}</Text>
      <Text>{item.Priority}</Text>
      <Text>{item.status}</Text>

      <TouchableOpacity onPress={handleEdit}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View>
          <TextInput
            value={editedTask}
            onChangeText={text => setEditedTask(text)}
          />
          <Button title="Save" onPress={saveEdit} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default ListCard;
