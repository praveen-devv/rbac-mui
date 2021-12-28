const initialState ={
    roles:[{roleid:'1',name:'admin',rolecode:'adm01'}]
}

const roleReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_ROLE':
            console.log(action.payload)
            return{
                ...state,
                roles:[...state.roles,action.payload]
            }
        
        case 'DELETE_ROLE':
            return{
                ...state,
                roles:state.roles.filter(role => {
                    return action.payload!==role.roleid
                })
            }
        default: return state
    }
}

export default roleReducer;
