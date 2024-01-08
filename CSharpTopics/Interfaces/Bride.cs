
namespace Interfaces.Contracts
{
    public class Bride : IEquatable<Bride?>
    {
        public string Name { get; private set; }

        public override bool Equals(object? obj)
        {
            return Equals(obj as Bride);
        }

        public bool Equals(Bride? other)
        {
            return other is not null &&
                   Name == other.Name;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Name);
        }

        public void SetName(string Name)
        {
            //business rule
            this.Name = Name;
        }

        public static bool operator ==(Bride? left, Bride? right)
        {
            return EqualityComparer<Bride>.Default.Equals(left, right);
        }

        public static bool operator !=(Bride? left, Bride? right)
        {
            return !(left == right);
        }
    }

    //public class Pandit
    //{
    //    private List<ICanCook> BridesWhoCanCook = new List<ICanCook>();
    //    private List<ICanSing> BridesWhoCanSing = new List<ICanSing>();

    //    public void AddBrideThatCanCook(ICanCook bride)
    //    {
    //        BridesWhoCanCook.Add(bride);
    //    }

    //    public void AddBrideThatCanSing(ICanSing bride)
    //    {
    //        BridesWhoCanSing.Add(bride);
    //    }
    //}
}
