import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import SongList from "./SongList";

const ArtistPage = () => {
  const { artistName } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/top50/artist/${artistName}`)
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  return (
    <>
      <Header pageTitle={`Songs by ${artistName}`} />
      <Content>{songs.length > 0 && <SongList songs={songs} />}</Content>
    </>
  );
};

export default ArtistPage;
