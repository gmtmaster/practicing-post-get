export async function GET(req:Request) {

    const url = new URL(req.url);
    const name = url.searchParams.get('name');
    const lang = (url.searchParams.get("lang") || "hu");
    const format = (url.searchParams.get('format') || "json");
    const shout = (url.searchParams.get('shout') || "0");

    if (!name) {
        return new Response(JSON.stringify({error: "fullname is required"}), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const templates: Record<string, string> = {
        hu: "Szia, {fullname}",
        en: "Hello, {fullname}",
        es: "Hola, {fullname}"
    };

    if (!templates[lang]) {
        return new Response(JSON.stringify({error: "unsupportedLanguage"}), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        })
    }

    let message = templates[lang].replace("{name}", name!);

    //SHOUT MODE
    const isShout = ["1", "true", "yes"].includes(shout.toLowerCase());
    if (isShout) message = message.toUpperCase();

    //válasz tartalom + fejléc
    const headers = new Headers();
    headers.set("X-Request-Time", Date.now().toString());
    headers.set("Cache-Control", "no-store");

    // --- Válasz formátum szerint ---
    if (format === "text") {
        headers.set("Content-Type", "text/plain; charset=utf-8");
        return new Response(message, { status: 200, headers });
    }

    // format === "json"
    headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ message }), { status: 200, headers });
}
