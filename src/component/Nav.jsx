import React from "react";
import { Link } from "react-router-dom";
import {Grid} from "@mui/material"
 export const Nav=()=>{

    return(
        < div className="ul">
        <Grid container spacing={1}>
            <Grid item xs={1} >
                <Link to="/" >Home</Link>
            </Grid>
            <Grid item xs={1} >
                <Link to="/user" >Users</Link>
            </Grid>

        </Grid>
        </div>
    )
 }