import { HandlerContext } from "$fresh/server.ts";
import { RouteConfig } from "$fresh/server.ts";

import { wallets } from "../../../utils/wallets.ts";

export const config: RouteConfig = {
  routeOverride: "/.well-known/wallets/:symbol",
};

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const symbol = ctx.params["symbol"];

  const address = wallets.get(symbol.toUpperCase());
  if (!address) {
    return new Response("Address not found", { status: 404 });
  }
  return new Response(address);
};
