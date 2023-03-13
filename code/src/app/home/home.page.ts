import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public movies: Array<any> = new Array<any>();
  public stories: Array<any> = new Array<any>();

  langua = 'pt-BR';
  regiao = 'BR';

  private apiUrl = 'https://api.themoviedb.org/3/'
  private Key = '?api_key=97e6fa405cc6395cc947aad2e175d1d4'


  constructor(private http: HttpClient) { }

  ionViewOldEnter() {
    this.loadStories();
    this.loadMovies();
  }

  loadStories() {
    this.http.get("https://www.omdbapi.com/?apikey=3a056eae&s=net$page=1").subscribe(data => {
      const response: any = data;

      this.stories = response.Search;
    });
  }

  loadMovies() {
    this.http.get('https://www.omdbapi.com/?apikey=3a056eae&s=love$page=1').subscribe(data => {
      const response: any = data;

      this.movies = response.Search;
    });
  }
}
