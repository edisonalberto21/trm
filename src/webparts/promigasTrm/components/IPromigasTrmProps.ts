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
  descripciĆ³nCentro: string
  descripcionDrecha: string;
  descripciĆ³nCentroIngles: string
  descripcionDrechaIngles: string;
  UrlImagenIzquierda: string;
  UrlImagenCentro:string;
  UrlImagenDerecho:string;
}
