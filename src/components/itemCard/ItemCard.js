import React, { useEffect, useState } from "react";
import {
  CaseFiles,
  DepositionInformation,
  HearingInformation,
  TodoList,
} from "./@components";
import dummyData from "../../dummyData";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from "@material-ui/core";

import { api } from "../../api";

const ItemCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await api.fetchBoards();
      setData(data);
    }
    getData();
  }, []);

  console.log(data);

  const cardData = dummyData[0];
  const {
    hearingInformation,
    depositionInformation,
    folders,
    tasks,
    title,
    status,
  } = cardData;

  return (
    <Card style={{ background: "lightGray" }} raised>
      <CardHeader title={<Typography variant="h2">{title}</Typography>} />
      <Divider />
      <CardContent>
        <CaseFiles folders={folders} status={status} />
        <Divider />
        <TodoList tasks={tasks} />
        <Divider />
        <HearingInformation hearingInformation={hearingInformation} />
        <Divider />
        <DepositionInformation depositionInformation={depositionInformation} />
      </CardContent>
    </Card>
  );
};

export default ItemCard;
