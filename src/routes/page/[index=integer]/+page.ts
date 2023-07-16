import type { EmojiResponse } from "$lib";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
    const response = await fetch(`/api?${new URLSearchParams({ page: params.index })}`);
    const { emojis, pages }: EmojiResponse = await response.json();

    return {
        emojis,
        pages
    };
};