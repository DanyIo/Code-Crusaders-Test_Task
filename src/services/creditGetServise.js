export async function creditGetService(){
    const response = await fetch("https://localhost:7160/pullCredit", {
        method: "pullCredit",
        headers: { "Account":"application/json", "Content-type":"application" },
        body: JSON.stringify()
    });
    const result = await response.json();

    console.log(result);
}