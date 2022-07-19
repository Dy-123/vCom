import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Image from '../../assets/image/background.jpg';

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${Image})`
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#FEFFE1",
          borderRadius: "5px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
