export async function POST(req: Request) {
    try {
    //olvassuk ki a bodyt JSON-ként
    const body = await req.json();

    //". visszatükrözzük a választ
    return new Response(JSON.stringify({
        message: "ezt küldted:",
        echo: body
    }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
    } catch (error) {
    return new Response(
         JSON.stringify({ error: "Hibás JSON" }),
        { status: 400 }
    );
    }
}