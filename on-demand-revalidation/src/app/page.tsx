import PageContent from "./client";

export const dynamic = "force-static";

export default async function Home() {
  const data = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata",
  ).then((res) => res.json());

  return <PageContent data={data} />;
}
