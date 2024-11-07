import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["Update"],
    queryFn: () => request.get("/todos").then((res) => res.data),
  });
};
