export async function POST(req: Request) {

    const body = await req.json();
    const a = body.a;
    const b = body.b;
    const sum = Number(a) + Number(b);

    return new Response(JSON.stringify({
        sum: Number(sum)
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}