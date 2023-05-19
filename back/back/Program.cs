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
                    db.Remove(income);
                    db.SaveChanges();
                }
            }
        }

        Console.WriteLine("Income succesfully deleted");
    });
});

app.Run(async (context) =>
{
    var response = context.Response;

    Console.WriteLine("back is working");
    await response.WriteAsync("Back is working");
});

app.Run();
