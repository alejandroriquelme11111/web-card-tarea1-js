let precio = document.querySelector("#price");
let cantidad = document.querySelector("#amount");
let final = document.querySelector("#total");
let disminuir = document.querySelector("#less");
let aumentar = document.querySelector("#further");
let papelera = document.querySelector("#recycle");
let carrito = document.querySelector("#trolley");

aumentar.addEventListener("click", () => {
  cantidad.innerHTML++;
  final.innerHTML = (cantidad.innerHTML * precio.innerHTML).toLocaleString();
});

disminuir.addEventListener("click", () => {
  cantidad.innerHTML--;
  final.innerHTML = (cantidad.innerHTML * precio.innerHTML).toLocaleString();

  if (final.innerHTML < 0) {
    cantidad.innerHTML = 0;
    final.innerHTML = 0;
  }
});

papelera.addEventListener("click", () => {
  total.innerHTML = 0;
  amount.innerHTML = "";
});
