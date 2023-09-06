---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.0
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# [SymPY](https://www.tutorialspoint.com/sympy/index.htm)


> SymPy is a Python library for symbolic mathematics. - sympy doc

In this page, you see examples of sympy usage.

```py
from sympy import *
```

## Declare symbols

```py
x = Symbol("x")
y = Symbol("y")
```

```py
(x + y) ** 2
```

## Expansion

```py
f = expand((x + y) ** 2)
display(f)
```

## Substitution

```py
f.subs({x: 1, y: 2})
```

## Factorization

```py
factor(x**2 - 4 * x + 3)
```

## Solve equations

```py
solve(x**2 - x - 1)
```

## Partial fraction decomposition

```py
apart(1 / (x**5 - 1))
```

## Integrals and derivatives

```py
a = Symbol("a")  # Without real=True, a is treated as a complex number.
b = Symbol("b")

u = exp(a * x) * sin(b * x)
display(u)
```

```py
int_u = integrate(u, x)
display(int_u)
```

```py
R = diff(u, x, 2) + u + x
display(R)
```

## Summation

```py
k, N = symbols("k, N", integer=True)
factor(summation(k, (k, 1, N)))
```

## Limits

$$ \lim_{x \to 0} \frac{\sin x}{x} = 1 $$

```py
limit(sin(x) / x, x, 0)
```

## Other Examples

```py
s = Symbol("s")
t = Symbol("t")

l = (s**2 * x**3) + (t * x**2) + (3 * x) + 1

display(l)
```

```py
int_l = integrate(l, (x, 0, 1))
display(int_l)
```
