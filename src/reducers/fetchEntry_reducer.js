export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_ENTRY_SUCESS':
      return action.entry;
    case 'FETCH_ENTRY_FAILURE':
      return action.error;
    default:
      return state;
  }
}
