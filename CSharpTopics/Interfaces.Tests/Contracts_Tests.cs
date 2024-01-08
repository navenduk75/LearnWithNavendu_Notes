
using Interfaces.Contracts;

namespace Interfaces.Tests
{
    public class Contracts_Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Brides_Testing()
        {
            var radha = new Bride1();
            var priya = new Bride1();

            var sulekha = new Bride2();
            var rekha = new Bride2();

            var rani = new Bride3();
            var santoshi = new Bride3();

            //radha.SetName("RAADHAA");
            Console.WriteLine(radha.Name);
            var santoshMishra = new Pandit();
            santoshMishra.AddBrideThatCanCook(radha);
            santoshMishra.AddBrideThatCanCook(priya);
            santoshMishra.AddBrideThatCanCook(rani);
            santoshMishra.AddBrideThatCanCook(santoshi);

            santoshMishra.AddBrideThatCanSing(sulekha);
            santoshMishra.AddBrideThatCanSing(rekha);
        }
    }
}