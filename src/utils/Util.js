function _formatMoney(money) {
  if (money == 0) {
    return 'Grátis';
  } else if (!money) {
    return 'R$ 0,00';
  }
  let formated = money
    .toFixed(2) // casas decimais
    .replace('.', ',');
  formated = 'R$' + formated;
  return formated;
}

function _formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (String(day).length == 1) {
    day = '0' + day;
  }
  if (String(month).length == 1) {
    month = '0' + month;
  }
  return day + '/' + month + '/' + year + ' às ' + hour + 'h' + minutes + 'min';
}

export const formatMoney = _formatMoney;
export const formatDate = _formatDate;
