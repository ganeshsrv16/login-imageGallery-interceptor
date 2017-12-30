import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, queryString: any): any {

 if(queryString === undefined) return ninjas;
    return ninjas.filter(function(ninja)
  {
    return ninja.name.toLowerCase().includes(queryString.toLowerCase());
  })
}

}
