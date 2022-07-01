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

    /* div_container.innerHTML += `<div class="item">
    <input class="item-input" type="text" placeholder=${nuevaTarea} disabled>
    <button class="boton-editar"><i class="fa-solid fa-lock"></i></button>
    <button class="boton-remover"><i class="fa-solid fa-trash"></i></button>
  </div>` */

    ////////////

    // for (let i = 0; i < div_container.length; i++) {

    console.log(i)

    // let inputItem = document.createElement("input"); 

    //`<div class="item${i}">
    div_container.innerHTML += `<div class="item">
      <input class="item-input" type="text" placeholder=${nuevaTarea} disabled>
      <button class="boton-editar"><i class="fa-solid fa-lock"></i></button>
      <button class="boton-remover"><i class="fa-solid fa-trash"></i></button>
    </div>`

    let div_item = document.querySelectorAll('.item')
    for (let item of div_item) {
      //span.remove()
      console.log('div')
    }

    let btn_del = document.querySelectorAll('.boton-remover')
    for (let j = 0; j < btn_del.length; j++) {
      btn_del[j].addEventListener("click", function () {
        this.classList.add('lupa')
        console.log(this.parentNode.remove())
      })
    }

    /* btn_del[i].addEventListener('click', function () {
      //btn_del.parentNode.remove()
      console.log('btn_del[i].parentNode')
      // div_item.style['visibility'] = 'visible'
    }) */
    //}

    ///////////
    // const btn_del = document.querySelector('.boton-remover')

    // btn_del.addEventListener('click', function () {
    //   console.log('del')
    //   btn_del.parentNode.remove()
    // })

    i++

  }
}

btn_add.addEventListener('click', function () {
  if (input_ppal.value) {
    let nuevaTarea = new Item(input_ppal.value)
    input_ppal.value = ''
  }

})

