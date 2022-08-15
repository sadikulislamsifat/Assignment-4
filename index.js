


/*---------------------------------
      Ans: To The Q: No: 1
----------------------------------*/

// function radianToDegree(radians) {
//   var pai = Math.PI;
//   return radians * (180 / pai);
// }

// const radian = radianToDegree(prompt("Enter Your Number:"));

// console.log(radian);



/*---------------------------------
      Ans: To The Q: No: 3
----------------------------------*/

/*
function oilPrice(diselQuantity, patrolQuantity, octanQuantity) {
  const perLeterDisel = 114;
  const perLeterPatrol = 130;
  const perLeterOctan = 135;

  const disel = diselQuantity * perLeterDisel;
  const patrol = patrolQuantity * perLeterPatrol;
  const octan = octanQuantity * perLeterOctan;

  const totalPrice = disel + patrol + octan;
  return totalPrice;

}
const totalPrice = oilPrice(1, 0, 0);
console.log("Your Total Price Is: ", totalPrice);



/*---------------------------------
      Ans: To The Q: No: 4
----------------------------------*/


function publicBusFare(pesenger) {
  let total = (pesenger % 50) % 11 * 250;
  return total;
}
const total = publicBusFare(prompt("Total Pesenger:"));
console.log(total);




/*---------------------------------
      Ans: To The Q: No: 5
----------------------------------*/

let friends = [
  {name: "abul", friend: "babul"},
  {name: "babul", friend: "abul"}
];

function isBestFriend(friend){
  if(friends.name === "abul" && friends.friend === "babul"){
    console.log(true);
  }
  else(
    console.log(false)
  )
}

isBestFriend(friends);