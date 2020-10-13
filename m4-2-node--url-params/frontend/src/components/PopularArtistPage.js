import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import SongList from "./SongList";

const PopularArtistPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/top50/popular-artist")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  return (
    <>
      <Header pageTitle="Most Popular Artist" />
      <Content>{songs.length > 0 && <SongList songs={songs} />}</Content>
    </>
  );
};

export default PopularArtistPage;
