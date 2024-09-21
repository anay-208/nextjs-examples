import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidatePath("/fullcache");
  return NextResponse.json({
    success: true,
  });
}
