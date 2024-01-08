namespace StrategyPattern.Strategies
{
    public class NullStrategy : INotificationStrategy
    {
        public string Execute()
        {
            return "";
        }
    }
}
