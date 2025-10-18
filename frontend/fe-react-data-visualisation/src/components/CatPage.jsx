import { GetCatsComponent } from './GetCatsComponent';
import { Images } from './Images';
import { Votes } from './Vote';
import { useLocation } from 'react-router-dom';
export const CatPage = () => {
  const location = useLocation();
  const breed = location.state?.breed || '';
  console.log(breed, 'from catpage');
  return (
    <>
      <h2>Breed</h2>
      <GetCatsComponent searchQuery={breed}>
        {(photos) => {
          const photo = photos[0];
          return (
            <>
              <Images photos={photos} />
              <Votes catId={photo.id} />
            </>
          );
        }}
      </GetCatsComponent>
    </>
  );
};
