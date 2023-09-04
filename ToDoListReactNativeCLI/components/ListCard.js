import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';

const ListCard = ({item, deleteItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deadline, setDeadline] = useState(item.deadline);
  const [task, setTask] = useState(item.task);
  const [priority, setPriority] = useState(item.Priority);
  const [status, setStatus] = useState(item.status);

  const handleEdit = () => {
    item.deadline = deadline;
    item.task = task;
    item.Priority = priority;
    item.status = status;
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
    <View style={{padding: 10, backgroundColor: 'white', borderRadius: 10}}>
      <View style={styles.labelRow}>
        <View>
          <Text style={styles.label}>Task:</Text>
          <Text style={styles.value}>{item.task}</Text>
        </View>
      </View>

      <View style={styles.valueRow}>
        <View>
          <Text style={styles.label}>Deadline:</Text>
          <Text style={styles.value}>{item.deadline}</Text>
        </View>
        <View>
          <Text style={styles.label}>Priority:</Text>
          <Text style={styles.value}>{item.Priority}</Text>
        </View>
        <View>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{item.status}</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={handleEdit}
          style={{padding: 10, backgroundColor: 'blue', borderRadius: 10}}>
          <Text style={{color: 'white'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDelete}
          style={{padding: 10, backgroundColor: 'red', borderRadius: 10}}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>

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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={saveEdit}
              style={{padding: 10, backgroundColor: 'blue', borderRadius: 10}}>
              <Text style={{color: 'white'}}>Edit Item</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{padding: 10, backgroundColor: 'red', borderRadius: 10}}>
              <Text style={{color: 'white'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-between',
  },
  value: {
    flex: 1,
  },
});

export default ListCard;
