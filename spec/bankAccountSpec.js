'use strict';

describe("BankAccount", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("should have 0 balance to start with", function() {
    expect(account.balance()).toEqual(0);
  });

});
