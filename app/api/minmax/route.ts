export async function POST(req: Request) {
    const body = await req.json();
    const numbers = body.numbers;

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return new Response(
        JSON.stringify({
            min: min,
            max: max
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })


}