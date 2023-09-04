import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const ListCard = ({ item, deleteItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deadline, setDeadline] = useState(item.deadline);
  const [task, setTask] = useState(item.task);
  const [priority, setPriority] = useState(item.Priority);
  const [status, setStatus] = useState(item.status);
  
  const handleEdit = () => {
    item.deadline=deadline;
    item.task=task;
    item.Priority = priority;
    item.status= status;
    setModalVisible(true);
  };

  const saveEdit = () => {
    // useEffect(() => {    
    // }, [item]);
    setModalVisible(false);
  };

  const handleDelete = () => {
    deleteItem(item);
  };

  return (
    <View>
     
      <View style={styles.labelRow}>
        <Text style={styles.label}>Task:</Text>
        <Text style={styles.label}>Deadline:</Text>
        <Text style={styles.label}>Priority:</Text>
        <Text style={styles.label}>Status:</Text>
      </View>

      
      <View style={styles.valueRow}>
        <Text style={styles.value}>{item.task}</Text>
        <Text style={styles.value}>{item.deadline}</Text>
        <Text style={styles.value}>{item.Priority}</Text>
        <Text style={styles.value}>{item.status}</Text>
      </View>

      <TouchableOpacity onPress={handleEdit}>
        <Text>Edit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>

      <Modal animationType="slide" visible={modalVisible}>
        <View>
        <View>
        <TextInput
          placeholder="Deadline"
          value={deadline}
          onChangeText={text => setDeadline(text)}
        />
        <TextInput
          placeholder="Task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TextInput
          placeholder="Priority"
          value={priority}
          onChangeText={text => setPriority(text)}
        />
        <TextInput
          placeholder="Status"
          value={status}
          onChangeText={text => setStatus(text)}
        />
      </View>
          <Button title="Save" onPress={saveEdit} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  labelRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 4,
  },
  valueRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  value: {
    flex: 1,
  },
});

export default ListCard;
