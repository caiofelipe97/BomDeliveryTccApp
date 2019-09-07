function _formatMoney (money){
    if(money == 0){
        return "Grátis"
    }
    let formated = money
    .toFixed(2) // casas decimais
    .replace('.', ',')
    formated = "R$" + formated;
    return formated
}

module.exports = {
    formatMoney: _formatMoney
}