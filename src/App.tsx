import React from 'react';
import './App.css'
import { useAppDisptach, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  const dispatch = useAppDisptach()

  return (
    <div>
      Redux Toolkit Typescript
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
    </div>
  );
}

export default App;
