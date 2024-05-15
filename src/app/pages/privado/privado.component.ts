import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {

  ruta= inject(Router)

  cerrar(){
    localStorage.removeItem('acceso')
    //localStorage.setItem('acceso', 'false')
    //this.ruta.navigateByUrl('login')
    window.location.href = 'login'
    }

}
