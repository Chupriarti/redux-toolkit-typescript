import React from 'react';
import './App.css'
import { useAppDisptach, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';

function App() {
  const dispatch = useAppDisptach()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
