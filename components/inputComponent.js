import React from 'react';
import { StyleSheet} from 'react-native';
import {Card,TextInput, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
// ......................................................
import { addNewTask } from '../redux/action/todoAction';

const InputComponent= ()=>{
    const [newtitle, setTitle]=React.useState('')
    const [newdescription, setDescription]=React.useState('')
    const dispatch = useDispatch();


    const handleSubmit=()=>{
          let newTask={title:newtitle, description:newdescription}
         if(newtitle !== '' && newdescription !== ''){
            dispatch(addNewTask(newTask));   
            setTitle('');
            setDescription('');
         }
    }

    return (
        <Card style={styles.containerInput}>
               <TextInput
                    label="Title"
                    value={newtitle}
                    onChangeText={newtitle => setTitle(newtitle)}
                    
                />

                <TextInput
                        label="Description"
                        value={newdescription}
                        mode='outlined'
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={newdescription => setDescription(newdescription)}
                    />
                
                 <Button
                     icon="comment-outline"
                     mode="contained"
                     onPress={() =>handleSubmit()}
                     style={styles.button}
                    >
                       Submit
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




export default InputComponent;