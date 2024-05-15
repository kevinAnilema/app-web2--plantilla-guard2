import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('acceso') == 'true' ){
    return true
  }else{
    return false;
  }

  
};
