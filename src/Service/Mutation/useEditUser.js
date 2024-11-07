import { request } from "../../Config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      request.put(`/todos/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["Update"]);
    },
  });
};
