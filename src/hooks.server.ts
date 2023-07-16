import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
    if(event.route.id === "/" || event.route.id === "/page") throw redirect(302, "/page/1");

    return resolve(event);
}