import { Pipe, PipeTransform } from '@angular/core';
import { GunlukRapor } from '../Models/gunlukRapor';
import { IsEmriModel } from '../Models/isEmri';

@Pipe({
  name: 'kabloIsmiFilter'
})
export class KabloIsmiFilterPipe implements PipeTransform {
  transform(value: IsEmriModel[],filterText:string ): IsEmriModel[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText? value.filter((r:IsEmriModel)=>r.isim.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
