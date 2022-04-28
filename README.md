# Bankist App, the gateway to modern banking

**How does it work?**

- First, you must log in. Currently, it doesnot let you create new account, you can log into dummy accounts. You can use these accounts to play with the features.
  (1. user - js and pin-1111 ; 2. user - jd and pin-2222);
- Converts money into the respective users currency (dummy user 1 deals in EUR and dummy user 2 deals in USD. When they will be dealing, money will be first converted to their currency and then reflect in their accounts.)
- As you log in, it displays your name, current balance at the moment, transaction history, summary at the bottom, and things you can do on the right.
- There is also a 5-minute timer on bottom-right for security purpose, that will log you out after 5 minutes.
- Summary at the bottom displays sum of all deposits, all withdrawals and interest to be paid on loan amount\*
- At the bottom, there is a sort button, that sorts transactions on 2 basis - date (latest first) and amount (largest first).

**Key Features**

- Closing the account
- Currency conversion
- Logging into the account
- Logout timer (for security purpose)
- Requesting loan\*
- Sorting transactions
- Tranfering money to other accounts

**Things learnt**

- _Chaining Array methods_ : this project taught me the importance of chaining methods. For instance, to create usernames for account, I chained 4 methods.
- _Math_ : applied this built-in object. As this project involves extensive use of numbers, Math was used multiple times such as rounding off numbers, finding absolute values, removing fractional digits, etc.
- _new Intl.NumberFormat & new Intl.DataTimeFormat_ : used this object to format numbers(currency, Date&Time) on the basis of language(locale).
- _Timer and interval_ : a combination of setInterval and clearInterval is used to create the logout timer feature. As soon as 5 minutes are over, user gets logged out.

**Imp Skills**

- arrow functions
- chaining Array methods
- DOM Manipulation
- event listeners
- JS Objects
- logical operators
- `new Date`
- refactoring Code

> Note 1 : This project is a part of 'The Complete JavaScript Course 2022: From Zero To Expert!' on Udemy by 'Jonas Schmedtmann'. All rights reserved by [Jonas Schmedtmann](https://github.com/jonasschmedtmann).
>
> Note 2 : Lists are written in alphabetical order.
>
> \* Note 3 : Requesting Loan feature and Loan interest calculator does not work like this in real. The sole purpose is to add a feature to the App. Remember, I am a developer, not a bank manager.
