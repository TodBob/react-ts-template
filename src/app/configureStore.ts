import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { loadState, saveState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedState = loadState();

const composeEnhancers = (
  window && (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

store.subscribe(() => {
  saveState({
    usersData: { userName: store.getState().usersData.userName },
    postsData: { postTitle: store.getState().postsData.postTitle },
  });
});

sagaMiddleware.run(rootSaga);

export default store;
