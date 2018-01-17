let nextTodoId = 0
export const addMessage = text => {
  return {
    type: 'ADD_MESSAGE',
    id: nextTodoId++,
    text
  }
}
