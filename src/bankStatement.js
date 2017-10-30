"use strict";

(function(exports) {
  function BankStatement(account) {
    this.bankAccount = account;
    this._header = "\ndate || credit || debit || balance";
    this._sorted = "";
  };

  BankStatement.prototype.print = function() {
    function format(d){
      d = (new Date(d))
      return ("0" + d.getDate()).slice(-2)+"/"+("0"+(d.getMonth()+1)).slice(-2)+"/"+d.getFullYear()
    }

    function float(n){
      if (n == 0 || n == ""){
        return ""}
      return " " + Number(n).toFixed(2)
    }

    var details = "";
    this._sorted = this.bankAccount.record.sort(function(first,second){
       return new Date(second.date) - new Date(first.date)
    })

    this._sorted.forEach(function(hash){
      details+=( "\n" + format(hash["date"]) + " ||" + float(hash["credit"]) + " ||" + float(hash["debit"]) + " ||" + float(hash["balance"]))
    })

    return this._header + details
  };

  exports.BankStatement = BankStatement;
})(this);
