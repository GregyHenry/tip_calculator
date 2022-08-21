function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let billCurrent = bill.replace(',', '.');
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeople = document.getElementById('people').value;

  if ((bill == '') | ((serviceQual == 0) | (people == ''))) {
    alert('Input the values the bill, service and people!');
    return;
  }

  if (numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  let total = (billCurrent * serviceQual) / numOfPeople;
  total = total.toFixed(2);
  totalPrice = total.replace('.', ',');
  totalPrice = document.getElementById('tip').innerHTML = '💲' + totalPrice;
  document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
