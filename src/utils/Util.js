function _formatMoney (money){
    let formated = money
    .toFixed(2) // casas decimais
    .replace('.', ',')
    formated = "R$" + formated;
    return formated
}

module.exports = {
    formatMoney: _formatMoney
}