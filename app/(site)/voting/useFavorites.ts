import { useQuery, useQueryClient } from "react-query";
import API from "./api";
import { Updater } from "react-query/types/core/utils";

export const KEY = "favorites";

export default function useFavorites() {
  return useQuery([KEY], API.favorites.list);
}
