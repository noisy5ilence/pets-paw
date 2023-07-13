import { useQuery } from "react-query";
import API from "./api";

export const KEY = "votes";

export default function useVotes() {
  return useQuery([KEY], API.votes.list);
}
