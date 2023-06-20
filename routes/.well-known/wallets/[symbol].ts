import { HandlerContext, PageProps } from "$fresh/server.ts";

import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/.well-known/wallets/:symbol",
};

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const symbol = ctx.params["symbol"];
  // create set of symbols mapped to addresses
  const symbols = new Map<string, string>();
  symbols.set("HNS", "hs1qqsc065xcsh68nt25h4vsmgx7vcyrwtajlhlxlc");

  const address = symbols.get(symbol.toUpperCase());
  if (!address) {
    return new Response("Address not found", { status: 404 });
  }
  return new Response(address);
};
