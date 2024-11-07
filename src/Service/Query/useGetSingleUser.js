import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useGetSingleUser = (id) => {
  return useQuery({
    queryKey: ["single-user"],
    queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
  });
};
