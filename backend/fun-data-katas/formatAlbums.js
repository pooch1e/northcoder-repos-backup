const formatAlbum = (albums, id) => {
  // need to access albums which is array of objects
  // need to map/iterate over LUT(id) which is an object and pull out artistId key
  //replace name value on album object with artist id
  if (albums.length === 0) {
    return [{}];
  }

  const result = albums.map((album) => {
    const artistId = id[album.artist];

    return {
      name: album.name,
      artistId: artistId,
      releaseYear: album.releaseYear,
    };
  });
  return [...result];
};

module.exports = formatAlbum;
