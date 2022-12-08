document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".datos").forEach(datos =>{
  
            datos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?datos.classList.remove("filtro")
              :datos.classList.add("filtro")
        })
  
    }
  
  
  })