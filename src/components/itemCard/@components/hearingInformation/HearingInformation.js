import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import { useStyles } from "../../../../hooks";

const HearingInformation = ({ hearingInformation }) => {
  const styles = useStyles();
  const {
    address,
    hearingType,
    department,
    judge,
    dialInNumber,
    date,
    time,
  } = hearingInformation;

  return (
    <Card className={styles.cardSection}>
      <CardHeader
        className={styles.cardHeaderTitle}
        title="NEXT HEARING INFORMATION"
      />
      <CardContent>
        <Box display="flex">
          <Box mb={3}>
            <Typography>Hearing Type: {hearingType}</Typography>
            <Typography> Department: {department}</Typography>
            <Typography>Judge: {judge}</Typography>
            <Typography>Date: {date}</Typography>
            <Typography>Time: {time}</Typography>
            <Typography>Dial-In-Number: {dialInNumber}</Typography>
            <Typography>Address: {address}</Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          ADD TO CALENDAR
        </Button>
      </CardContent>
    </Card>
  );
};

export default HearingInformation;
