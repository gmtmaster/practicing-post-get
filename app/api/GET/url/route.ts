export async function GET(req: Request) {
    return new Response(
        JSON.stringify({ message: "Itt jártál:", url: req.url }),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );
}