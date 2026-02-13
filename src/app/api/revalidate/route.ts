import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-charlie-portfolio-webhook-secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // const body = await req.json();

    revalidatePath("/");
    // revalidatePath("/projects/[id]");

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Revalidation failed" },
      { status: 500 },
    );
  }
}
