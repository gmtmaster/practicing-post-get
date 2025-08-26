export async function POST(req: Request) {
    const body = await req.json();
    const a = body.a;
    const b = body.b;

    const minus = Number(a) - Number(b);

    return new Response(
        JSON.stringify({
            minus: minus
            }
        ),
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    )

}