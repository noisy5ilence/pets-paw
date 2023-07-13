"use client";

import { useMemo } from "react";

import Grid from "@/components/Grid";
import useFavorites from "../voting/useFavorites";

export default function Container() {
  const { data: favorites } = useFavorites();

  const photos = useMemo(() => {
    return (
      favorites
        ?.filter(({ value }) => value == undefined)
        ?.map(({ image, image_id }) => ({ name: image_id, image })) || []
    );
  }, [favorites]);

  return <Grid photos={photos} />;
}
