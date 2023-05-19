export async function expenseDeleteService(id){
    const response = await fetch("https://localhost:7160/deleteExpense", {
        method: "deleteExpense",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id
        })
    })
}