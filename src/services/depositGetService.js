export async function depositGetService(){
    const response = await fetch("https://localhost:7160/pullDeposits", {
        method: "pullDeposits",
        headers: { "Account":"application/json", "Content-type":"application" },
        body: JSON.stringify()
    });
    const result = await response.json();

    console.log(result);
}