import React from "react";
/////////////////Import components
import Notes from "./notes/Notes";
import SwipeDrawer from "./SwipeDrawer";
import { Box } from "@mui/material";
////////////////Components  import end

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer></SwipeDrawer>
      <Notes></Notes>
    </Box>
  );
};

export default Home;
