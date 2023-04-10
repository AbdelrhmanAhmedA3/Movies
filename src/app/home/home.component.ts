import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
import { MoviesDbService } from '../shareData-2/movies-db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  search:string='';
  imageMovies: Array<object> = [{
    image: `https://image.tmdb.org/t/p/w500/ovM06PdF3M8wvKb06i4sjW3xoww.jpg`,
    thumbImage: `https://image.tmdb.org/t/p/w500/ovM06PdF3M8wvKb06i4sjW3xoww.jpg`,
    alt: 'Avatar: The Way of Water',
    title: 'Avatar: The Way of Water'
},
{
  image: `https://image.tmdb.org/t/p/w500/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg`,
  alt: 'John Wick: Chapter 4',
  title: 'John Wick: Chapter 4'
},
{
  image: `https://image.tmdb.org/t/p/w500/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg`,
  alt: 'Creed III',
  title: 'Creed III'
},
{
  image: `https://image.tmdb.org/t/p/w500/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg`,
  alt: 'Tetris',
  title: 'Tetris'
},
{
  image: `https://image.tmdb.org/t/p/w500/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg`,
  alt: 'Murder Mystery 2',
  title: 'Murder Mystery 2'
},
{
  image: `https://image.tmdb.org/t/p/w500/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg`,
  alt: 'The Last of Us',
  title: 'The Last of Us'
},
{
  image: `https://image.tmdb.org/t/p/w500/fh7aM10THQzivGU7kAkgKrgzot4.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/fh7aM10THQzivGU7kAkgKrgzot4.jpg`,
  alt: 'Dungeons & Dragons: Honor Among Thieves',
  title: 'Dungeons & Dragons: Honor Among Thieves'
},
{
  image: `https://image.tmdb.org/t/p/w500/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg`,
  alt: 'The Mandalorian',
  title: 'The Mandalorian'
},
{
  image: `https://image.tmdb.org/t/p/w500/6ZZjNFjTlO9F25467CruIibwuxl.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/6ZZjNFjTlO9F25467CruIibwuxl.jpg`,
  alt: 'Operation Fortune: Ruse de Guerre',
  title: 'Operation Fortune: Ruse de Guerre'
},
{
  image: `https://image.tmdb.org/t/p/w500/a2tys4sD7xzVaogPntGsT1ypVoT.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/a2tys4sD7xzVaogPntGsT1ypVoT.jpg`,
  alt: 'Cocaine Bear',
  title: 'Cocaine Bear'
},
];
imagePeople: Array<object> = [{
  image: `https://image.tmdb.org/t/p/w500/rRdru6REr9i3WIHv2mntpcgxnoY.jpg`,
  thumbImage: `https://image.tmdb.org/t/p/w500/rRdru6REr9i3WIHv2mntpcgxnoY.jpg`,
  alt: 'Keanu Reeves',
  title: 'Keanu Reeves'
},
{
image: `https://image.tmdb.org/t/p/w500/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg`,
alt: 'Tom Cruise',
title: 'Tom Cruise'
},
{
image: `https://image.tmdb.org/t/p/w500/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg`,
alt: 'Nicolas Cage',
title: 'Nicolas Cage'
},
{
image: `https://image.tmdb.org/t/p/w500/lldeQ91GwIVff43JBrpdbAAeYWj.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/lldeQ91GwIVff43JBrpdbAAeYWj.jpg`,
alt: 'Jason Statham',
title: 'Jason Statham'
},
{
image: `https://image.tmdb.org/t/p/w500/aTcqu8cI4wMohU17xTdqmXKTGrw.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/aTcqu8cI4wMohU17xTdqmXKTGrw.jpg`,
alt: 'Ben Affleck',
title: 'Ben Affleck'
},
{
image: `https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg`,
alt: 'Leonardo DiCaprio',
title: 'Leonardo DiCaprio'
},
{
image: `https://image.tmdb.org/t/p/w500/jPsLqiYGSofU4s6BjrxnefMfabb.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/jPsLqiYGSofU4s6BjrxnefMfabb.jpg`,
alt: 'Morgan Freeman',
title: 'Morgan Freeman'
},
{
image: `https://image.tmdb.org/t/p/w500/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg`,
alt: 'Jackie Chan',
title: 'Jackie Chan'
},
{
image: `https://image.tmdb.org/t/p/w500/caX3KtMU42EP3VLRFFBwqIIrch5.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/caX3KtMU42EP3VLRFFBwqIIrch5.jpg`,
alt: 'Bruce Willis',
title: 'Bruce Willis'
},
{
image: `https://image.tmdb.org/t/p/w500/tZxcg19YQ3e8fJ0pOs7hjlnmmr6.jpg`,
thumbImage: `https://image.tmdb.org/t/p/w500/tZxcg19YQ3e8fJ0pOs7hjlnmmr6.jpg`,
alt: 'Steven Spielberg',
title: 'Steven Spielberg'
},
];
ahmed:boolean = false;
  urlImages:any=[];
  getName:any;
fullname!:string;
trendingMovies :any[] = [];
trendingPeople :any[] = [];
trendingTv :any[] = [];
trendingAll :any[] = [];
constructor(public shareData:ShareDataService , private MoviesDbService:MoviesDbService ){
    this.shareData.data.subscribe({
      next:()=>{
       this.getName = this.shareData.data.getValue();

      }
    })
}
  ngOnInit(){
    this.fullname = ``+Object.values(this.getName)[0]+` `+Object.values(this.getName)[1];
    this.MoviesDbService.getTrending('movie').subscribe({
      next:(data)=>{
        if (data.results != null) {

          this.ahmed = true
           this.trendingMovies = data.results;
           this.ahmed = false
        }else{
          this.ahmed = true
        }
        }
    });
    this.MoviesDbService.getTrending('tv').subscribe({
      next:(data)=> this.trendingTv = data.results,
    });
    this.MoviesDbService.getTrending('person').subscribe({
      next:(data)=> this.trendingPeople = data.results,
    });
    this.MoviesDbService.getTrending('all').subscribe({
      next:(data)=> this.trendingAll = data.results,
      error:(msg)=> { },
      complete:()=>{ }
    });

  }
}

