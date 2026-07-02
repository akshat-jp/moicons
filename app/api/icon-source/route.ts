import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const filePath = req.nextUrl.searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  try {
    
    const fullPath = path.join(process.cwd(), `${filePath}.tsx`);
    const code = fs.readFileSync(fullPath, "utf-8");
    return NextResponse.json({ code });
  } catch (e) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}