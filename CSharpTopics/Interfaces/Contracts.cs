
namespace Interfaces.Contracts
{
    public interface ICanCook
    {
        void Cook();
    }

    public interface ICanSing
    {
        void Sing();
    }



    public class Bride1 : Bride, ICanCook
    {
        public void Cook()
        {
            Console.WriteLine("Cooking");
        }
    }


    public class Bride2 : Bride, ICanSing
    {
        public void Sing()
        {
            Console.WriteLine("Singing");
        }
    }

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

    public class Pandit
    {
        private List<ICanCook> BridesWhoCanCook = new List<ICanCook>();
        private List<ICanSing> BridesWhoCanSing = new List<ICanSing>();

        public void AddBrideThatCanCook(ICanCook bride)
        {
            BridesWhoCanCook.Add(bride);
        }

        public void AddBrideThatCanSing(ICanSing bride)
        {
            BridesWhoCanSing.Add(bride);
        }
    }
}
