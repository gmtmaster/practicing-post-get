export async function POST(req: Request) {
    const body = await req.json();
    const words = body.words;

    const count = words.length;

    let longest = "";
    let shortest = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    const totalChars = words.join("").length;

    return new Response(
        JSON.stringify({
            count: count,
            longest: longest,
            shortest: shortest,
            totalChars: totalChars
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )


}