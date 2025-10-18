import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Button } from 'react-bootstrap';

export const HomePage = () => {
  

  return (
    <>
    <h2>Search for a breed</h2>
    <p>Or click random</p>
    <SearchBar />
      <Link to="/randomCatPage">
        <Button variant='outline-primary' className='random-cat-btn'>Get Random Cat</Button>
        
      </Link>
    </>
  );
};
