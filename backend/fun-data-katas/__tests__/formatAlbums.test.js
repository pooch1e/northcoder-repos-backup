const formatAlbum = require('../formatAlbums');
describe.only('tests for format album', () => {
  test('when passed empty arrays, returns array of an empty object', () => {
    const actual = formatAlbum([], {});
    const expected = [{}];
    expect(actual).toEqual(expected);
  });
  test('when given one album and one id, returns object with artist name replaced by id', () => {
    const album = [
      { name: 'Lover', artist: 'Taylor Swift', releaseYear: 2019 },
    ];
    const lut = { 'Taylor Swift': 9923 };
    const expected = [{ name: 'Lover', artistId: 9923, releaseYear: 2019 }];
    expect(formatAlbum(album, lut)).toEqual(expected);
  });
  test('when given multiple albums and id, returns array of objects with corret key/value pairs', () => {
    const albums = [
      { name: 'Lover', artist: 'Taylor Swift', releaseYear: 2019 },
      { name: 'High Voltage', artist: 'AC/DC', releaseYear: 1975 },
    ];

    const lut = {
      'Taylor Swift': 9923,
      'AC/DC': 324,
    };
    const expected = [
      { name: 'Lover', artistId: 9923, releaseYear: 2019 },
      { name: 'High Voltage', artistId: 324, releaseYear: 1975 },
    ];
    expect(formatAlbum(albums, lut)).toEqual(expected);
  });
  test('returns new array', () => {
    const albums = [
      { name: 'Lover', artist: 'Taylor Swift', releaseYear: 2019 },
      { name: 'High Voltage', artist: 'AC/DC', releaseYear: 1975 },
    ];

    const lut = {
      'Taylor Swift': 9923,
      'AC/DC': 324,
    };
    const actual = formatAlbum(albums, lut);
    const expected = [
      { name: 'Lover', artistId: 9923, releaseYear: 2019 },
      { name: 'High Voltage', artistId: 324, releaseYear: 1975 },
    ];
    expect(actual).not.toBe(expected);
  });
  test('original array and object are not mutated', () => {
     const albums = [
      { name: 'Lover', artist: 'Taylor Swift', releaseYear: 2019 },
      { name: 'High Voltage', artist: 'AC/DC', releaseYear: 1975 },
    ];

    const lut = {
      'Taylor Swift': 9923,
      'AC/DC': 324,
    };
    const copyOfAlbums = structuredClone(albums);
    const copyOfLut = {...lut}
    formatAlbum(albums, lut)
    expect(albums).toEqual(copyOfAlbums)
    expect(lut).toEqual(copyOfLut);
  });
});
