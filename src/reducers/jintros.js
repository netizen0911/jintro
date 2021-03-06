const jintroReducerDefaultState = [];

export default (state = jintroReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_JINTRO':
      return [
        ...state,
        action.jintro
      ];
    case 'REMOVE_JINTRO':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_JINTRO':
      return state.map((jintro) => {
        if (jintro.id === action.id) {
          return {
            ...jintro,
            ...action.updates
          }
        } else {
          return jintro
        };
      });
    case 'SET_JINTROS':
      return action.jintros;
    default:
      return state;
  }
}