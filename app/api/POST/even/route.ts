export async function POST(req: Request) {
    const body = await req.json();
    const numbers = body.numbers;

    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }

    return new Response(
        JSON.stringify({
            evenCount: evenCount
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )

}