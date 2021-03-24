import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IPromigasTrmProps {
  description: string;
  tituloSeccionIngles: string;
  tituloTRM: string;
  tituloEventos: string;
  tituloInformacionRelevante: string;
  context:WebPartContext;
  tituloTRMIngles: string;
  tituloEventosIngles: string;
  tituloInformacionRelevanteIngles: string;
  descripciónCentro: string
  descripcionDrecha: string;
  descripciónCentroIngles: string
  descripcionDrechaIngles: string;
  UrlImagenIzquierda: string;
  UrlImagenCentro:string;
  UrlImagenDerecho:string;
}
