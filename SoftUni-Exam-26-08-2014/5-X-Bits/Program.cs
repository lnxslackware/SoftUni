using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5_X_Bits
{
    class Program
    {
        static void Main(string[] args)
        {
            char[,] matrix = new char[8, 32];

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                int number = int.Parse(Console.ReadLine());
                string numberAsBinary = Convert.ToString(number, 2).PadLeft(32, '0');
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = numberAsBinary[numberAsBinary.Length - j - 1];
                }
            }

            int foundXbits = 0;
            for (int i = 0; i < matrix.GetLength(0) - 2; i++)
            {
                for (int j = 0; j < matrix.GetLength(1) - 2; j++)
                {
                    if (matrix[i, j] == '1' && matrix[i, j + 1] == '0' && matrix[i, j + 2] == '1')
                    {
                        if (matrix[i+1, j] == '0' && matrix[i + 1, j + 1] == '1' && matrix[i + 1, j + 2] == '0')
                        {
                            if (matrix[i+2, j] == '1' && matrix[i+2, j+1] == '0' && matrix[i+2, j+ 2] == '1')
                            {
                                foundXbits++;
                            }
                        }
                    }
                }
            }

            Console.WriteLine(foundXbits);
        }
    }
}
