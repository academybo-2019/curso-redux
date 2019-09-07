const contador = {
    count: 0
}

function reducer(state = contador, action) {
    console.log(action);
    
    if(action.type === 'increment')    
        state = {...state, count: state.count + 1}
    return state;
}

export default reducer;