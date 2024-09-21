"use client";
import { Button } from "@/components/ui/button";
import { revalidate } from "./actions";
import { useRouter } from "next/navigation";

export default function PageContent({ data }: { data: { datetime: string } }) {
  const router = useRouter();
  const onClick = () => {
    revalidate();
    router.refresh();
  };

  return (
    <main className="flex flex-col justify-center items-center p-24 gap-4">
      <h1 className="text-3xl">On demand revalidation</h1>
      <h2 className="text-2xl">
        Current Cached Date: {new Date(data.datetime).toTimeString()}
      </h2>
      <Button onClick={onClick}> Revalidate </Button>
    </main>
  );
}
