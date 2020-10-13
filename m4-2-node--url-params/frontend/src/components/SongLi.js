import React from "react";
import styled from "styled-components";

const SongLi = ({ song }) => (
  <Wrapper>
    <DataInfo>
      <Ranking>#{song.rank}</Ranking>
      <Streams>({song.streams} streams)</Streams>
    </DataInfo>
    <SongInfo>
      <Title>{song.title}</Title>
      <Artist>{song.artist}</Artist>
    </SongInfo>
    <DateInfo>{song.publicationDate}</DateInfo>
  </Wrapper>
);

const Wrapper = styled.li`
  border-bottom: 1px solid #808080;
  display: flex;
  padding: 6px 0;
`;
const DataInfo = styled.div`
  flex: 0 0 100px;
  display: flex;
  flex-direction: column;
`;
const SongInfo = styled.div`
  flex: 1 0 auto;
`;
const DateInfo = styled.p`
  font-size: 12px;
  margin-top: auto;
  text-align: right;
`;
const Ranking = styled.p`
  font-size: 40px;
  font-weight: 700;
`;
const Streams = styled.p`
  font-size: 10px;
  margin-top: -12px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
const Artist = styled.p`
  font-style: italic;
`;
export default SongLi;
