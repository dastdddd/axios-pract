
const initialState = {//состояние
  comments: [],
  isLoading: false,
  //isLoading - загрузка по умолчании false
  isErrorMessage: null,
  //isErrorMessage - ошибка по умолчании null
}

export const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { comments } = state;
  switch (type) {
    case 'ON_LOAD_COMMENTS': {
      return {
        ...state,
        comments: payload
      }
    }default:
    return state
}
}