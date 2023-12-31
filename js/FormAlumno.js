document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const table = document.querySelector(".table table-striped table-white");

  searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim();

      if (query !== "") {
          // Realizar una solicitud AJAX al archivo PHP de búsqueda en tiempo real
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "buscar.php?dni=" + query, true);
          xhr.send();

          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  // Actualizar la tabla con los resultados de la búsqueda
                  table.innerHTML = xhr.responseText;
              }
          };
      } else {
          // Si el campo de búsqueda está vacío, restaurar la tabla a su estado original
          // Realiza una solicitud AJAX para obtener todos los registros de la tabla
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "buscar.php", true);
          xhr.send();

          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  // Restablecer la tabla con todos los registros
                  table.innerHTML = xhr.responseText;
              }
          };
      }
  });
});



function toggleMenu() {

  const navbarMenu = document.getElementById("navbarMenu");

  navbarMenu.classList.toggle("active");

}



// Función para abrir el primer modal

function openModal1(dni) {

  var modal = document.getElementById('id-modal1-' + dni);

  modal.style.display = 'block';

}





// Función para abrir el segundo modal

function openModal2(dni) {

  var modal = document.getElementById('id-modal2-' + dni);

  modal.style.display = 'block';



}



function openModal3(dni) {

  var modal = document.getElementById('id-modal3-' + dni);

  modal.style.display = 'block';



}



function openModal4(dni) {

  var modal = document.getElementById('id-modal4-' + dni);

  modal.style.display = 'block';



}

function openModal5(dni) {

  var modal = document.getElementById('id-modal5-' + dni);

  modal.style.display = 'block';



}



function openModal6(dni) {

  var modal = document.getElementById('id-modal6-' + dni);

  modal.style.display = 'block';

}



function openModal7(dni) {

  var modal = document.getElementById('id-modal7-' + dni);

  modal.style.display = 'block';

}

function openModal8(dni) {

  var modal = document.getElementById('id-modal8-' + dni);

  modal.style.display = 'block';

}

function openModal9(dni) {

  var modal = document.getElementById('id-modal9-' + dni);

  modal.style.display = 'block';

}

function openModal10(dni) {

  var modal = document.getElementById('id-modal10-' + dni);

  modal.style.display = 'block';

}

function openModal11(dni) {

  var modal = document.getElementById('id-modal11-' + dni);

  modal.style.display = 'block';

}

function openModal12(dni) {

  var modal = document.getElementById('id-modal12-' + dni);

  modal.style.display = 'block';

}

function openModal13(dni) {

  var modal = document.getElementById('id-modal13-' + dni);

  modal.style.display = 'block';

}

function openModal14(dni) {

  var modal = document.getElementById('id-modal14-' + dni);

  modal.style.display = 'block';

}

function openModal20(dni) {

  var modal = document.getElementById('id-modal20-' + dni);

  modal.style.display = 'block';

}

function openModal21(dni) {

  var modal = document.getElementById('id-modal21-' + dni);

  modal.style.display = 'block';
}

function openModal22(dni) {

  var modal = document.getElementById('id-modal22-' + dni);

  modal.style.display = 'block';
}

function openModal23(dni) {

  var modal = document.getElementById('id-modal23-' + dni);

  modal.style.display = 'block';
}

function openModal24(dni) {

  var modal = document.getElementById('id-modal24-' + dni);

  modal.style.display = 'block';
}
function closeModal(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

}

function openModal25(dni) {

  var modal = document.getElementById('id-modal25-' + dni);

  modal.style.display = 'block';
}

function openModal26(dni) {

  var modal = document.getElementById('id-modal26-' + dni);

  modal.style.display = 'block';
}



function closeModal(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

}



function closeModal1(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal1(dni);

}



function closeModal2(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal1(dni);

}



function closeModal3(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal6(dni);

}



function closeModal4(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal7(dni);

}

function closeModal5(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal11(dni);

}

function closeModal6(modalId) {

  var modal = document.getElementById(modalId);

  modal.style.display = 'none';

  openModal22(dni);

}


function openCity(evt, cityName, dni) {

  console.log("Abriendo ciudad:", cityName);

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("city");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("tablink");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].classList.remove("w3-blue");

  }

  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.classList.add("w3-blue");

}



function confirmDelete() {

  return confirm("¿Estás seguro de que deseas eliminar este elemento?");

}



function toggleDiagnostico1(fechaIngresoFila) {

  var diagnosticoSpan = document.getElementById("diagnosticoSpan-" + fechaIngresoFila);

  var imgMostrar = document.getElementById("img-mostrar-" + fechaIngresoFila);



  if (diagnosticoSpan.style.display === "none") {

    diagnosticoSpan.style.display = "inline"; // Muestra el contenido

    imgMostrar.src = '/Proyecto-master/Proyecto-master/img/no-ver.png'; // Cambia la imagen a "Ocultar"

  } else {

    diagnosticoSpan.style.display = "none"; // Oculta el contenido

    imgMostrar.src = '/Proyecto-master/Proyecto-master/img/ver.png'; // Cambia la imagen a "Mostrar"

  }

}



