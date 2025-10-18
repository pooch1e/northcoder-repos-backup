import { PlayCount } from "./PlayCounts";
export function ListItem({ song, isPlaying, playCounts }) {
  if (isPlaying) {
  return (
    <li className="song-current">
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
      <img className="song-img" src={song.albumCover}  />
    </li>
  );
  } else {
    return (
    <li>
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
      <img className="song-img" src={song.albumCover}  />
    </li>
  );
  }
}