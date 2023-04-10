import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[],name:string):any[] | undefined {
  return data.filter((data)=>data.title.toLowerCase().includes(name.toLowerCase()));
  }

}
