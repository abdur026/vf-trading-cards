import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, params) {
  const { cardName } = params.params;
  if (!cardName) {
    return NextResponse.json({
      status: 400,
      message: "Missing CardId.",
    });
  }
  try {
    const records = await prisma.Card.findFirst({
      where: {
        Id: Number(cardName),
      },
    });

    if (records) {
      return NextResponse.json({ records });
    } else {
      return NextResponse.error("Record not found", { status: 404 });
    }
  } catch (err) {
    console.log("err", err);
  }
}
