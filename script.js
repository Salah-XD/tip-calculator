const billdiv = document.getElementById("billBox");
const tipdiv = document.getElementById("tipBox");
const noOfPeoplediv = document.getElementById("noOfPeople");
const totalPerPerson = document.getElementById("perPersonTotal");

let noOfPeople = Number(noOfPeoplediv.innerText);

const calculateBill = () => {
  // console.log(bill.value);
  const bill = Number(billdiv.value);
  const tip = Number(tipdiv.value) / 100;
  const tipAmount = bill * tip;
  const total = tipAmount + bill;
  // console.log({ total });
  const perPersonTotal = total / noOfPeople;
  // console.log(perPersonTotal);
  totalPerPerson.innerText = `$${perPersonTotal.toFixed(2)}`;
};
const increasePeople = () => {
  noOfPeople += 1;
  noOfPeoplediv.innerText = noOfPeople;
  calculateBill();
};
const decereasePeople = () => {
  if (noOfPeople <= 1) {
    alert("you cannot have less than one person !");
    return;
  }
  noOfPeople -= 1;
  noOfPeoplediv.innerText = noOfPeople;
  calculateBill();
};
