import type { Emoji } from "$lib";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ setHeaders, url }) => {
  const response = await fetch("https://emojihub.yurace.pro/api/all");
  let emojis: Array<Emoji> = await response.json();
  const emojisPerPage = 10;

  const paginationIndex = parseInt(url.searchParams.get("page") ?? "1") - 1;
  const filterCategory = url.searchParams.get("category");

  if (filterCategory) {
    emojis = emojis.filter((emoji) => emoji.category === filterCategory);
  }

  setHeaders({
    "Cache-control": "max-age=60000",
  });

  const startIndex = paginationIndex * emojisPerPage;
  if (startIndex + emojisPerPage > emojis.length - 1) {
    return json({
      emojis: emojis.slice(startIndex, startIndex + (emojis.length - 1)),
      pages: Math.floor(emojis.length / emojisPerPage),
    });
  }
  return json({
    emojis: emojis.slice(startIndex, startIndex + emojisPerPage),
    pages: Math.floor(emojis.length / emojisPerPage),
  });
};
