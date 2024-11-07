import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Home } from "../Home";
import { HomeDetail } from "../components/HomeDetail";
import { Box, Typography } from "@mui/material";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home-detail/:id" element={<HomeDetail />} />
          <Route
            path="*"
            element={
              <Box textAlign={"center"}>
                <Typography variant="h1" mt={"20px"} fontWeight={"700"}>
                  Not Found 404
                </Typography>
              </Box>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
