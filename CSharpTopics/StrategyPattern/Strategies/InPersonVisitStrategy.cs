namespace StrategyPattern.Strategies
{
    public class InPersonVisitStrategy : INotificationStrategy
    {
        private string Address { get; set; }
        public InPersonVisitStrategy(string address)
        {
            Address = address;
        }

        public string Execute()
        {
            return $"Notified customer by in-person visit at: {Address}";
        }
    }
}
