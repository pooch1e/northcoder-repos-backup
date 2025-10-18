import { useState, useEffect } from 'react';
import { getUserById } from '../api';
function UserList() {
  const [users, setUser] = useState(null);
  const [userId, setUserId] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  function handleNextButton() {
    //when event happens, we want to call getUserId with id + 1
    setUserId(userId + 1);
    setLoading(true);
  }

  function handleBackButton() {
    if (userId <= 1) {
      setUserId(1);
    } else {
      setUserId(userId - 1);
      setLoading(true);
    }
  }

  function getRandomUser() {
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    setUserId(random);
  }
  useEffect(() => {
    console.log('use effect mounted in userlist');
    getUserById(userId)
      .then((result) => {
        console.log(result, `Got user at ${userId}`);
        setUser(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('No more users');
        setLoading(false);
      });
  }, [userId]);
  console.log(users, '<< user stored in state>>');

  if (isLoading) {
    return <p>'Loading...'</p>;
  } //because async

  if (isError) {
    return (
      <section>
        <h2>Error</h2>
        <p>{isError}</p>
      </section>
    );
  }
  return (
    <section className='user-card'>
      <h2>Name: {users.name}</h2>
      <h3>Username: {users.username}</h3>
      <p><strong>Email:</strong> {users.email}</p>
      <p><strong>Company:</strong> {users.company.name}</p>
      <div className='button-container'>
      <button onClick={handleNextButton} disabled={isLoading}>
        Next
      </button>
      <button onClick={handleBackButton} disabled={isLoading}>
        Back
      </button>
      <button onClick={getRandomUser} disabled={isLoading}>
        Random
      </button>
      </div>
    </section>
  );
}

export default UserList;
