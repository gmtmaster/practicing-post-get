export async function GET(req: Request, str: string) {

    const url = new URL(req.url);
    const text = url.searchParams.get('text');

    let reverseText = '';
    for (let i = str - 1; i >= 0; i--) {
        reverseText += [i]
    }

    return new Response(
        JSON.stringify({
            reverseText: reverseText
        }),
        {
            headers: { "Content-Type": "application/json" }
        }
    )

}