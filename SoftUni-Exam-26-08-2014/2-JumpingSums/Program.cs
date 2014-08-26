using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_JumpingSums
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] sequence = Console.ReadLine().Split(new char[]{' '}, StringSplitOptions.RemoveEmptyEntries);
            int[] sequenceAsInt = Array.ConvertAll(sequence, int.Parse);
            int jumps = int.Parse(Console.ReadLine());
            long sum = long.MinValue;

            for (int i = 0; i < sequenceAsInt.Length; i++)
            {
                long currentSum = sequenceAsInt[i];
                int currentJump = 1;
                int currentIndex = i;
                while (currentJump <= jumps)
                {
                    currentIndex = (currentIndex + sequenceAsInt[currentIndex]) % sequenceAsInt.Length;
                    currentSum += sequenceAsInt[currentIndex];
                    currentJump++;

                    if (currentSum > sum)
                    {
                        sum = currentSum;
                    }
                }
            }

            Console.WriteLine("max sum = {0}", sum);
        }
    }
}
