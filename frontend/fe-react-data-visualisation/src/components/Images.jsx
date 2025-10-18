import { Image } from "react-bootstrap";
export const Images = ({ photos }) => {
  let breedName = 'Random Cat';

  if (
    photos[0].breeds &&
    Array.isArray(photos[0].breeds) &&
    photos[0].breeds.length > 0 &&
    photos[0].breeds[0].name
  ) {
    breedName = photos[0].breeds[0].name;
  }

  return (
    <>
      <h4>{breedName}</h4>
      <div className="photo">
        {photos.map((photo) => {
          return <Image key={photo.id} src={photo.url} width={200} />;
        })}
      </div>
    </>
  );
};
