import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  constructor() { }
  
  public notaA: number | undefined;
  public notaB: number | undefined;
  public media: number | undefined;
  public situacao: string = "";

  calcularMedia() {
    if (this.notaA != null && this.notaB != null) {
      this.media = (this.notaA + this.notaB) / 2;
      this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }
  }
}
