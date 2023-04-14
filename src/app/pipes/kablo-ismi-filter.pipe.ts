import { Pipe, PipeTransform } from '@angular/core';
import { CctvIsEmri } from '../Models/cctvIsEmri';
import { GunlukRapor } from '../Models/gunlukRapor';

@Pipe({
  name: 'kabloIsmiFilter'
})
export class KabloIsmiFilterPipe implements PipeTransform {
  transform(value: CctvIsEmri[],filterText:string ): CctvIsEmri[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText? value.filter((r:CctvIsEmri)=>r.isim.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
