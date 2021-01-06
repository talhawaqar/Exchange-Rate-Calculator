const currencyOneddl = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');

const currencyTwoddl = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchamge rates and updates the dom
function calculate() {
  const currencyOne = currencyOneddl.value;
  const currencyTwo = currencyTwoddl.value;

  const url = `https://v6.exchangerate-api.com/v6/ecd40121f744706f38ea001c/latest/${currencyOne}`;

  fetch(url).then(res => res.json()).then(data => {
    // console.log(data);
    const rate = data.conversion_rates[currencyTwo];
    rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
    amountTwo.value = (amountOne.value * rate).toFixed(2);
  });
}

// Event listeners
currencyOneddl.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);

currencyTwoddl.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyOneddl.value;
  currencyOneddl.value = currencyTwoddl.value;
  currencyTwoddl.value = temp;
  calculate();
});

calculate();
