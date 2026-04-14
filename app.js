let balance = 10000;
let btc = 50000;
let eth = 3000;

function update() {
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("btc").innerText = btc.toFixed(2);
  document.getElementById("eth").innerText = eth.toFixed(2);
}

function buy() {
  balance += 200;
  update();
}

function sell() {
  balance -= 150;
  update();
}

// LIVE SIMULATION
setInterval(() => {
  btc += (Math.random() - 0.5) * 500;
  eth += (Math.random() - 0.5) * 50;
  update();
}, 3000);

update();
