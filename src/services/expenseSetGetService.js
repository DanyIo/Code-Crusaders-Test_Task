export async function expenseSetGetService(expenseName, transactionAmount) {
  const response = await fetch("https://localhost:7160/pushExpense", {
    method: "pushExpense",
    headers: { Accept: "application/json", "Content-type": "application/json" },
    body: JSON.stringify({
      id: 0,
      name: expenseName,
      amount: transactionAmount,
    }),
  });
  const result = await response.json();

  console.log(result);
}
