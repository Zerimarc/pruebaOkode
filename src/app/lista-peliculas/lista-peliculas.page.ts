import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.page.html',
  styleUrls: ['./lista-peliculas.page.scss'],
})
export class ListaPeliculasPage implements OnInit {

  peliculas = []
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=952d8096b4c3c852cb1a779a0bfc3f03&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=10&with_watch_monetization_types=flatrate')
    .subscribe(res => {
      this.peliculas = res.results;
    })
  }

  onSearchChange(searchValue: string): void {
    if(searchValue.length > 0){
      this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=952d8096b4c3c852cb1a779a0bfc3f03&language=en-US&query=' + searchValue +'&page=1&include_adult=false')
      .subscribe(res => {
        this.peliculas = res.results;
      })
    }else{
      this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=952d8096b4c3c852cb1a779a0bfc3f03&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1890-01-01&with_watch_monetization_types=flatrate')
      .subscribe(res => {
        this.peliculas = res.results;
    })
    }
    
  }
}
