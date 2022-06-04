

export function taskReducer(state=[], action){
    let {type}=action;
    let {id}=action;
    let {task}=action;
    switch(type){
        case 'ADD_NEW_TASK':
            //  let {task}=action;
                if(state.length !== 0){
                    let a=state.slice(-1);
                    task.id=a[0].id+1;
                }
                else{
                    task.id=1;
                }
                task.iscomplete=false;
             return [...state,task];
              
        
        case 'DELETE_TASK':
            // let {id} = action
            return state.filter(st =>st.id !== id);
           
        
        case 'EDIT_TASK':
               state=state.filter(item=>item.id !== id);
               let newData={
                   id:id,
                   title:task.title,
                   description:task.description,
                   iscomplete:task.iscomplete,
               }
               return[...state,newData];
             
        
        case 'STATUS_TOGGLE':
                let {taskId} = action
                state.find(task=>task.id === taskId).iscomplete= !(state.find(task=>task.id === taskId).iscomplete)
                return state;
            
        
        case 'GET_ALL_TASK':
            
            break;
        
        default:
            return state;

    }
}