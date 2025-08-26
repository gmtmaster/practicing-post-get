export async function POST(req: Request) {
    const body = await req.json();
    const numbers = body.numbers;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return new Response(
        JSON.stringify({
            sum: sum
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

}