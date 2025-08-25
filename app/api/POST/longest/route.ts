export async function POST(req: Request) {
    const body = await req.json();
    const words = body.words;

    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return new Response(
        JSON.stringify({
            longest: longest
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })

}