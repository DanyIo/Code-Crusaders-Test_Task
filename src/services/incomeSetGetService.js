export async function incomeSetGetService(
    transactionDate, senderName, paymentMethod, transactionAmount
){
    const response = await fetch("https://localhost:7160/pushIncome", {
        method: "pushIncome",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: 0,
            date: transactionDate,
            name: senderName,
            payMethod: paymentMethod,
            amount: transactionAmount
        })
    });
    const result = await response.json();

    console.log(result);
}