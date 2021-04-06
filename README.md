# Compitor v1

# Introduction

This project aims to make you code a simple equation solving program. It will take polynomial equations into account. These equations will only require exponents. No complex
function. The program will have to display its solution(s).

Write a program that solves a polynomial second or lower degree equation. You will have
to show at least:

### The equation in its reduced form.

### The degree of the equation.

### It’s solution(s) and the polarity of the discriminant if it makes sens.

Ex examples:

### $>./computor "5 _ X^0 + 4 _ X^1 - 9.3 _ X^2 = 1 _ X^0"

Reduced form: 4 _ X^0 + 4 _ X^1 - 9.3 \* X^2 = 0
Polynomial degree: 2
Discriminant is strictly positive, the two solutions are:
0.905239
-0.475131

### $>./computor "5 _ X^0 + 4 _ X^1 = 4 \* X^0"

Reduced form: 1 _ X^0 + 4 _ X^1 = 0
Polynomial degree: 1
The solution is:
-0.25

### ./computor "8 _ X^0 - 6 _ X^1 + 0 _ X^2 - 5.6 _ X^3 = 3 \* X^0"

Reduced form: 5 _ X^0 - 6 _ X^1 + 0 _ X^2 - 5.6 _ X^3 = 0
Polynomial degree: 3
The polynomial degree is strictly greater than 2, I can't solve.
We will always expect the entry to have the right format, ie. every term respect the
form a ∗ x
p

### Exponents are organized and present. Beware, it doesn’t mean the equation has a solution! If so, your program should detect it and specify it. You should also think of zero, negative or non whole coefficients...

There might be exceptions you will have to manage. In the equation 42∗X0 = 42∗X0

for instance, each real number is a solution...
