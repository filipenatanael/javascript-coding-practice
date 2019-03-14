# Redux

- Concepts
- UI + State
- This is redux

## Live Server
npm install -g live-server

## Running
cd Redux
live-server this-is-redux

## References:
[Live Server](https://www.npmjs.com/package/live-server)


# Create Store

```javascript

// Library Code
function createStore (reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch,
  }
}

// App Code - Reducer
function todos (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}

const store = createStore(todos)

store.subscribe(() => {
  console.log('The new state is: ', store.getState())
})

// UnSubscribe
// const UnSubscribe = store.subscribe(() => {
//   console.log('The store changed.');
// })

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
})


```
