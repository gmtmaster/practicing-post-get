export async function GET(req: Request) {

    const name = new URL(req.url).searchParams.get("name");

    return new Response(
        JSON.stringify({
            message: `Szia, ${name}!`
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}