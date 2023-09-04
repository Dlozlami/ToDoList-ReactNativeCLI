import React, { useState } from 'react';
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

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View>
          <TextInput
            value={editedTask}
            onChangeText={(text) => setEditedTask(text)}
          />
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
