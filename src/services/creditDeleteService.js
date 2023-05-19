export async function creditDeleteService(id){
    const response = await fetch("https://localhost:7160/deleteCredit", {
        method: "deleteCredit",
        headers: { "Accept":"application/json", "Content-type":"application/json" },
        body: JSON.stringify({
            id: id
        })
    })
}