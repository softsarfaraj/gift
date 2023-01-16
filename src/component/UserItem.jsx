import { Grid, Card, CardContent, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const UserItem = ({ item, index, handledelete, handlesave }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [val, setVal] = useState(item.title);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Card
                  sx={{
                    bgcolor: item.completed ? "green" : "yellow",
                    height: 60,
                  }}
                ></Card>
              </Grid>
              <Grid item xs={5}>
                {isUpdate ? (
                  <TextField
                    value={val}
                    fullWidth
                    label="Title"
                    onChange={(e) => setVal(e.target.value)}
                  />
                ) : (
                  <Card sx={{ bgcolor: "coral" }}>
                    <CardContent>{item.title}</CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={1}>
                <Card>{item.id}</Card>
              </Grid>
              <Grid item xs={1}>
              {item.completed ? "Completed" : "In Progress"}
              </Grid>
              <Grid item xs={2}>
                {isUpdate ? (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      handlesave(index, val);
                      setIsUpdate(false);
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setIsUpdate(true)}
                  >
                    Add/Update
                  </Button>
                )}
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handledelete(index)}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
