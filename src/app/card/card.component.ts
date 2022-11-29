import { Component, OnInit , Input} from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";
  @Input() dataEntrante:any;
  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {

    this.image = "";
  }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
      {data: this.dataEntrante}
    )
  }
}
