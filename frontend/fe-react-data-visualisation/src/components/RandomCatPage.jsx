import { GetCatsComponent } from './GetCatsComponent';
import { Images } from './Images';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
export const RandomCatPage = () => {
  return (
    <>
      <div className='cats-container'>
      <GetCatsComponent>
        {(photos) => {
          return (
            <>
              <Images photos={photos} />
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </>
          );
        }}
      </GetCatsComponent>
      </div>
    </>
  );
};
