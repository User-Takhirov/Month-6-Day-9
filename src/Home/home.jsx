import { Typography, Box, Container } from "@mui/material";
import { Card } from "../components/Card";
import React from "react";
import { Form } from "../components/Form";
import { useCreateUser } from "../Service/Mutation/useCreateUser";
import { useGetUsers } from "../Service/Query/useGetUsers";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const Home = () => {
  const { data, isLoading } = useGetUsers();
  const { mutate } = useCreateUser();
  const client = useQueryClient();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        client.invalidateQueries(["Update"]);
        toast.success("New User Added");
      },
    });
  };
  return (
    <>
      <Container>
        <Form SubmitData={submit} />
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <Box>
            <Box>
              {data?.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};
