"use client";

import { useMemo } from "react";
import useVotes from "../voting/useVotes";

import Grid from "@/components/Grid";

export default function Container() {
  const { data: votes } = useVotes();

  const photos = useMemo(() => {
    return (
      votes
        ?.filter(({ value }) => value > 0)
        ?.map(({ image, image_id }) => ({ name: image_id, image })) || []
    );
  }, [votes]);

  return <Grid photos={photos} />;
}
