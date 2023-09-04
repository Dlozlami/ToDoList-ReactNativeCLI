// AddListItem.js
import React, {useState} from 'react';
import {View, Modal, TextInput, TouchableOpacity, Text} from 'react-native';

const AddListItem = ({visible, addItem, close}) => {
  const [deadline, setDeadline] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleAddItem = () => {
    const newItem = {deadline, task, Priority: priority, status};
    addItem(newItem);
    // Reset form fields
    setDeadline('');
    setTask('');
    setPriority('');
    setStatus('');
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={{padding: 10}}>
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

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={handleAddItem}
            style={{padding: 10, backgroundColor: 'blue', borderRadius: 10}}>
            <Text style={{color: 'white'}}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => close()}
            style={{padding: 10, backgroundColor: 'red', borderRadius: 10}}>
            <Text style={{color: 'white'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddListItem;
