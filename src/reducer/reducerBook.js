const initialState = {
    books: [
        {
            id:0,
            title:"titulo 0",
            description: "description 0"
        },
        {
            id:1,
            title:"titulo 1",
            description:"description 1"
        }
    
    ]
}

function reducerBook(state = initialState, action) {
    switch(action.type){
        case "add":
            state = {...state, books: [...state.books, action.value]}
    }
    return state;
}

export default reducerBook;