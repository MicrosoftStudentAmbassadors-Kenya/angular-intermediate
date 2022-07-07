import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier: any): any {
    return pipeData.filter((eachItem: { [x: string]: string; }) => {
      return (eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) || 
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
