import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights")
      .then((response) => response.json())
      .then((json) => {
        setFlights(json.data);
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select onChange={handleFlightSelect}>
        <option value={null}>Select a flight</option>
        {flights.length &&
          flights.map((flight) => (
            <option key={flight} value={flight}>
              {flight}
            </option>
          ))}
      </Select>
    </Wrapper>
  );
};

const Select = styled.select`
  width: 125px;
  margin-left: ${themeVars.pagePadding};
  border: none;
  border-radius: 4px;
  height: 32px;
`;
const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

export default FlightSelect;
