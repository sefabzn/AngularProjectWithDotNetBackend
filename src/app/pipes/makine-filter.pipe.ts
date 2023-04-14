import { Pipe, PipeTransform } from '@angular/core';
import { KabloUretim } from '../Models/kabloUretim';

@Pipe({
  name: 'makineFilter'
})
export class MakineFilterPipe implements PipeTransform {

  transform(value: KabloUretim[],makineId:number ): KabloUretim[] {
    makineId=makineId?makineId:0
    return makineId? value.filter((r:KabloUretim)=>r.makineId==makineId):value;
  }

}
