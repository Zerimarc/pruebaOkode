import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  idPelicula
  pelicula

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('https://api.themoviedb.org/3/movie/'+ this.idPelicula + '?api_key=952d8096b4c3c852cb1a779a0bfc3f03&language=en-US')
    .subscribe(res => {
      this.pelicula = res;
      console.log(res);
    })
  }

}
