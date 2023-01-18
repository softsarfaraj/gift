import React from "react";
import { TextField, Button, Grid, Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import { UserItem } from "./UserItem";
import axios from "axios";

export const User = () => {
  const [data, setData] = useState([]);
  const [oridata, setoriData] = useState([]);
  const [txt, setText] = useState("");

  const getData = async () => {
    const result = await axios.get( 
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(result.data);
    setoriData(result.data);
  };
  const handleStatus = (isCompleted) => {
    const filtered = oridata.filter((item) => item.completed === isCompleted);
    setData(filtered);
  };

  const handledelete = (index) => {
    const filtered = data.filter((item, ind) => index !== ind);
    setData(filtered);
    setoriData(filtered);
  };
  
  const handlesave = (index, val) => {
    const newdata = data;
    newdata[index].title = val;
    setData(newdata);
  };

  useEffect(() => {
    const filtered = oridata.filter((item) =>
      item.title.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtered);
  }, [txt]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setText(e.target.value)}
            fullWidth
            variant="outlined"
            label="Search...."
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>{oridata.length}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={() => handleStatus(true)}
          >
            Completed
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => handleStatus(false)}
          >
            In Progress
          </Button>
        </Grid>

        {data.map((item, index) => (
          <UserItem
            item={item}
            index={index}
            handledelete={handledelete}
            handlesave={handlesave}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};
