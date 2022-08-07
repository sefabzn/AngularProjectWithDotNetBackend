import { Pipe, PipeTransform } from '@angular/core';
import { Kullanici } from '../Models/kullanici';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Kullanici[],filterText: string): Kullanici[] {
    filterText=filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((k:Kullanici)=>k.kullaniciAdi.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
