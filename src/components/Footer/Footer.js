import './Footer.css';  // vinculo estilos en cascada
import '../../fontawesome/fontawesome-free-5.15.3-web/css/all.css'; //para poder usar los iconos de facebook, twitter y instagram 

const Footer = () => {
  return   <div>
    <footer>
      <div class= "conteiner-linea1-footer">
          {/* <div class= "container-rosario">
              <a href="https://www.rosario.gob.ar/web/" target="_blank">
                  <img class="fab MuniRos" src="/imagenes/RosarioLogo.png" alt="Logo Municipalidad de Rosario" >
              </a>
          </div>  */}

          <div class="container-icons">
              <a href="https://www.facebook.com/kiwihelado/" target="_blank">
                  <i class="fab fa-facebook icon-facebook"></i></a>
              <a href="https://twitter.com/kiwihelados" target="_blank">
                  <i class="fab fa-twitter icon-twitter"></i></a>
              <a href="https://www.instagram.com/kiwi.helados/" target="_blank">
                  <i class="fab fa-instagram icon-instagram"></i></a>
          </div>
      </div>
       {/* <!-- segunda linea del footer --> */}
      {/* <!-- <div class="Contenedor-Version">ver 1.5</div> --> */}
  </footer>

  <footer2>
         {/* <!-- segunda linea del footer --> */}
        <div class="Contenedor-Version">ver 1.12</div>
   </footer2>


    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>    */}
    {/* Esto ya es es un js */}
    {/* <script src="./index.js"></script> */}
  </div>;
};

export default Footer;

