export async function POST(req: Request) {
    const body = await req.json();
    const text = body.text;

    const uppercase = text.toUpperCase();

    return new Response(
        JSON.stringify({
            uppercase: uppercase
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )


}