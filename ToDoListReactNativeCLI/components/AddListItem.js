// AddListItem.js
import React, {useState} from 'react';
import {View, Modal, TextInput, Button} from 'react-native';

const AddListItem = ({visible, addItem}) => {
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
        <Button title="Add Item" onPress={handleAddItem} />
      </View>
    </Modal>
  );
};

export default AddListItem;
