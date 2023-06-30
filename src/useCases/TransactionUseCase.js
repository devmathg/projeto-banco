const TransactionUseCase = (bankAccountPayer, bankAccountRecipient, value) => {
    if (bankAccountPayer.removeFromBalance(value) == "sucess"){
        bankAccountRecipient.addToBalance(value)
        
        const transaction = new TransactionEntity(1, value, new Date().toISOString(), bankAccountPayer.id,bankAccountRecipient.id)
        return(transaction)
    }
    return("invalid")
}

export default TransactionUseCase