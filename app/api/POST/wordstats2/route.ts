export async function POST(req: Request) {
    const body = await req.json();
    const words = body.words;

    //változok
    let count = 0;
    let longest = "";
    let shortest = words[0];
    let totalChars = 0;

    for (let i = 0; i < words.length; i++) {
        count++;
        if (words[i].length > longest.length) {
            longest = words[i];
        }
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
        totalChars += words[i].length;
    }

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