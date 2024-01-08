
namespace Interfaces.Contracts
{
    public class Bride1 : Bride, ICanCook
    {
        public void Cook()
        {
            Console.WriteLine("Cooking");
        }
    }
}
