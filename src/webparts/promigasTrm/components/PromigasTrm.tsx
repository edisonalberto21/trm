import * as React from 'react';
import { IPromigasTrmProps } from './IPromigasTrmProps';
import {IListItem} from '../interfaces/IListItem'
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { ITrmState } from '../interfaces/ITrmState';
import Util from '../Services/Util'
import styles from '../components/PromigasTrm.module.scss';
import { RoleType } from 'sp-pnp-js';
import TrmApi from 'trm-api';


export default class PromigasTrm extends React.Component<IPromigasTrmProps, ITrmState> {

  constructor(props:IPromigasTrmProps){
    super(props);
    this.state = {                                                                   //Estado inicial, array items vacio
      items: [],
      informaciones: [],
      TRM : '',
      TRMP: ''
      };
    }
   
 componentDidMount() {
  var tiempo = "pasado"
    this.ValidarTRM(tiempo);
   }

 componentWillMount(){
     var tiempo = "presente"
     this.ValidarTRM(tiempo);
   }

  
public render(): React.ReactElement<IPromigasTrmProps> {


    const { 
      description,
      tituloTRM,
      tituloEventos,
      tituloInformacionRelevante,
      tituloTRMIngles,
      tituloEventosIngles,
      tituloInformacionRelevanteIngles,
      descripciónCentro,
      descripcionDrecha,
      UrlImagenIzquierda,
      UrlImagenCentro,
      UrlImagenDerecho,
      descripciónCentroIngles,
      descripcionDrechaIngles,
      tituloSeccionIngles
     } = this.props;   //Destructuración de los props..
    
    return(
      <article className="container-fluid hm-zona-inversionistas-pg">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h2>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),description,tituloSeccionIngles)}</h2>
                    </div>
                  </div>

                <div className="row">
                    <div className="col-md-4 col-12 center-icon-container-pg">

                        <div className="contenedor-sup-iconos">
                            <img src={UrlImagenIzquierda} alt=""/>
                            <h3>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),tituloTRM,tituloTRMIngles)}</h3>
                        </div>

                        <div className="col-12 center-icon-container-pg">
                            <div  className="contenedor-action">
                                <div className="data-action">{new Date().toLocaleDateString()}</div>
                                <div className={"container-action " + styles.inverdiv}>
                                    <span>COP$</span>
                                    <span> <strong> {this.state.TRM}</strong></span>
                                    <span className="mx-2"><img className={styles.inversionimg} src={this.state.TRM < this.state.TRMP? "/Inversionistas/icon-down-action.svg" : "/Inversionistas/icon-up-action.svg"}  alt=""/></span>
                                </div>
                            </div>
                        </div>

                       </div>
                    <div className="col-md-4 col-12 center-icon-container-pg">
                        <div className="contenedor-sup-iconos">
                            <img src={UrlImagenCentro} alt=""/>
                            <h3>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),tituloEventos,tituloEventosIngles)}</h3>
                        </div>
                         <p className={styles.inversionp}>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),descripciónCentro,descripciónCentroIngles)}</p>
                      </div>
                    <div className="col-md-4 col-12 center-icon-container-pg">
                        <div className="contenedor-sup-iconos">
                            <img src={UrlImagenDerecho} alt=""/>
                            <h3>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),tituloInformacionRelevante,tituloInformacionRelevanteIngles)}</h3>
                        </div>
                        
                           <p className={styles.inversionp}>{Util.renderSwitch(localStorage.getItem('promigasLenguajeActual'),descripcionDrecha,descripcionDrechaIngles)}</p>
                     </div>
                </div>


            </div>
        </article>
    );
  }

  

  ValidarTRM(estado) {
    var fecha;
    var date = new Date();
    var diaEnMilisegundos = 1000 * 60 * 60 * 24;
    var diadosEnMilisegundos = 1000 * 60 * 60 * 48;
    var suma = date.getTime() ; //getTime devuelve milisegundos de esa fecha ...
    var sumados = date.getTime() - diaEnMilisegundos;
    var fechapasada= new Date(sumados).toISOString();
    var fechaactual= new Date(suma).toISOString();
    
    if(estado == "pasado"){
      var recurso = fechapasada.split('T')[0];
      fecha = recurso;
     
    }

    if(estado == "presente"){
      var recurso = fechaactual.split('T')[0];
      fecha = recurso;
     
    }


    const trmapi = new TrmApi();
    trmapi
    .date(fecha)
    .then((data) =>{
     
     if(estado == "pasado" ){
      this.setState({
        TRMP: data['valor']
      }) 
    }
    if(estado == "presente" ){
     this.setState({
        TRM: data['valor']
      }) 
    }
  })
    .catch((error) => console.log(error));
   
 

  }

}