function toggleMotivo1(fechaIngresoFila1) {

  var motivoSpan = document.getElementById("motivoSpan-" + fechaIngresoFila1);

  var imgMostrar1 = document.getElementById("img-mostrar1-" + fechaIngresoFila1);



  if (motivoSpan.style.display === "none") {

    motivoSpan.style.display = "inline"; // Muestra el contenido

    imgMostrar1.src = '/Proyecto-master/Proyecto-master/img/no-ver.png'; // Cambia la imagen a "Ocultar"

  } else {

    motivoSpan.style.display = "none"; // Oculta el contenido

    imgMostrar1.src = '/Proyecto-master/Proyecto-master/img/ver.png'; // Cambia la imagen a "Mostrar"

  }

}



function toggleDiagnostico2(fechaIngresoFila3) {

  var diagnosticoSpan2 = document.getElementById("diagnosticoSpan2-" + fechaIngresoFila3);

  var imgMostrar2 = document.getElementById("img-mostrar2-" + fechaIngresoFila3);



  if (diagnosticoSpan2.style.display === "none") {

    diagnosticoSpan2.style.display = "inline"; // Muestra el contenido

    imgMostrar2.src = '/Proyecto-master/Proyecto-master/img/no-ver.png'; // Cambia la imagen a "Ocultar"

  } else {

    diagnosticoSpan2.style.display = "none"; // Oculta el contenido

    imgMostrar2.src = '/Proyecto-master/Proyecto-master/img/ver.png'; // Cambia la imagen a "Mostrar"

  }

}



function toggleMotivo2(fechaIngresoFila4) {

  var motivoSpan2 = document.getElementById("motivoSpan2-" + fechaIngresoFila4);

  var imgMostrar3 = document.getElementById("img-mostrar3-" + fechaIngresoFila4);



  if (motivoSpan2.style.display === "none") {

    motivoSpan2.style.display = "inline"; // Muestra el contenido

    imgMostrar3.src = '/Proyecto-master/Proyecto-master/img/no-ver.png'; // Cambia la imagen a "Ocultar"

  } else {

    motivoSpan2.style.display = "none"; // Oculta el contenido

    imgMostrar3.src = '/Proyecto-master/Proyecto-master/img/ver.png'; // Cambia la imagen a "Mostrar"

  }

}

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggle-checkbox");
  const cards = document.querySelectorAll(".order-card");
  const table = document.getElementById("table-id");
  const body = document.body;

  // Inicializar tarjetas con la clase bg-secondary
  cards.forEach(card => {
    card.classList.add("bg-primary");
  });

  checkbox.addEventListener("change", function () {
    cards.forEach(card => {
      if (checkbox.checked) {
        card.classList.remove("bg-primary");
        card.classList.add("bg-dark");
      } else {
        card.classList.remove("bg-dark");
        card.classList.add("bg-primary");
      }
    });

    if (checkbox.checked) {
      table.classList.remove("table-white");
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
      table.classList.add("table-white");
    }
  });
});










var currentTab = 0;

document.addEventListener("DOMContentLoaded", function (event) {





  showTab(currentTab);



});



function showTab(n) {

  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";

  if (n == 0) {

    document.getElementById("prevBtn").style.display = "none";

  } else {

    document.getElementById("prevBtn").style.display = "inline";

  }

  if (n == (x.length - 1)) {

    document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';

  } else {

    document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';

  }

  fixStepIndicator(n)

}



function nextPrev(n) {

  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {



    document.getElementById("nextprevious").style.display = "none";

    document.getElementById("all-steps").style.display = "none";

    document.getElementById("register").style.display = "none";

    document.getElementById("text-message").style.display = "block";









  }

  showTab(currentTab);

}



function validateForm() {

  var x, y, i, valid = true;

  x = document.getElementsByClassName("tab");

  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {

      y[i].className += " invalid";

      valid = false;

    }





  }

  if (valid) {

    document.getElementsByClassName("step")[currentTab].className += " finish";

  }

  return valid;

}



function fixStepIndicator(n) {

  var i, x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {

    x[i].className = x[i].className.replace(" active", "");

  }

  x[n].className += " active";

}



function showForm(selectedValue) {
  var form1 = document.getElementById("form1");
  var form2 = document.getElementById("form2");

  if (selectedValue === "Internacion") {
      form1.style.display = "block";
      form2.style.display = "none";
  } else if (selectedValue === "Domiciliario") {
      form1.style.display = "none";
      form2.style.display = "block";
  } else {
      form1.style.display = "none";
      form2.style.display = "none";
  }
}





var currentTab = 0;

showTab(currentTab);



function showTab(n) {

    var tabs = document.getElementsByClassName("tab");

    tabs[n].style.display = "block";

    

    if (n === 0) {

        document.getElementById("prevBtn").style.display = "none";

    } else {

        document.getElementById("prevBtn").style.display = "inline";

    }

    

    if (n === tabs.length - 1) {

        document.getElementById("nextBtn").innerHTML = "Guardar y Salir";

    } else {

        document.getElementById("nextBtn").innerHTML = "Siguiente";

    }

    

    document.getElementById("currentTab").value = n;

}



function nextPrev(n) {

    var tabs = document.getElementsByClassName("tab");

    tabs[currentTab].style.display = "none";

    currentTab += n;

    if (currentTab >= tabs.length) {

        document.getElementById("regForm").submit(); // Envía el formulario en la última pestaña

        return false;

    }

    showTab(currentTab);

}


function cancelForm() {
  // Redirige al usuario a la página deseada
  window.location.href = 'formularioAlumno.php';
}