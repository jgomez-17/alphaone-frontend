import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Mi primer App ANGULAR';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {

     this.ArregloTarjetas = [
      {titulo:'Camisa negra', subtitulo: '$70.000', image:"https://http2.mlstatic.com/D_NQ_NP_781193-CBT49585422954_042022-W.jpg"},
      {titulo:'Camisa blanca', subtitulo: '$90.000', image:"https://www.gef.co/dx/api/dam/custom/2019/Gef/ES-CO/Imagenes/Hombres/CAMISAS/Gole/566x715/Camisa-Hombre-Gole-Blanco-900-Frente-Gef.jpg"},
      {titulo:'Camisa roja', subtitulo: '$80.000', image:"https://http2.mlstatic.com/D_NQ_NP_903619-MCO49024311024_022022-W.jpg"},
      {titulo:'Camisa azul', subtitulo: '$50.000', image:"https://http2.mlstatic.com/D_NQ_NP_973737-CBT48481719230_122021-W.jpg"},
      {titulo:'Camisa verde', subtitulo: '$60.000', image:"https://http2.mlstatic.com/D_NQ_NP_845434-CBT48676564693_122021-W.jpg"},
     ]


  }
}
