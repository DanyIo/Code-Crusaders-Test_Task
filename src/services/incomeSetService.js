export async function incomeSetService(
    id, transactionDate, senderName, paymentMethod, transactionAmount
){
    const response = await fetch("https://localhost:7160/pushIncome", {
        method: "pushIncome",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id,
            date: transactionDate,
            name: senderName,
            payMethod: paymentMethod,
            amount: transactionAmount
        })
    });
}