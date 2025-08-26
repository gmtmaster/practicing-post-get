export async function GET(req: Request) {

    const url = new URL(req.url);
    const a = url.searchParams.get('a');
    const b = url.searchParams.get('b');

    const sum = Number(a) + Number(b);

    return new Response(
        JSON.stringify({
            sum: sum
            }),
        {
            headers: { "Content-Type": "application/json" }
        }
    )

}