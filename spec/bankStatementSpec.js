'use strict';

describe("BankStatement", function() {
  var account;
  var statement;

  beforeEach(function() {
    account = new BankAccount();
    account.deposit(1000, '2012-01-10');
    account.deposit(2000, '2012-01-13');
    account.withdraw(500, '2012-01-14');
    statement = new BankStatement(account);
  });

  it("should be in reverse chronological order", function() {
    expect(statement.print()).toEqual("\ndate || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00");
  });

});
