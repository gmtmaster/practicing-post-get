export async function POST(req: Request) {

    const body = await req.json();
    const firstName = body.firstName;
    const lastName = body.lastName;

    const fullName = `${firstName} ${lastName}`;

    return new Response(
        JSON.stringify({fullName}),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}