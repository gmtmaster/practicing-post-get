export async function POST(req: Request) {

    const body = await req.json();
    const secret = body.secret;

    if (secret === "1234") {
        return new Response(
            JSON.stringify({access: "granted"}),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        )
    } else {
        return new Response(
            JSON.stringify({access: "denied"}),
            {
                status: 401,
                headers: { "Content-Type": "application/json" }
            }
        )

    }
}