import { NextResponse } from 'next/server';
import { query } from "@/lib/db";

export async function GET() {
    try {
        const result = await query("SELECT NOW()");
        return NextResponse.json({ ok: true, now: result.rows[0] });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 500});
    }
}