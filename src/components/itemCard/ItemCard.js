import React, { useEffect, useState, useMemo } from "react";
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
  const [item, setItem] = useState([]);
  // const [status, setStatus] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await api.fetchBoards();
      setItem(data.data.boards[0].items[0]);
    }
    getData();
  }, []);

  console.log(item);

  const cardData = dummyData[0];
  const {
    hearingInformation,
    depositionInformation,
    folders,
    tasks,
  } = cardData;

  if (item.length) {
    const statusItem =
      item?.column_values.filter((entry) => entry.title === "status")[0] ?? "";
    console.log(statusItem)
  }

  const status = useMemo(() => {
    return item?.column_values?.filter(entry => entry.title === "Status")[0].text ?? ""
  }, [item])

  console.log(status)

  return (
    <Card style={{ background: "lightGray" }} raised>
      <CardHeader title={<Typography variant="h2">{item.name}</Typography>} />
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
