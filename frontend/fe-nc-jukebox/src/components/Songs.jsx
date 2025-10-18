import { ListItem } from "../components/ListItem";

function Songs({songs, currentlyPlaying, setCurrentlyPlaying}) {
  // console.log(ListItem, 'Listitem')
  console.log(currentlyPlaying, 'currently Playing')
  

  function handleNextSongClick() {
    console.log('clicked next song')
    setCurrentlyPlaying(currentlyPlaying + 1);
    if (currentlyPlaying === songs.length - 1) {
      setCurrentlyPlaying(0);
    }
  }

  return (
    <>
    <h2>{songs[currentlyPlaying].title}</h2>
    <button onClick={handleNextSongClick}>Next Song</button>
  <ol className="song-list">
        {songs.map((song, index) => {
          const isPlaying = index === currentlyPlaying;
          return <ListItem key={song.id} song={song} isPlaying={isPlaying} />
        })}
      </ol>
    </>
  )
}

export default Songs;