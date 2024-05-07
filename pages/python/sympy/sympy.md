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

```python
from sympy import *
```

## Declare symbols

```python
x = Symbol("x")
y = Symbol("y")
```

```python
(x + y) ** 2
```

## Expansion

```python
f = expand((x + y) ** 2)
display(f)
```

## Substitution

```python
f.subs({x: 1, y: 2})
```

## Factorization

```python
factor(x**2 - 4 * x + 3)
```

## Solve equations

```python
solve(x**2 - x - 1)
```

## Partial fraction decomposition

```python
apart(1 / (x**5 - 1))
```

## Integrals and derivatives

```python
a = Symbol("a")  # Without real=True, a is treated as a complex number.
b = Symbol("b")

u = exp(a * x) * sin(b * x)
display(u)
```

```python
int_u = integrate(u, x)
display(int_u)
```

```python
R = diff(u, x, 2) + u + x
display(R)
```

## Summation

```python
k, N = symbols("k, N", integer=True)
factor(summation(k, (k, 1, N)))
```

## Limits

$$ \lim_{x \to 0} \frac{\sin x}{x} = 1 $$

```python
limit(sin(x) / x, x, 0)
```

## Other Examples

```python
s = Symbol("s")
t = Symbol("t")

l = (s**2 * x**3) + (t * x**2) + (3 * x) + 1

display(l)
```

```python
int_l = integrate(l, (x, 0, 1))
display(int_l)
```
