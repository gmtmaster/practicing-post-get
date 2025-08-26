function foVarazsital() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("A varázsital elkészült");
        }, 3000);
    });
}

async function kiralyRendelse() {
    console.log("a király: azonnal adjátok ide a cucccost")

    const ital = await foVarazsital();

    console.log("a király : végre megjött:", ital);
}

kiralyRendelse();