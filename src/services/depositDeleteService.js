export async function depositDeleteService(id){
    const response = await fetch("https://localhost:7160/deleteDeposit", {
        method: "deleteDeposit",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id
        })
    })
}