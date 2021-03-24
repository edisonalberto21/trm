import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PromigasTrmWebPartStrings';
import PromigasTrm from './components/PromigasTrm';
import { IPromigasTrmProps } from './components/IPromigasTrmProps';
import Util from '../promigasTrm/Services/Util';


export interface IPromigasTrmWebPartProps {
  description: string;
  tituloTRM: string;
  tituloEventos: string;
  tituloInformacionRelevante: string;
  tituloTRMIngles: string;
  tituloEventosIngles: string;
  tituloInformacionRelevanteIngles: string;
  descripciónCentro: string
  descripcionDrecha: string;
  UrlImagenIzquierda: string;
  UrlImagenCentro:string;
  UrlImagenDerecho:string;
  descripciónCentroIngles: string
  descripcionDrechaIngles: string;
  tituloSeccionIngles: string;

}

export default class PromigasTrmWebPart extends BaseClientSideWebPart<IPromigasTrmWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPromigasTrmProps> = React.createElement(
      PromigasTrm,
      {
        description: this.properties.description,
        tituloSeccionIngles: this.properties.tituloSeccionIngles,
        tituloTRM: this.properties.tituloTRM,
        tituloEventos: this.properties.tituloEventos,
        tituloInformacionRelevante: this.properties.tituloInformacionRelevante,
        context:this.context,
        tituloTRMIngles: this.properties.tituloTRMIngles,
        tituloEventosIngles: this.properties.tituloEventosIngles,
        tituloInformacionRelevanteIngles: this.properties.tituloInformacionRelevanteIngles,
        descripciónCentro: this.properties.descripciónCentro,
        descripcionDrecha: this.properties.descripcionDrecha,
        UrlImagenIzquierda: this.properties.UrlImagenIzquierda,
        UrlImagenCentro: this.properties.UrlImagenCentro,
        UrlImagenDerecho: this.properties.UrlImagenDerecho,
        descripciónCentroIngles: this.properties.descripciónCentroIngles,
        descripcionDrechaIngles: this.properties.descripcionDrechaIngles
     }
    );

    ReactDom.render(element, this.domElement);
   
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

 

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Título de Sección',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloSeccionIngles', {
                  label: 'Título de Sección Ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloTRM', {
                  label: 'Título Izquierdo',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloTRMIngles', {
                  label: 'Título Izquierdo Ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('UrlImagenIzquierda', {
                  label: 'Url imagen izquierda',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloEventos', {
                  label: 'Título Centro',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloEventosIngles', {
                  label: 'Título Centro Ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('descripciónCentro', {
                  label: 'Descripción centro',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('descripciónCentroIngles', {
                  label: 'Descripción centro ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('UrlImagenCentro', {
                  label: 'Url imagen Centro',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloInformacionRelevante', {
                  label: 'Título Derecha',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('tituloInformacionRelevanteIngles', {
                  label: 'Título Derecha Ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('descripcionDrecha', {
                  label: 'Descripción derecha',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('descripcionDrechaIngles', {
                  label: 'Descripción Derecha Ingles',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                }),
                PropertyPaneTextField('UrlImagenDerecho', {
                  label: 'Url imagen Derecha',
                  onGetErrorMessage: Util.validateTitle.bind(this),
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
