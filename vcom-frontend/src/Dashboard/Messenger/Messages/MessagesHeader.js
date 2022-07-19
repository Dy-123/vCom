import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ name = "" }) => {
  return (
    <MainContainer>
      <Avatar medium username={name} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
