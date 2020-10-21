import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  return (
    <Wrapper>
      <Content>
        <Message>Your flight is confirmed!</Message>
        <ul>
          <ListItem>
            Reservation #: <Span>{userReservation.id}</Span>
          </ListItem>
          <ListItem>
            Flight #: <Span>{userReservation.flight}</Span>
          </ListItem>
          <ListItem>
            seat #: <Span>{userReservation.seat}</Span>
          </ListItem>
          <ListItem>
            Name:{" "}
            <Span>{`${userReservation.givenName} ${userReservation.surname}`}</Span>
          </ListItem>
          <ListItem>
            Email: <Span>{userReservation.email}</Span>
          </ListItem>
        </ul>
      </Content>
      <Image src={tombstone} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 200px auto 120px;
`;
const Content = styled.div`
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  margin: auto 12px auto 18px;
  padding: 30px;
  width: 550px;
`;
const ListItem = styled.ul`
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0 12px;
`;
const Span = styled.span`
  font-weight: 400;
`;
const Message = styled.p`
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
  color: ${themeVars.alabamaCrimson};
  font-weight: 700;
  font-size: 26px;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  height: 220px;
  margin: 32px 0 0 0;
  text-align: center;
`;

export default Confirmation;
