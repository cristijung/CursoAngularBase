import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.scss'],
})
export class GaleriaComponentComponent {
  texto: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.texto = data;
    });
  }

  title = 'Imagens do Filme';
  stitle = 'Bram Stoker';

  images = [
    { url: '../../../assets/dracula.png', caption: 'Gary Oldman como Drácula' },
    { url: '../../../assets/dracula2.png', caption: 'Descrição 2 da imagem' },
    { url: '../../../assets/dracula3.png', caption: 'Descrição da Imagem' },
    { url: '../../../assets/dracula4.png', caption: 'Descrição da Imagem' },
    { url: '../../../assets/dracula7.jpg', caption: 'Descrição da Imagem' },
    { url: '../../../assets/drc.png', caption: 'Descrição da Imagem' },
  ];
}
