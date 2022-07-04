// variables HTML
const input_ppal = document.querySelector('.input')
const btn_add = document.querySelector('.boton-agregar')
const div_container = document.querySelector('.container')

// let nuevaTarea = input_ppal.value
let i = 0

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {

    /*  div_container.innerHTML += `<div class="item">
      <input class="item-input" type="text" placeholder=${nuevaTarea} disabled>
      <button class="boton-editar"><i class="fas fa-lock"></i></button>
      <button class="boton-remover"><i class="fas fa-trash"></i></button>
     </div>` */

    // input , div // pasos a seguir segun tarea
    const inputItem = document.createElement('input')
    inputItem.setAttribute("type", "text");
    inputItem.setAttribute("disabled", '');
    inputItem.classList.add('item-input')
    inputItem.value = nuevaTarea
    const newDiv = document.createElement('div')
    newDiv.classList.add('Item')
    // button
    const botonEditar = document.createElement('button')
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
    botonEditar.classList.add('boton-editar')
    const botonRemover = document.createElement('button')
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
    botonRemover.classList.add('boton-remover')
    // agregar elementos
    newDiv.appendChild(inputItem)
    newDiv.appendChild(botonEditar)
    newDiv.appendChild(botonRemover)
    div_container.appendChild(newDiv)


    let div_item = document.querySelectorAll('.item')
    for (let item of div_item) {
    }

    let btn_ed = document.querySelectorAll('.boton-editar')

    btn_ed[i].addEventListener("click", function () {
      console.log('edit')
      console.log(this.previousSibling)
      if (this.previousSibling.hasAttribute('disabled')) { // == ''
        console.log('nada')
        this.innerHTML = '<i class="fas fa-unlock"></i>'
        this.previousSibling.removeAttribute("disabled")
      } else {
        this.innerHTML = '<i class="fas fa-lock"></i>'
        this.previousSibling.setAttribute("disabled", '')
      }
    })

    let btn_del = document.querySelectorAll('.boton-remover')
    for (let k = 0; k < btn_del.length; k++) {
      btn_del[k].addEventListener("click", function () {
        this.parentNode.remove()
      })
    }

    i++
  }
}

btn_add.addEventListener('click', function () {
  if (input_ppal.value) {
    let nuevaTarea = new Item(input_ppal.value.trim())
    input_ppal.value = ''
  }
})

