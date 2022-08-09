// import {createStore} from "redux";
import reducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit';
// ...

const store = configureStore({
  reducer: reducer,
  // {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  // },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof store.dispatch>

// const store= createStore(reducer);

export default store;
