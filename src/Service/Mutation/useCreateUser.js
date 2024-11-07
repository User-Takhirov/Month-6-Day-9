import { useMutation } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data) => {
      return request.post("/todos", data).then((res) => res.data);
    },
  });
};
