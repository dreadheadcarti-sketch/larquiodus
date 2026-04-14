let balance = 10000;

let btc = 50000;
let eth = 3000;
let sol = 120;

function update() {
  document.getElementById("balance").innerText = "$" + balance.toFixed(2);
  document.getElementById("btc").innerText = "$" + btc.toFixed(2);
  document.getElementById("eth").innerText = "$" + eth.toFixed(2);
  document.getElementById("sol").innerText = "$" + sol.toFixed(2);

  let change = ((Math.random() * 6) - 2).toFixed(2);
  document.getElementById("change").innerText = change + "% 24h";
}

function buy() {
  balance += 300;
  update();
}

function sell() {
  balance -= 200;
  update();
}

// LIVE SIMULATION ENGINE
setInterval(() => {
  btc += (Math.random() - 0.5) * 1000;
  eth += (Math.random() - 0.5) * 100;
  sol += (Math.random() - 0.5) * 10;
  update();
}, 2500);

update();
