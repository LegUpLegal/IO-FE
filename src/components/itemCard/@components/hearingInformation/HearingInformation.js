import React from "react";

const HearingInformation = ({ hearingDate, hearingTime, zoomLink }) => {
  return (
    <>
      <p>DATE: {hearingDate}</p>
      <p>TIME: {hearingTime}</p>
      <p>ZOOMLINK: {zoomLink}</p>
      <button>ADD TO CALENDAR</button>
    </>
  );
};

export default HearingInformation;
