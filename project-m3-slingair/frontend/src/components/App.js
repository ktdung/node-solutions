import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    // check localStorage for an id
    // if yes, get data from server and add it to state
    const reservationId = localStorage.getItem("id") || null;
    if (reservationId) {
      fetch(`/reservations/${reservationId}`)
        .then((response) => response.json())
        .then((json) => setUserReservation(json.data));
    }
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation} />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route path="">404</Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: ${themeVars.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
