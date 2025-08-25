export async function POST(req: Request) {

    const body = await req.json();
    const text = body.text;
    const length = text.length;

    return new Response(
        JSON.stringify({
            length: length
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}