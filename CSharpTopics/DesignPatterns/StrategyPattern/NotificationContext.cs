namespace DesignPatterns.StrategyPattern
{
    public class NotificationContext
    {
        private INotificationStrategy strategy;

        public NotificationContext(INotificationStrategy notificationStrategy)
        {
            strategy = notificationStrategy;
        }

        public void SetStrategy(INotificationStrategy notificationStrategy)
        {
            strategy = notificationStrategy;
        }

        public string Execute()
        {
            return strategy.Execute();
        }
    }
}
