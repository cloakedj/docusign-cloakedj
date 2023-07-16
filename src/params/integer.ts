import type { ParamMatcher } from "@sveltejs/kit";

export function match(param: string): ParamMatcher{
    return /^\d+$/.test(param);
}