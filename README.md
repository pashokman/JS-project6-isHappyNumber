Happy numbers
Let's call happy numbers those that, as a result of a series of transformations of the form "sum of squares of digits", will turn into one. 

For example:
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.

Conclusion: the initial number 7 is a happy one.

Implement a function that should return true if the number is happy, and false if not. The number of search iterations should be limited to 10.