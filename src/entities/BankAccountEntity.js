const BankAccountEntity = class {
    constructor(id, balance, owner){
        this.id
        this.balance
        this.owner
    }

    addToBalance = (value) => {
        this.balance += value
    }
    removeFromBalance = (value) => {
        this.balance -= value
    }
}

export default BankAccountEntity

