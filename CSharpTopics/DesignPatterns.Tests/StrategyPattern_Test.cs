using DesignPatterns.StrategyPattern;
using DesignPatterns.StrategyPattern.Strategies;

namespace DesignPatterns.Tests
{
    public class StrategyPattern_Test
    {
        [Test]
        public void Strategies_Work()
        {
            // Arrange
            var email = "navendu@gmail.com";
            var strategy = new EmailStrategy(email);
            var context = new NotificationContext(strategy);

            // Act
            var actual = context.Execute();
            var expected = $"Notified customer by email: {email}";

            // Assert
            Assert.That(actual, Is.EqualTo(expected));

            // Change strategy at runtime
            context.SetStrategy(new TextStrategy("1234567890"));
            actual = context.Execute();
            Assert.That(actual, Is.EqualTo("Notified customer by text: 1234567890"));

            // Change strategy at runtime
            context.SetStrategy(new NullStrategy());
            actual = context.Execute();
            Assert.That(actual, Is.EqualTo(""));
        }
    }
}