namespace Fundamentals
{
    internal class Baby
    {
        public string FamilySurname = "Kumar";
        public string FirstName;

        public Baby(string firstName)
        {
            FirstName = firstName;
        }

        public string GetFullName()
        {
            return $"{FirstName} {FamilySurname}";
        }
    }
}
