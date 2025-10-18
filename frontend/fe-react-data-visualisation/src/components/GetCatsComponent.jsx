import { useState, useEffect } from "react";
import { getCats } from "../utils/getCats";

export const GetCatsComponent = ({children, searchQuery = null}) => {
const [photos, setPhoto] = useState([]);
console.log(searchQuery, 'should be breed ')
  useEffect(() => {
    getCats(searchQuery).then((result) => {
      setPhoto(result);
      
    });
  }, [searchQuery]);
  

  if (!photos.length) return <p>Loading...</p>

  return (<>
  {children(photos)}
  </>)

}