import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesDbService } from '../shareData-2/movies-db.service';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent {
  mediaType:string=''
  itemDetails:any;
  itemSimilar:any;
  constructor(private activated:ActivatedRoute ,
    private MoviesDbService:MoviesDbService ,
    private Router:Router,
    public ShareDataService:ShareDataService){};
  ngOnInit(){
    let {id ,mediaType} = this.activated.snapshot.params;
    this.mediaType = mediaType;
    this.MoviesDbService.getDetails(id,mediaType).subscribe({
      next:(data)=>{
          this.itemDetails = data;

      }
    })
    this.MoviesDbService.getSimilar(id,mediaType).subscribe({
      next:(data)=>{
          this.itemSimilar = data.results;

      }
    })
  }
  getSimilar(id:string,mediaType:string){
    this.MoviesDbService.getDetails(id,mediaType).subscribe({
      next:(data)=>{
          this.itemDetails = data;
      }
    })

    this.MoviesDbService.getSimilar(id,mediaType).subscribe({
      next:(data)=>{
          this.itemSimilar = data.results;

      }
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});
  }
}
