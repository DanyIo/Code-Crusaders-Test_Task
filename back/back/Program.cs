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
        var response = context.Response;

        IncomeJson incomeJson = await request.ReadFromJsonAsync<IncomeJson>();

        Income income = new Income(
            incomeJson.date,
            incomeJson.name,
            incomeJson.payMethod,
            incomeJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance;

            if (db.Balance.ToList().Count() == 0)
            {
                balance = new Balance(0);

                balance.Amount += income.Amount;

                db.Balance.Add(balance);
            }
            else
            {
                balance = db.Balance.ToList()[0];

                balance.Amount += income.Amount;

                db.Balance.Update(balance);
            }

            db.Incomes.Add(income);
            db.SaveChanges();
        }

        Console.WriteLine("Income succesfully pushed");

        List<IncomeResponseJson> incomes = new List<IncomeResponseJson>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Income incomeItem in db.Incomes.ToList())
            {
                IncomeResponseJson responseJson = new IncomeResponseJson(
                    incomeItem.Id,
                    incomeItem.Date,
                    incomeItem.Name,
                    incomeItem.PaymentMethod,
                    incomeItem.Amount
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
        var response = context.Response;

        ExpenseJson expenseJson = 
            await request.ReadFromJsonAsync<ExpenseJson>();

        Expense expense = new Expense(
            expenseJson.name,
            expenseJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance;

            if (db.Balance.ToList().Count() == 0)
            {
                balance = new Balance(0);

                balance.Amount -= expense.Amount;

                db.Balance.Add(balance);
            }
            else
            {
                balance = db.Balance.ToList()[0];

                balance.Amount -= expense.Amount;

                db.Balance.Update(balance);
            }

            db.Expenses.Add(expense);
            db.SaveChanges();
        }

        Console.WriteLine("Expense succesfull saved");

        List<ExpenseJson> expenses = new List<ExpenseJson>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Expense expenseItem in db.Expenses.ToList())
            {
                ExpenseJson responseJson = new ExpenseJson(
                    expenseItem.Id,
                    expenseItem.Name,
                    expenseItem.Amount
                );

                expenses.Add(responseJson);
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
        var response = context.Response;

        DepositJson depositJson = 
            await request.ReadFromJsonAsync<DepositJson>();

        Deposit deposit = new Deposit(
            depositJson.amount
        );

        using(ApplicationContext db = new ApplicationContext())
        {
            Balance balance;

            if (db.Balance.ToList().Count() == 0)
            {
                balance = new Balance(0);

                balance.Amount -= deposit.Amount;

                db.Balance.Add(balance);
            }
            else
            {
                balance = db.Balance.ToList()[0];

                balance.Amount -= deposit.Amount;

                db.Balance.Update(balance);
            }

            db.Deposits.Add(deposit);
            db.SaveChanges();
        }

        Console.WriteLine("Deposit successfully pushed");

        List<DepositJson> deposits = new List<DepositJson>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Deposit depositItem in db.Deposits.ToList())
            {
                DepositJson responseJson = new DepositJson(
                    depositItem.Id,
                    depositItem.Amount
                );

                deposits.Add(responseJson);
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
        var response = context.Response;

        CreditJson creditJson =
            await request.ReadFromJsonAsync<CreditJson>();

        Credit credit = new Credit(
            creditJson.amount
        );

        using (ApplicationContext db = new ApplicationContext())
        {
            Balance balance;

            if (db.Balance.ToList().Count() == 0)
            {
                balance = new Balance(0);

                balance.Amount += credit.Amount;

                db.Balance.Add(balance);
            }
            else
            {
                balance = db.Balance.ToList()[0];

                balance.Amount += credit.Amount;

                db.Balance.Update(balance);
            }

            db.Credits.Add(credit);
            db.SaveChanges();
        }

        Console.WriteLine("Credit successfully pushed");

        List<CreditJson> credits = new List<CreditJson>();

        using (ApplicationContext db = new ApplicationContext())
        {
            foreach (Credit creditItem in db.Credits.ToList())
            {
                CreditJson responseJson = new CreditJson(
                    creditItem.Id,
                    creditItem.Amount
                );

                credits.Add(responseJson);
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
