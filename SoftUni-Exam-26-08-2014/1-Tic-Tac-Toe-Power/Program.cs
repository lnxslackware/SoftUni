using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1_Tic_Tac_Toe_Power
{
    class Program
    {
        static void Main()
        {
            string x = Console.ReadLine();
            string y = Console.ReadLine();
            int value = int.Parse(Console.ReadLine());

            Dictionary<string, int> dict = new Dictionary<string, int>();
            dict.Add("00", 1);
            dict.Add("01", 4);
            dict.Add("02", 7);
            dict.Add("10", 2);
            dict.Add("11", 5);
            dict.Add("12", 8);
            dict.Add("20", 3);
            dict.Add("21", 6);
            dict.Add("22", 9);

            var index = x+y;
            var power = dict[index];
            int cellValue = value + power - 1;
            ulong result = (ulong)Math.Pow(cellValue, power);
            Console.WriteLine(result);
        }
    }
}
