import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleUser } from "../../Service/Query/useGetSingleUser";
import { Box, Typography } from "@mui/material";
export const HomeDetail = () => {
  const { id } = useParams();
  const { data } = useGetSingleUser(id);
  return (
    <>
      {data && (
        <Box
          bgcolor={"blueviolet"}
          color={"white"}
          width={"600px"}
          textAlign={"center"}
          mx={"auto"}
          p={"15px"}
          borderRadius={"20px"}
        >
          <Typography variant="h3">{data.title}</Typography>
          <Typography variant="h5">{data.description}</Typography>
        </Box>
      )}
    </>
  );
};
