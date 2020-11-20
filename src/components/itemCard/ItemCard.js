import React from "react";
import { CaseFiles, HearingInformation, TodoList } from "./@components";
import dummyData from "../../dummyData";

const ItemCard = () => {
  console.log(dummyData);
  const cardData = dummyData[0];
  return (
    <div>
      <h1>{cardData.title}</h1>
      <hr />
      <CaseFiles folders={cardData.folders} status={cardData.status} />
      <hr />
      <TodoList tasks={cardData.tasks} />
      <hr />
      <HearingInformation
        hearingDate={cardData.hearingDate}
        hearingTime={cardData.hearingTime}
        zoomLink={cardData.zoomLink}
      />
    </div>
  );
};

export default ItemCard;
