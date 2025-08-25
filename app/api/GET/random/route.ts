export async function GET(req: Request) {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const timestamp = Date.now()

    return new Response(
        JSON.stringify({
            randomNumber: randomNumber,
            timestamp: timestamp
        }),
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    )
}