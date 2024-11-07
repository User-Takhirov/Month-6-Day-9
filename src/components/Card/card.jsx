import { Box, Button, Typography, Container, Stack } from "@mui/material";
import React from "react";
import { useDeleteUser } from "../../Service/Mutation/useDeleteUser";
import { toast } from "react-toastify";
import { useEditUser } from "../../Service/Mutation/useEditUser";
import { Link } from "react-router-dom";
export const Card = ({ item }) => {
  const { mutate } = useDeleteUser();
  const { mutate: edit } = useEditUser();

  const deleteUser = () => {
    mutate(item.id, {
      onSuccess: () => {
        toast.success("Deleted");
      },
    });
  };
  const editUser = () => {
    const editTitle = prompt("edit title");
    const editDes = prompt("edit des");
    edit(
      { id: item.id, data: { title: editTitle, description: editDes } },
      {
        onSuccess: () => {
          toast.success("User Edited");
        },
      }
    );
  };
  return (
    <>
      <Container>
        <Box
          bgcolor={"#110a61"}
          mb={"20px"}
          color={"white"}
          p={"20px"}
          textAlign={"center"}
          mx={"auto"}
          borderRadius={"20px"}
        >
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="h6">{item.description}</Typography>
          <Stack
            direction={"row"}
            gap={"10px"}
            justifyContent={"center"}
            mt={"10px"}
          >
            <Button onClick={deleteUser} color="error" variant="contained">
              Delete
            </Button>
            <Button onClick={editUser} color="warning" variant="contained">
              Edit
            </Button>
            <Link to={`home-detail/${item.id}`}>
              <Button variant="contained">Show</Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
