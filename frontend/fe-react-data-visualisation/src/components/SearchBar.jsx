import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export const SearchBar = () => {
  const [item, setNewItem] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(item)
    navigate('/catpage', { state: { breed: item } });
    setNewItem(''); //reset search bar
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-bar"
          value={item}
          placeholder="Search for Cat Breeds..."
          onChange={handleChange}></input>
          <Button variant="outline-secondary" type='submit'>Search</Button>
      </form>
    </>
  );
};
