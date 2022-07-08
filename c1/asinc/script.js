// variables HTML
const input_ppal = document.querySelector('.input')
const boton_agregar = document.querySelector('.boton-agregar')
const div_container = document.querySelector('.container')

let nuevaTarea
let arr2 = []
let valor_input

// almacenar datos en localStorage
const memoria = (nuevaTarea) => {
  arr2.push(nuevaTarea) // tareas
  localStorage.setItem('tareas', JSON.stringify(arr2))
}

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
    inputItem.setAttribute("type", "text")
    inputItem.setAttribute("disabled", '')
    inputItem.classList.add('item-input')
    inputItem.value = nuevaTarea
    newDiv.classList.add('item')

    // botones: editar, remover
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
      valor_input = this.previousSibling.value
      if (inputItem.disabled) {
        this.innerHTML = '<i class="fas fa-unlock"></i>'
        inputItem.disabled = false
        arr2.forEach(function (item, index, object) {
          if (item == valor_input) {
            object.splice(index, 1)
          }
        })
      } else {
        this.innerHTML = '<i class="fas fa-lock"></i>'
        inputItem.disabled = true
        memoria(this.previousSibling.value)
      }
    })

    botonRemover.addEventListener("click", function () {
      valor_input = this.parentNode.firstChild.value
      arr2.forEach(function (item, index, object) {
        if (item == valor_input) {
          object.splice(index, 1)
        }
      })
      localStorage.setItem('tareas', JSON.stringify(arr2))
      this.parentNode.remove()

    })
  }
}

// traer datos de localStorage
if (localStorage.getItem('tareas')) {
  const datos = JSON.parse(localStorage.getItem('tareas'))
  datos.forEach(function (item) {
    nuevaTarea = new Item(item)
    memoria(item)
  })
}

boton_agregar.addEventListener('click', function () {
  chequearInput()
})

const chequearInput = () => {
  if (input_ppal.value.trim()) {
    nuevaTarea = new Item(input_ppal.value.trim())
    memoria(input_ppal.value)
    input_ppal.value = ''
  }
}

/*
BONUS PRUEBA MODULO 4:

- Cada vez que cree una nueva tarea, vaya guardándola en localStorage
- Cuando cargue la página, muestre todas las tareas guardadas en localStorage
 */
