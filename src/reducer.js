export const reducer =(state, action)=> {
if (action.type === 'SET_QUERY') {
 return {
  ...state,
  query: action.payload
 }
}
  throw new Error('no matching action type found')

}