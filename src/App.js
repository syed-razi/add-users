import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Wrapper from './components/Helpers/Wrapper';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Wrapper>
  );
}

export default App;
