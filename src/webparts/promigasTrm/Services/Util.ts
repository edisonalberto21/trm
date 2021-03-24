export default class Util {

  public static validateTitle(value: string): string {   //Valida el campo por nulo o tamaño de caracteres
    
        if (value === null ||
          value.trim().length === 0) {
          return 'Este campo requiere información';
        }
       if (value.length > 300) {
          return 'Este campo no puede exceder los 100 caracteres';
        }
          return '';
      }

      public static renderSwitch(param,esp,ing) {    //Método para validar el localstorage del idioma, y presentar los campos configurados en la webpart, recibe los props del sistema
        switch(param) {
            case 'ESP':
            return esp;
            case 'ENG':
            return ing;
          default:
            return esp;
        }
      }

     

}