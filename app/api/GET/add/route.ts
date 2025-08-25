export async function GET(req: Request) {

   const url = new URL(req.url);
   const a = url.searchParams.get('a');
   const b = url.searchParams.get('b');

   const sum = Number(a) + Number(b);

    return new Response(

        JSON.stringify({
            a: Number(a),
            b: Number(b),
            sum: sum,
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}