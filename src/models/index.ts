import { all, fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { globalModel } from './global';
import { loginModel } from './auth/login';
import { categoryModel } from './category';
import { imageModel } from './image';

function* rootSaga() {
  yield all([
    fork(loginModel.effects),
    fork(globalModel.effects),
    fork(categoryModel.effects),
    fork(imageModel.effects)
  ]);
}

const rootReducer = combineReducers({
  global: globalModel.reducer,
  login: loginModel.reducer,
  category: categoryModel.reducer,
  image: imageModel.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export { rootSaga, rootReducer };
