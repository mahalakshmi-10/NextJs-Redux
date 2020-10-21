import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer,initialState } from './states/announcement/reducer';

import {createWrapper, Context} from 'next-redux-wrapper';

export interface State {
  message: 'No announcement...'
}



// export const initalStore = (initialState) => {
//   return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }




  
// create a makeStore function
const makeStore: any = (context: Context) => createStore(reducer, initialState,
   composeWithDevTools(applyMiddleware(thunkMiddleware))); 


// let store = createStore(quotes, initialState, applyMiddleware(httpMiddleware));


// export an assembled wrapper    
export const wrapper = createWrapper<State>(makeStore, {debug: true});     