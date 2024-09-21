// This file caches the entire route

import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

const getResponse = unstable_cache(async () => {
  const data = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata",
  ).then((res) => res.json());

  // This will only be executed when cache is revalidated
  console.log("full cache route");

  return {
    cache: {
      datetime: data.datetime,
      parsed: new Date(data.datetime).toLocaleString(),
    },
  };
}, ["fullcache"]);

export async function GET() {
  // This will be logged on every request(if uncommented).
  // console.log("full cache route GET");

  // Cache the entire route
  const response = await getResponse();

  return NextResponse.json(response);
}
