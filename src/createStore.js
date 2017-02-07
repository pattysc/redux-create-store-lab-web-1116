// export default function createStore(reducer){
// }

export default function createStore(reducer){
  let state;

  function getState(){
    return state
  }

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  dispatch({})
  return {getState: getState, dispatch: dispatch}
}

// solution

function render(){
}
