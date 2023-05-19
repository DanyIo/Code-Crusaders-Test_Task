export async function depositSetService(
    id, transactionAmount
){
    const response = await fetch("https://localhost:7160/pushDeposit", {
        method: "pushDeposit",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id,
            amount: transactionAmount
        })
    });
}
