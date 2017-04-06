import configureStore from 'redux-mock-store'
import { expect } from "chai";

const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
const authUser = () => ({ type: 'AUTH_USER' })
it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(authUser())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  expect(actions) === { type: 'AUTH_USER' };
})