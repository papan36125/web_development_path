import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
// if (window.navigator.userAgent.includes('Chrome')) {
//     const store = createStore(
//       reducer,
//       initialState,
//       compose(
//         applyMiddleware(
//           routerMiddleware(browserHistory)
//         ),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     );
//   } else {
//     var store = createStore(
//       reducer,
//       initialState,
//       compose(
//         applyMiddleware(
//           routerMiddleware(browserHistory)
//         )
//       )
//     );
//   }
const store = createStore(  
rootReducer,  initialState,
  compose(
    applyMiddleware(...middleware),
    window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  )
);
export default store;