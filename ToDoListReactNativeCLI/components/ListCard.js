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

const ListCard = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState(item.task);

  const handleEdit = () => {
    setModalVisible(true);
  };

  const saveEdit = () => {
    // Implement your update logic here.
    // Update the task with the editedTask value.
    setModalVisible(false);
  };

  const deleteTask = () => {
    // Implement your delete logic here.
    // Remove the task from the tasks list.
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
      <TouchableOpacity onPress={deleteTask}>
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
