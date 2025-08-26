function nyuszi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🐇 Nyuszi nyert!");
        }, 5000);
    });
}

function teknos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🐢 Teknős nyert!");
        }, 3000);
    });
}

async function verseny() {
    const gyoztes = await Promise.race([nyuszi(), teknos()]);
    console.log(gyoztes);
}

verseny();
