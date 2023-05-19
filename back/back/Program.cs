using back;

var builder = WebApplication.CreateBuilder(args);

var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var frontUrl = configuration.GetValue<string>("frontUrl");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontUrl).AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();

//****************** INCOME ********************

app.Map("/pushIncome", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        IncomeJson incomeJson = await request.ReadFromJsonAsync<IncomeJson>();

        Income income = new Income(
            incomeJson.date,
            incomeJson.name,
            incomeJson.payMethod,
            incomeJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance = db.Balance.ToList()[0];

            balance.Amount += income.Amount;

            db.Balance.Update(balance);
            db.Incomes.Add(income);
            db.SaveChanges();
        }

        Console.WriteLine("Income succesfully pushed");
    });
});

app.Map("/pullIncome", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var response = context.Response;

        List<IncomeResponseJson> incomes = new List<IncomeResponseJson>();

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Income income in db.Incomes.ToList())
            {
                IncomeResponseJson responseJson = new IncomeResponseJson(
                    income.Id,
                    income.Date,
                    income.Name,
                    income.PaymentMethod,
                    income.Amount
                );

                incomes.Add(responseJson);
            }
        }

        Console.WriteLine("Incomes succesfully pulled");
        await response.WriteAsJsonAsync<List<IncomeResponseJson>>(incomes);
    });
});

app.Map("/deleteIncome", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        IncomeId incomeId = await request.ReadFromJsonAsync<IncomeId>();

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Income income in db.Incomes.ToList())
            {
                if(income.Id == incomeId.id)
                {
                    db.Incomes.Remove(income);
                    db.SaveChanges();

                    break;
                }
            }
        }

        Console.WriteLine("Income succesfully deleted");
    });
});

//****************** EXPENSES ********************

app.Map("/pushExpense", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        ExpenseJson expenseJson = 
            await request.ReadFromJsonAsync<ExpenseJson>();

        Expense expense = new Expense(
            expenseJson.id,
            expenseJson.name,
            expenseJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance = db.Balance.ToList()[0];

            balance.Amount -= expense.Amount;

            db.Balance.Update(balance);
            db.Expenses.Add(expense);
            db.SaveChanges();
        }

        Console.WriteLine("Expense succesfull saved");
    });
});

app.Map("/pullExpenses", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var response = context.Response;

        List<ExpenseJson> expenses = new List<ExpenseJson>();

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Expense expense in db.Expenses.ToList())
            {
                ExpenseJson expenseJson = new ExpenseJson(
                    expense.Id,
                    expense.Name,
                    expense.Amount
                );

                expenses.Add(expenseJson);
            }
        }

        Console.WriteLine("Expenses successfully pulled");
        await response.WriteAsJsonAsync<List<ExpenseJson>>(expenses);
    });
});

app.Map("/deleteExpense", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        ExpenseId expenseId = await request.ReadFromJsonAsync<ExpenseId>(); 

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Expense expense in db.Expenses.ToList())
            {
                if(expense.Id == expenseId.id)
                {
                    db.Expenses.Remove(expense);
                    db.SaveChanges();

                    break;
                }
            }
        }

        Console.WriteLine("Expense successfully deleted");
    });
});

//****************** DEPOSITS ********************

app.Map("/pushDeposit", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        DepositJson depositJson = 
            await request.ReadFromJsonAsync<DepositJson>();

        Deposit deposit = new Deposit(
            depositJson.id,
            depositJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance = db.Balance.ToList()[0];

            balance.Amount -= deposit.Amount;

            db.Balance.Update(balance);
            db.Deposits.Add(deposit);
            db.SaveChanges();
        }

        Console.WriteLine("Deposit successfully pushed");
    });
});

app.Map("/pullDeposits", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var response = context.Response;

        List<DepositJson> deposits = new List<DepositJson>();

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Deposit deposit in db.Deposits.ToList())
            {
                DepositJson depositJson = new DepositJson(
                    deposit.Id,
                    deposit.Amount
                );

                deposits.Add(depositJson);
            }
        }

        Console.WriteLine("Deposit successfully pulled");
        await response.WriteAsJsonAsync<List<DepositJson>>(deposits);
    });
});

app.Map("/deleteDeposit", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        DepositId depositId = 
            await request.ReadFromJsonAsync<DepositId>();

        using(ApplicationContext db = new ApplicationContext())
        {
            foreach(Deposit deposit in db.Deposits.ToList())
            {
                if(deposit.Id == depositId.id)
                {
                    db.Deposits.Remove(deposit);
                    db.SaveChanges();

                    break;
                }
            }
        }

        Console.WriteLine("Deposit successfully deleted");
    });
});

//****************** CREDITS ********************

app.Map("/pushCredit", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        CreditJson creditJson =
            await request.ReadFromJsonAsync<CreditJson>();

        Credit credit = new Credit(
            creditJson.id,
            creditJson.amount
        );

        using (ApplicationContext db = new ApplicationContext())
        {
            Balance balance = db.Balance.ToList()[0];

            balance.Amount += credit.Amount;

            db.Balance.Update(balance);
            db.Credits.Add(credit);
            db.SaveChanges();
        }

        Console.WriteLine("Credit successfully pushed");
    });
});

app.Map("/pullCredits", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var response = context.Response;

        List<CreditJson> credits = new List<CreditJson>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Credit credit in db.Credits.ToList())
            {
                CreditJson creditJson = new CreditJson(
                    credit.Id,
                    credit.Amount
                );

                credits.Add(creditJson);
            }
        }

        Console.WriteLine("Credit successfully pulled");
        await response.WriteAsJsonAsync<List<CreditJson>>(credits);
    });
});

app.Map("/deleteCredit", defaultMiddleware =>
{
    defaultMiddleware.Run(async (context) =>
    {
        var request = context.Request;

        CreditId creditId =
            await request.ReadFromJsonAsync<CreditId>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Credit credit in db.Credits.ToList())
            {
                if (credit.Id == creditId.id)
                {
                    db.Credits.Remove(credit);
                    db.SaveChanges();

                    break;
                }
            }
        }

        Console.WriteLine("Credit successfully deleted");
    });
});

//****************** DEFAULT ********************

app.Run(async (context) =>
{
    var response = context.Response;

    Console.WriteLine("back is working");
    await response.WriteAsync("Back is working");
});

app.Run();
