
namespace Interfaces.Contracts
{
    public class Bride3 : Bride, ICanCook, ICanSing
    {
        public void Cook()
        {
            Console.WriteLine("Cooking");
        }

        public void Sing()
        {
            Console.WriteLine("Singing");
        }
    }
}
