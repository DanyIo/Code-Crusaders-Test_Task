export async function incomeGetService(){
    const response = await fetch("https://localhost:7160/pullIncome", {
        method: "pullIncome",
        headers: { "Account":"application/json", "Content-type":"application" },
        body: JSON.stringify()
    });
    const result = await response.json();

    console.log(result);
}