import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
    if(event.url.pathname === "/" || event.url.pathname === "/page") throw redirect(302, "/page/1");

    return resolve(event);
}