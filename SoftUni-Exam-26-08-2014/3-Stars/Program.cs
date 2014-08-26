using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3_Stars
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            
            //top
            for (int i = 0; i < n / 2; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    int posOfStar = n - i;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < 1; j++)
                {
                    if (i == 0)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < n; j++)
                {
                    int posOfStar = i - 1;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                Console.WriteLine();
            }

            Console.WriteLine("{0}{1}{0}", new string('*', n / 2 + 1), new string('.', n - 1));

            for (int i = 0; i < n / 2; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    int posOfStar = i + 1;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < 1; j++)
                {
                    if (i == n / 2 - 1)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < n; j++)
                {
                    int posOfStar = n - i - 2;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                Console.WriteLine();
            }

            for (int i = 0; i < n / 2 - 1; i++)
            {
                for (int j = 0; j < n / 2 + 1; j++)
                {
                    int posOfStar = n / 2 - 1 - i;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < n / 2 - 1; j++)
                {
                    int posOfStar = n / 2 - 2 - i;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < 1; j++)
                {
                    Console.Write(".");
                }

                for (int j = 0; j < n / 2 - 1; j++)
                {
                    int posOfStar = i;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                for (int j = 0; j < n / 2 + 1; j++)
                {
                    int posOfStar = i + 1;
                    if (j == posOfStar)
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(".");
                    }
                }

                Console.WriteLine();
            }
            Console.WriteLine("{0}{1}{0}", new string('*', n / 2 + 1), new string('.', n - 1));
        }
    }
}
