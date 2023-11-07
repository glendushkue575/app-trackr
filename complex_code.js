/* 
   Filename: complex_code.js
   Content: Complex code demonstrating an automated banking system
*/

class BankAccount {
  constructor(accountNumber, accountName, balance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    console.log(`New balance for account ${this.accountNumber}: $${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this.accountNumber}`);
      console.log(`New balance for account ${this.accountNumber}: $${this.balance}`);
    } else {
      console.log(`Insufficient funds for account ${this.accountNumber}`);
    }
  }

  getBalance() {
    console.log(`Current balance for account ${this.accountNumber}: $${this.balance}`);
  }
}

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }

  createAccount(accountNumber, accountName, initialBalance) {
    const newAccount = new BankAccount(accountNumber, accountName, initialBalance);
    this.accounts.push(newAccount);
    console.log(`Created a new account (${newAccount.accountNumber}) in ${this.bankName}`);
    return newAccount;
  }

  closeAccount(account) {
    const accountIndex = this.accounts.findIndex(acc => acc.accountNumber === account.accountNumber);
    if (accountIndex >= 0) {
      this.accounts.splice(accountIndex, 1);
      console.log(`Closed account (${account.accountNumber}) in ${this.bankName}`);
    } else {
      console.log(`Account (${account.accountNumber}) not found in ${this.bankName}`);
    }
  }

  getTotalBalance() {
    let totalBalance = 0;
    this.accounts.forEach(account => {
      totalBalance += account.balance;
    });
    console.log(`Total balance across all accounts in ${this.bankName}: $${totalBalance}`);
  }
}

// Example usage

const myBank = new Bank("MyBank");

const account1 = myBank.createAccount("1234567890", "John Doe", 1000);
const account2 = myBank.createAccount("0987654321", "Jane Smith", 500);

account1.deposit(500);
account1.withdraw(200);

account1.getBalance();
account2.getBalance();

myBank.getTotalBalance();

myBank.closeAccount(account2);

myBank.getTotalBalance();