import { TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
export const Form = ({ SubmitData }) => {
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    SubmitData(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <TextField placeholder="Title" {...register("title")} />
        <TextField placeholder="Description" {...register("description")} />
        <Button type="submit" variant="contained" sx={{ height: "56px" }}>
          Send
        </Button>
      </form>
    </>
  );
};
