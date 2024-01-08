namespace StrategyPattern.Strategies
{
    public class EmailStrategy : INotificationStrategy
    {
        private string Email { get; set; }
        public EmailStrategy(string email)
        {
            Email = email;
        }

        public string Execute()
        {
            return $"Notified customer by email: {Email}";
        }
    }
}
