import { HandlerContext } from "$fresh/server.ts";
import { RouteConfig } from "$fresh/server.ts";

import { wallets } from "../../utils/wallets.ts";

export const config: RouteConfig = {
  routeOverride: "/.well-known/wallets",
};

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const symbols = wallets.keys();
  // join symbols (IterableIterator<string>) by comma
  const body = [...symbols].join(",");

  return new Response(body);
};
