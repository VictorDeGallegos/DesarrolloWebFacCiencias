/*!
 * Start Bootstrap - Shop Homepage v5.0.3 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

let selectedProducts = 0;
let total = 0;

let carrito = [];
const catalogo = [
  { id: 1, producto: "Nike Dri-FIT Femme 10Kt", precio: 699 },
  { id: 2, producto: "Nike Dri-FIT Wild Rune", precio: 1199 },
  { id: 3, producto: "Nike Dri-FIT Challenger Wild Run", precio: 1399 },
  { id: 4, producto: "Nike Repel Wild Run Windrunner", precio: 2350 },
  { id: 5, producto: "Nike Sportswear", precio: 1350 },
  { id: 6, producto: "Nike Dri-FIT Get Fit", precio: 1199 },
  { id: 7, producto: "Nike Sportswear Femme", precio: 1099 },
  { id: 8, producto: "Nike Sportswear Femme", precio: 1099 },
  { id: 9, producto: "Nike Dri-FIT CR7", precio: 551 },
  { id: 10, producto: "ike Flex Runner", precio: 999 },
  { id: 11, producto: "Nike Dri-FIT Trophy", precio: 314 },
  { id: 12, producto: "Nike Trophy", precio: 349 },
];

function selectProduct(id) {
  addToArray(id);
  selectedProducts++;
  document.getElementById("cart").innerHTML = selectedProducts;
}

function addToArray(id) {
  catalogo.forEach(function (element) {
    if (element.id == id) {
      carrito.push(element);
    }
  });
}

function timeOut() {
  showProducts();
  setTimeout(modalClose, 5000);
}

function modalClose() {
  document.getElementById("cancelModal").click();
}

function obtainTotal() {
  total = 0;
  carrito.forEach(function (element) {
    total += element.precio;
  });
  document.getElementById("productList").innerHTML +=
    '<li class="list-group-item fw-bolder">TOTAL: ' + total + "</li>";
}

function showProducts() {
  document.getElementById("productList").innerHTML = "";
  carrito.forEach(function (element) {
    let list =
      '<li class="list-group-item">' +
      element.producto +
      "___________________" +
      element.precio +
      "</li>";
    document.getElementById("productList").innerHTML += list;
  });
  obtainTotal();
}

function success() {
  swal(
    {
      title: "Compra realizada!",
      text: "Te esperamos pronto",
      type: "success",
      timer: 4000,
      showConfirmButton: true,
    },
    function () {
      location.reload();
    }
  );
}
