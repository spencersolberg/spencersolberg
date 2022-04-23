import { LoaderFunction } from "@remix-run/node";

const coins = new Map([
    ["BTC", "3PNsWniSkBVeVv9S21n5Guxn6MFBr3nJr4"],
    ["HNS", "hs1qddghte5p778wcwn6pzjlgzgpwrpdqk0ktm7dsw"]
]);

export const loader: LoaderFunction = ({ params }) => {
    const ticker = params.ticker!.toUpperCase();
    const address = coins.get(ticker);

    if (!address) return new Response(undefined, { status: 404, statusText: `404: No address found for "${params.ticker}".` });

    return new Response(address)
}