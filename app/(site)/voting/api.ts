import client from "@/network";

const API = {
  randomCats(): Promise<RandomCat[]> {
    return client.get("/randomCat");
  },
  favorites: {
    list(): Promise<Favorite[]> {
      return client.get("/favorites");
    },
    add({ catId }: { catId: string }): Promise<SuccessResponse> {
      return client.post("/favorites", { image_id: catId });
    },
    delete({ favoriteId }: { favoriteId: string }) {
      return client.delete("/favorites", {
        params: {
          favoriteId,
        },
      });
    },
  },
  votes: {
    vote({
      catId,
      vote,
    }: {
      catId: string;
      vote: number;
    }): Promise<SuccessResponse> {
      return client.post("/votes", { image_id: catId, value: vote });
    },
    list(): Promise<Vote[]> {
      return client.get("/votes");
    },
  },
};

export default API;
