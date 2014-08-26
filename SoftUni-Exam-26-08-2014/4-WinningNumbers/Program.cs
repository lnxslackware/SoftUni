using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_WinningNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] input = Console.ReadLine().ToCharArray();
            int sum = 0;
            for (int i = 0; i < input.Length; i++)
            {
                sum += char.ToUpper(input[i]) - 'A' + 1;
            }

            bool resultFound = false; 
            for (int i = 0; i < 1000; i++)
            {
                if (CheckSum(i, sum))
                {
                    for (int j = 0; j < 1000; j++)
                    {
                        if (CheckSum(j, sum))
                        {
                            resultFound = true;
                            Console.WriteLine("{0}-{1}", i, j);
                        }
                    }
                }
            }

            if (resultFound == false)
            {
                Console.WriteLine("No");
            }
        }

        static bool CheckSum(int number, int targetSum)
        {
            int currSum = 0;

            currSum = number % 10;
            number /= 10;
            currSum *= number % 10;
            number /= 10;
            currSum *= number % 10;

            if (currSum == targetSum)
            {
                return true;
            }

            return false;
        }
    }
}
