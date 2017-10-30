'use strict';

(function(exports) {
  function BankAccount(balance = 0) {
    this._balance = balance;
  };

  BankAccount.prototype.balance = function() {
    return this._balance
  };

  exports.BankAccount = BankAccount;
})(this);
