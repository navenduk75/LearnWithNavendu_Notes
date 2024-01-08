
namespace Interfaces.Contracts
{
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
