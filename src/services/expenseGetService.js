export async function expenseGetService(){
    const response = await fetch("https://localhost:7160/pullExpenses", {
        method: "pullExpenses",
        headers: { "Account":"application/json", "Content-type":"application" },
        body: JSON.stringify()
    });
    const result = await response.json();

    console.log(result);
}