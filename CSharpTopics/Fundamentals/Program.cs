namespace Fundamentals
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var baby1 = new Baby("Rajesh");
            var baby2 = new Baby("Akash");
            var baby3 = new Baby("Kavita");

            Console.WriteLine(baby1.GetFullName());
            Console.WriteLine(baby2.GetFullName());
            Console.WriteLine(baby3.GetFullName());
        }
    }
}
