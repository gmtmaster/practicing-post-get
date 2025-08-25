export async function POST(req:Request) {

    //read the body
    const body = await req.json();

    const text = body.text.toUpperCase();

    return new Response(
        JSON.stringify({
            echo: text
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );

}