export async function creditSetService(
    id, transactionAmount
){
    const response = await fetch("https://localhost:7160/pushCredit", {
        method: "pushCredit",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id,
            amount: transactionAmount
        })
    });
}
