import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
} from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import { useStyles } from "../../../../hooks";

const CaseFiles = ({ folders, status }) => {
  const styles = useStyles();
  return (
    <Card className={styles.cardSection}>
      <CardHeader className={styles.cardHeaderTitle} title="CASE FILES" />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
          >
            {folders.map((folder) => {
              const { files, title, folderId } = folder;

              return (
                <TreeItem key={folderId} nodeId={folderId} label={title}>
                  {files.map((file) => (
                    <TreeItem
                      key={file.fileId}
                      nodeId={file.fileId}
                      label={file.title}
                    />
                  ))}
                </TreeItem>
              );
            })}
          </TreeView>
          <Box display="flex" textAlign="center" flexDirection="column">
            <Typography variant="h4">Status</Typography>
            <Box
              component="div"
              width={120}
              textAlign="center"
              bgcolor="yellow"
            >
              {<Typography>{status}</Typography>}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CaseFiles;
