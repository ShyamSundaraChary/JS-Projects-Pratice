function calculate() {
  const totalAmount = document.querySelector("#total-amount");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");
  const interestType = document.getElementById("interestType").value;

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  if (principal < 0 || isNaN(principal)) {
      principal = 0;
      principalInput.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
      rate = 0;
      rateInput.value = 0;
  }
  if (years < 0 || isNaN(years)) {
      years = 0;
      yearsInput.value = 0;
  }

  let result;
  if (interestType === "compound") {
      result = principal * Math.pow((1 + rate), years);
  } else {
      result = principal * (1 + rate * years);
  }

  totalAmount.textContent = result.toLocaleString(undefined, { style: "currency", currency: "USD" });
}