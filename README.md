Bank Tech Test
==============

Objectives of exercise
----
Build a REPL application that mimics a simple ATM banking system.

Technologies used
----
- Javascript

How to set up the application
----
```
$ git clone https://github.com/diaryofdiscoveries/bank-tech-test.git
$ cd bank-tech-test

```
- Given you make a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When you print your bank statement
- Then you would see:

```
date || credit || debit || balance
14/01/2012 ||  || 500.00 || 2500.00
13/01/2012 || 2000.00 ||  || 3000.00
10/01/2012 || 1000.00 ||  || 1000.00
```

Tested using:
----
- Jasmine
- Istanbul (coverage)
- ESLint (linter)


How to run tests
----
```
$ cd bank-tech-test
$ open SpecRunner.html
```

User Stories
----
```
As a customer
So that I can have access to money to spend
I want to credit money to my account
```
```
As a customer
So that I can buy things
I want to debit money from my account
```
```
As a customer
So that I can see how much money I have
I want to see my account balance
```
```
As a customer
So that I can see my account history
I want to print a statement
```
