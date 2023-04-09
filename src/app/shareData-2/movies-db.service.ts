import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
 @Injectable({
  providedIn: 'root'
})
export class MoviesDbService {

  constructor(private HttpClient:HttpClient) {}

  getTrending(mediaType:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fd4635644c7ed99b6b2abc43a7604138`)
  }
  getDetails(id:string,mediaType:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=fd4635644c7ed99b6b2abc43a7604138`)
  }
  getSimilar(id:string,mediaType:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=fd4635644c7ed99b6b2abc43a7604138&language=en-US&page=1`)
  }
}
