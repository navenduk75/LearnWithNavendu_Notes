using StrategyPattern.Strategies;

namespace StrategyPattern.Tests
{
    public class NotificationService_Test
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void EmailNotification_Works()
        {
            // Arrange
            var email = "navendu@gmail.com";
            var strategy = new EmailStrategy(email);
            var service = new NotificationService(strategy);

            // Act
            var actual = service.Notify();
            var expected = $"Notified customer by email: {email}";

            // Assert
            Assert.That(expected, Is.EqualTo(actual));
        }
    }
}