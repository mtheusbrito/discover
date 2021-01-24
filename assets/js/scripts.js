"use strict";
const divModal = document.querySelector(".modal-overlay");
const Modal = {
  open() {
    // abrir modal
    //adicionar a classe active ao modal

    divModal.classList.add("active");

  },
  close() {
    // fechar o modal
    //remover a classe active do modal
    divModal.classList.remove("active");

  },
};
