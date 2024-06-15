let saldo = 0;

function tambahSaldo() {
  let tambah = parseFloat(window.prompt(`masukkan saldo kamu ya:)`));
  saldo += tambah;
  console.log(`saldo kamu adalah ${saldo}`);
  alert(
    `saldo kamu adalah ${saldo.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })}`
  );
}
tambahSaldo();

function kurangiSaldo() {
  let kurang = parseFloat(window.prompt(`kurangi saldo kamu ya:)`));
  saldo -= kurang;
  console.log(`sisa saldo kamu adalah ${saldo}`);

  alert(
    `yah, saldo nya sisa segini:( ${saldo.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })}`
  );
}
kurangiSaldo();
