export async function GET(req: Request) {

    const quotes = [
        "A türelem rózsát terem,",
        "A tudás hatalom.",
        "Sok kicsi sokra megy"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);

    return new Response(
        JSON.stringify({ quote: quotes[randomIndex] }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}