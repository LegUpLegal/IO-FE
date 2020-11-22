import React from "react";
import { Box } from "@material-ui/core";

const HearingInformation = ({ hearingInformation, depositionInformation }) => {
  const { hearingType, dialInNumber } = hearingInformation;
  const { date, time, zoomLink } = depositionInformation;

  return (
    <Box p={3}>
      <h1>NEXT HEARING INFORMATION</h1>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <h4>Next Hearing Information</h4>
          <p>Hearing Type: {hearingType}</p>
          <p>Dial-In-Number: {dialInNumber}</p>
        </Box>
        <Box>
          <h4>Deposition Information</h4>
          <p>Date: {date}</p>
          <p>TIME: {time}</p>
          <p>ZOOMLINK: {zoomLink}</p>
        </Box>
      </Box>
      <button>ADD TO CALENDAR</button>
    </Box>
  );
};

export default HearingInformation;
