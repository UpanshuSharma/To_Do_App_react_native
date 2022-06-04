import React from'react';

import { StyleSheet} from 'react-native';
import {Card,TextInput, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import { editToDO } from '../redux/action/todoAction';
const EditToDoComp=({value:task, onEdit})=>{
    const [editedTitle, setEditedTitle]=React.useState(task.title)
    const [editedDescription, setEditedDescription]=React.useState(task.description)
    const dispatch = useDispatch();
    

    const handleSubmit=()=>{
          let EditedTask={title:editedTitle, description:editedDescription,iscomplete:task.iscomplete}
           if(editedTitle !== '' && editedDescription !== ''){
                    dispatch(editToDO(EditedTask,task.id));   
                    setEditedTitle('');
                    setEditedDescription('');
                    onEdit();
           }
    }

    return (
        <Card style={styles.containerInput}>
               <TextInput
                    label="Title"
                    value={editedTitle}
                    onChangeText={editedTitle => setEditedTitle(editedTitle)}
                    
                />

                <TextInput
                        label="Description"
                        value={editedDescription}
                        mode='outlined'
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={editedDescription => setEditedDescription(editedDescription)}
                    />
                
                 <Button
                     icon="comment-outline"
                     mode="contained"
                     onPress={() =>handleSubmit()}
                     style={styles.button}
                    >
                       Edit
                  </Button>
       </Card>
    )
}

const styles= StyleSheet.create({
     containerInput:{
         width: '90%',
         marginTop:10,
         marginLeft:'auto',
         marginRight:'auto',
         borderRadius:10,
         marginBottom:10,
     },
     button:{
         width:100,
         marginTop:10,
         marginLeft:'auto',
         marginRight:'auto',
     }
})

export default EditToDoComp;