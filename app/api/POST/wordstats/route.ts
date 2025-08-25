export async function POST(req: Request) {
    const body = await req.json();
    const words = body.words;

    //összes szó száma
    let wordsCount = 0;
    for (let i = 0; i < words.length; i++) {
        wordsCount++;
    }

    //longest word
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    //totalChars
    let totalChars = 0;
    for (let i = 0; i < words.length; i++) {
        totalChars += words[i].length;
    }

    return new Response(
        JSON.stringify({
            count: wordsCount,
            longest: longestWord,
            totalChars: totalChars,
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )


}