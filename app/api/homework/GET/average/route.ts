export async function GET(req: Request) {

    const url = new URL(req.url);

    const numbers = url.searchParams.get('numbers').split(',').map(
        (number: string) => Number(number)
    )

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }


    //average = sums of numbers / numbers.length
    const average = sum / numbers.length

    return new Response(
        JSON.stringify({
            average: average
        }),
        {
            headers: { "Content-Type": "application/json" }
        }
    )


}