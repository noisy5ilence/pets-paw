import { v4 } from "uuid";
import { cookies } from "next/headers";

export default function uid() {
  const Cookies = cookies();
  const catLoverId = Cookies.get("catLoverId")?.value;

  if (!catLoverId) {
    const uid = v4();

    const days = 30;
    const hours = 24;
    const minutes = 60;
    const seconds = 60;

    Cookies.set("catLoverId", uid, {
      maxAge: days * hours * minutes * seconds,
      path: "/",
    });

    return uid;
  }

  return catLoverId;
}
