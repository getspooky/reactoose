import {applyMiddleware,createStore,compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/index'
const initialState = {};
const middleware = [thunk];
const store = createStore(reducers,initialState,
    compose(applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ));

export default store;