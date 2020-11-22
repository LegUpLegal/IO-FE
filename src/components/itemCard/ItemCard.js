import React, {useEffect} from "react";
import { CaseFiles, HearingInformation, TodoList } from "./@components";
import dummyData from "../../dummyData";
import { Typography, Card, CardHeader, CardContent, Divider, Box } from "@material-ui/core";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

const ItemCard = () => {

  useEffect(() => {
    monday.listen('context', res => {
      monday.api()
    })
  }, [])

  monday.setToken(process.env.REACT_APP_MONDAY_TOKEN)
  monday.api(`{
  me {
    name
  }
  boards(limit: 1) {
    name
    columns {
      title
    }
  }
  boards(limit: 1) {
    name
    columns {
      title
      id
      type
    }
    groups {
      title
      id
    }
    items {
      name
      group {
        id
      }
      column_values {
        id
        value
        text
      }
    }
  }
}
`).then(data => console.log(data))
  console.log(dummyData);
  const cardData = dummyData[0];
  return (
    <Card style={{background: "lightGray"}} raised>
      <CardHeader title={<Typography variant="h2">{cardData.title}</Typography>}/>
      <Divider />
      <CardContent>
        <CaseFiles folders={cardData.folders} status={cardData.status}/>
        <Divider /> 
        <TodoList tasks={cardData.tasks}/>
      </CardContent>
    </Card>
    // <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center">
    //   <Box>
    //     <Typography variant="h1">{cardData.title}</Typography>
    //     <hr />
    //   </Box>
    //   <Box>
    //     <CaseFiles folders={cardData.folders} status={cardData.status} />
    //     <hr />
    //   </Box>
    //   <Box>
    //     <TodoList tasks={cardData.tasks} />
    //     <hr />
    //   </Box>
    //   <Box>
    //     <HearingInformation
    //       hearingInformation={cardData.hearingInformation.hearingInformation}
    //       depositionInformation={
    //         cardData.hearingInformation.depostionInformation
    //       }
    //     />
    //   </Box>
    // </Box>
  );
};

export default ItemCard;
