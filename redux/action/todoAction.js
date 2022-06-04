

export const addNewTask=(task)=>{
    let action={type:'ADD_NEW_TASK', task};
    return action;
}

export const deleteTask=(id)=>{
    let action={type:'DELETE_TASK',id}
    return action;
}

export const toggleStatus=(taskId)=>{
    let action ={type:'STATUS_TOGGLE',taskId}
    return action;
}

export const  editToDO=(task, id)=>{
    let action={type:'EDIT_TASK',id,task}
    return action
}