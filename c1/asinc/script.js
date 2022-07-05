// variables HTML
const input_ppal = document.querySelector('.input')
const boton_agregar = document.querySelector('.boton-agregar')
const div_container = document.querySelector('.container')

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {

    // variables HTML
    const inputItem = document.createElement('input')
    const newDiv = document.createElement('div')
    const botonEditar = document.createElement('button')
    const botonRemover = document.createElement('button')

    // input , div
    inputItem.setAttribute("type", "text");
    inputItem.setAttribute("disabled", '');
    inputItem.classList.add('item-input')
    inputItem.value = nuevaTarea
    newDiv.classList.add('Item')

    // botones; editar, remover
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
    botonEditar.classList.add('boton-editar')
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
    botonRemover.classList.add('boton-remover')

    // agregar elementos
    newDiv.appendChild(inputItem)
    newDiv.appendChild(botonEditar)
    newDiv.appendChild(botonRemover)
    div_container.appendChild(newDiv)

    // eventos Editar, Remover
    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled) {
        this.innerHTML = '<i class="fas fa-unlock"></i>'
        inputItem.removeAttribute("disabled")
      } else {
        this.innerHTML = '<i class="fas fa-lock"></i>'
        inputItem.setAttribute("disabled", '')
      }
    })

    botonRemover.addEventListener("click", function () {
      this.parentNode.remove()
    })
  }
}

boton_agregar.addEventListener('click', function () {
  chequearInput() 
})

chequearInput = () => {
  if (input_ppal.value.trim()) {
    let nuevaTarea = new Item(input_ppal.value.trim())
    input_ppal.value = ''
  }
}

// function chequearInput() {
//   if (input_ppal.value.trim()) {
//     let nuevaTarea = new Item(input_ppal.value.trim())
//     input_ppal.value = ''
//   }
// }
