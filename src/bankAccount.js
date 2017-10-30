'use strict';

(function(exports) {
  function BankAccount(balance = 0) {
    this._balance = balance;
    this.record = []
    this.recordStructure = { date: '', credit: '', debit: '', balance: 0 };
  };

  BankAccount.prototype.balance = function() {
    return this._balance
  };

  BankAccount.prototype.deposit = function(amount, today) {
    this._balance += amount;
    this.record.push({date:today, credit: amount, debit:"", balance:""});
    this.record[this.record.length-1]["balance"]=this._balance
  };

  exports.BankAccount = BankAccount;
})(this);
