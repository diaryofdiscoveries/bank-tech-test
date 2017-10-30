'use strict';

describe("BankAccount", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("should have 0 balance to start with", function() {
    expect(account.balance()).toEqual(0);
  });

  it("should be able to deposit money", function() {
    account.deposit(200, '30/10/2017');
    expect(account.balance()).toEqual(200);
  });

  it("should be able to withdraw money", function() {
    account.deposit(200, '30/10/2017');
    account.withdraw(100, '31/10/2017');
    expect(account.balance()).toEqual(100);
  });

  it("should not be able to withdraw money if there are insufficient funds", function() {
    expect(function() {
      account.withdraw(100, '31/10/2017');
      }).toThrow("Insufficient funds")
  });

});
