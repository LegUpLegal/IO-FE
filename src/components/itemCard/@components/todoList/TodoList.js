import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useStyles } from "../../../../hooks";

const TodoList = ({ tasks }) => {
  console.log(tasks);
  const styles = useStyles();
  return (
    <Card className={styles.cardSection}>
      <CardHeader className={styles.cardHeaderTitle} title="TO-DO-LIST" />
      <CardContent>
        <FormGroup>
          {tasks.map((task, i) => {
            return (
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={task}
                key={i}
              />
            );
          })}
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default TodoList;
