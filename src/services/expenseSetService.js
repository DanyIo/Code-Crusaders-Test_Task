export async function expenseSetService(
    id, expenseName, transactionAmount
){
    const response = await fetch("https://localhost:7160/pushExpense", {
        method: "pushExpense",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id,
            name: expenseName,
            amount: transactionAmount
        })
    });
}