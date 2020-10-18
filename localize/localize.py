import random
import math

print("start pack localize")


if 5>2:
    print("hello")
    print("in number")
    print("###")

def myFun(x):
    print(x)
    print(type(x))
    print("###")

#
x = 10
def myFuc2():
    global x
    x = x+1
    a = random.randrange(1, 100)
    print(a)
myFuc2()
print(x)
myFuc2()
print("###")

#
str = """hello \r world
my sdsdv{}"""
num = 34
print(str.format(num))
print("###")

#
for x in range(0, 6):
    print(x)
    pass
print("###")

#
def func0(*arg):
    print(arg[2])
    print(len(arg))
func0(1, 2, 3, 4, 5)
print("###")

#
def func1(**kid):
  print("His last name is " + kid["lname"])

func1(fname = "Tobias", lname = "Refsnes")

#
ld = lambda a, b, c : a + b + c
print(ld(5, 6, 2))

#
def myfunc(n):
  return lambda a : a * n
mydoubler = myfunc(2)
print(mydoubler(11))

#
def pow(a):
    return lambda x : math.pow(x, a)
myPow = pow(3)
print(int(myPow(2)))

#
print("#class")
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
p1 = Person("John", 36)
print(p1.name)
print(p1.age)

#
print("#class extend")
class Student(Person):
    def __init__(self, fname, lname, subject):
        super().__init__(fname, lname)
        self.setSubject(subject)
    def setSubject(self, subject):
        self.subject = subject
s = Student("Nguyen", "Duy Doan", "IT")
print(s.subject)

#
print("###iter")
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))