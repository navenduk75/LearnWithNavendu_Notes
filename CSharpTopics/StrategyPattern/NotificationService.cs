namespace StrategyPattern
{
    public class NotificationService
    {
        private INotificationStrategy notificationStrategy;

        public NotificationService(INotificationStrategy notificationStrategy)
        {
            this.notificationStrategy = notificationStrategy;
        }

        public void SetStrategy(INotificationStrategy notificationStrategy)
        {
            this.notificationStrategy = notificationStrategy;
        }

        public string Notify()
        {
            return this.notificationStrategy.Execute();
        }
    }
}
