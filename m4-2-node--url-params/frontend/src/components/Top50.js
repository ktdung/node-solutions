import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import SongList from "./SongList";

const Top50 = () => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    fetch("/top50")
      .then((res) => res.json())
      .then((json) => {
        setAllSongs(json.data);
      });
  }, []);

  return (
    <>
      <Header pageTitle="Top 50 Songs Streamed on Spotify" />
      <Content>{allSongs.length > 0 && <SongList songs={allSongs} />}</Content>
    </>
  );
};

export default Top50;
