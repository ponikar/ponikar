import Axios from "axios";

export const getRequest = <T = unknown>(endPoint: string) => {
  return Axios.get<unknown, { data: T }>(endPoint);
};
