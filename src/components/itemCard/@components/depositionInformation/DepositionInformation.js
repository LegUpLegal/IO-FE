import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../../../hooks";

const DepositionInformation = ({ depositionInformation }) => {
  const styles = useStyles();
  console.log(depositionInformation);
  const { deponent, date, time, address, zoomLink } = depositionInformation;
  return (
    <Card className={styles.cardSection}>
      <CardHeader
        className={styles.cardHeaderTitle}
        title="NEXT DEPOSITION INFORMATION"
      />

      <CardContent>
        <Box display="flex">
          <Box mb={3}>
            <Typography>Deponent: {deponent}</Typography>
            <Typography> Date: {date}</Typography>
            <Typography>Time: {time}</Typography>
            <Typography>Address: {address}</Typography>
            <Typography>Zoom Link: {zoomLink}</Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          ADD TO CALENDAR
        </Button>
      </CardContent>
    </Card>
  );
};

export default DepositionInformation;
