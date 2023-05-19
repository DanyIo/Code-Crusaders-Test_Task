export async function incomeDeleteService(id){
    const response = await fetch("https://localhost:7160/deleteIncome", {
        method: "deleteIncome",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id
        })
    })
}