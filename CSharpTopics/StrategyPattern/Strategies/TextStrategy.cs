namespace StrategyPattern.Strategies
{
    public class TextStrategy : INotificationStrategy
    {
        private string PhoneNumber { get; set; }
        public TextStrategy(string phoneNumber)
        {
            PhoneNumber = phoneNumber;
        }

        public string Execute()
        {
            return $"Notified customer by text: {PhoneNumber}";
        }
    }
}
