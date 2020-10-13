import React from "react";
import SongLi from "./SongLi";

const SongList = ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <SongLi key={`song-${song.rank}`} song={song} />
    ))}
  </ul>
);

export default SongList;
