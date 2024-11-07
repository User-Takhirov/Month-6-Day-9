import { Box, Button, Typography, Container, Stack } from "@mui/material";
import React from "react";
import { useDeleteUser } from "../../Service/Mutation/useDeleteUser";
import { toast } from "react-toastify";
import { useEditUser } from "../../Service/Mutation/useEditUser";
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
        <Box>
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="h6">{item.description}</Typography>
          <Stack direction={"row"} gap={"10px"}>
            <Button onClick={deleteUser} color="error" variant="contained">
              Delete
            </Button>
            <Button onClick={editUser} color="warning" variant="contained">
              Edit
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
