export async function creditSetGetService(
    transactionAmount
){
    const response = await fetch("https://localhost:7160/pushCredit", {
        method: "pushCredit",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: 0,
            amount: transactionAmount
        })
    });
    const result = await response.json();

    console.log(result);
}
