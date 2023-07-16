import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    throw error(404, { statusCode: 404, message: "Oops! Does not look like the page you were looking for exists. Please make sure the URL is accurate."});
};