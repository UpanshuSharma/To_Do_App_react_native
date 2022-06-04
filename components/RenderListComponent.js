import React, {useState} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {List,IconButton,Colors,Divider,Button,Modal,Portal} from 'react-native-paper';
import {deleteTask, toggleStatus} from '../redux/action/todoAction';
import {useDispatch} from 'react-redux';
import EditToDoComp from './EditTodoComponent';

const RenderListComponent = ({task}) => {
  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [isComplete, setComplete] = useState(task.iscomplete);
  const dispatch = useDispatch();


  const handleDelete = id => {
    dispatch(deleteTask(id));
  };
  const handleMarkComplete = id => {
    dispatch(toggleStatus(id));
    setComplete(!isComplete);
  };

  const handleEditTodo = id => {
        setEditFormVisible(true);
        // hideModal();
  };
  const hideModal = () => setEditFormVisible(false);
  return (
    <View>
      
      <Portal>
        <Modal visible={isEditFormVisible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
            <EditToDoComp  onEdit={hideModal} value={task} />
        </Modal>
      </Portal>

      <List.Accordion
        title={task.title}
        id={task.id}
        style={[styles.list, isComplete ? {backgroundColor: '#52C33E'} : null]}>
        <List.Item
          title={task.description}
          style={[
            styles.listItem,
            isComplete ? {backgroundColor: '#DFFA81'} : null,
          ]}
        />
        <Divider />
        <View
          style={[
            styles.view,
            isComplete ? {backgroundColor: '#DFFA81'} : null,
          ]}>
          <IconButton
            icon="file-document-edit-outline"
            color={Colors.blue500}
            size={20}
            onPress={() => handleEditTodo(task.id)}
            style={styles.items}
          />
          <IconButton
            icon="delete-outline"
            color={Colors.red500}
            size={20}
            onPress={() => handleDelete(task.id)}
            style={styles.items}
          />

          {isComplete ? (
            <Button
              mode="outlined"
              onPress={() => handleMarkComplete(task.id)}
              style={styles.button}>
              Mark as InComplete
            </Button>
          ) : (
            <Button
              mode="outlined"
              onPress={() => handleMarkComplete(task.id)}
              style={styles.button}>
              Mark as Completed
            </Button>
          )}
        </View>
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  listItem: {
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  view: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  items: {
    flex: 1,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 15,
  },
  button: {
    flex: 3,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 15,
    marginRight: 10,
    // color:'blue'
  },
  containerStyle:{
     backgroundColor: 'white',
     padding: 20,
    // height:'80%',
    width:'90%',
     marginLeft:'auto',
     marginRight:'auto',
  }
});

export default RenderListComponent;
