import imgLogin from '../../Imagenes/InicioSesion_Copia3.png';
import './User.css';



const User = () => {
  

  return (

    <div Class="PortadaUser">
        <div class="Card">
            <div class="ImagenUsuario">
                <img src={imgLogin} alt="Inicio de Sesion"/>
            </div>
            <div class="CntNuevaCuenta">
                <p>Datos del Usuario:</p>
                {/* Debio ser un form pero como el action aun no se JS: no funciona los botones para volver: entonces pongo un div */}
                <div class = "FormCuenta" action="">
                    <div class="container-input">
                        <label for="name">Nombre:</label>
                        <input id="name" class="CamposEntrada" type="text" name="name" readonly="readonly"/>
                    </div>
                    <div class="container-input">
                        <label for="lastName">Apellido:</label>
                        <input id="lastName" class="CamposEntrada" type="text" name="lastName" readonly="readonly"/>
                    </div>
                    <div class="container-input">
                        <label for="email">Email:</label>
                        <input id="email" class="CamposEntrada" type="email" name="email" readonly="readonly"/>
                    </div>
                    <div class= "container-input">
                        <label for="edad">Edad:</label>
                        <input id="edad" class="CamposEntrada CampoEntradaPass" type="number" name="edad" readonly="readonly"/>
                    </div>
                    <div class= "container-input">
                        <label for="idUsuario">Id Usuario:</label>
                        <input id="idUsuario" class="CamposEntrada CampoEntradaPass" type="text" name="idUsuario" readonly="readonly"/>
                    </div>
                    <div class="DivBotonera">
                        <div class= "BotonAlta">
                            <a class ="AHref_submit" href="../../index.html"><button class="Submit" type="submit" > <ins>V</ins>olver</button></a>
                        </div>
                        {/* <!-- <div class= "BotonAlta">
                            <a class ="AHref_submit" href="../../index.html"><button class="Submit" type="submit" ><ins>C</ins>ancelar</button></a>
                        </div> --> */}
                    </div>
                </div>
            
            </div>    
        </div>
    </div>
  )
};

export default User;
