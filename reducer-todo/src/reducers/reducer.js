
export const initialState ={
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREASE':
        return { ...state,
            editing: !state.editing}

      case 'DECREASE':
        return {...state,
            title: action.payload,
            editing: !state.editing}

      default:
        return state
    }
  }