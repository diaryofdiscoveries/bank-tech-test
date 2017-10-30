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

});
