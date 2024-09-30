import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {

  public valorGaso: number | undefined;
  public valorAlco: number | undefined;

  public distancia: string = "";
  public situacao: string = "";

  constructor(private alertController: AlertController) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
    header: 'Atenção',
    message: 'Por favor, digite os preços antes',
    buttons: ['OK']
    });
    await alert.present();
    }


    calcularMelhor() {
      if (this.valorGaso == null || this.valorAlco == null || this.distancia == "") {
        this.exibirAlerta();
        return;
      }
    
      const consumoGaso = 10; // km/L
      const consumoAlco = 7; // km/L
    
      const custoGasolinaPorKM = this.valorGaso / consumoGaso;
      const custoAlcoolPorKM = this.valorAlco / consumoAlco;
    
      const distanciaKm = parseFloat(this.distancia);

    
      if (custoAlcoolPorKM < custoGasolinaPorKM) {
        this.situacao = `Álcool é mais vantajoso.` ;
      } else {
        this.situacao = `Gasolina é mais vantajosa.`;
      }
    }
}
