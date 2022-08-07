import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { OperatorIsEmri } from '../Models/operatorIsEmri';

@Pipe({
  name: 'operatorFilter'
})
export class OperatorFilterPipe implements PipeTransform {

  transform(value: OperatorIsEmri[], filterText): OperatorIsEmri[] {
    filterText=filterText? filterText.toLowerCase():""
    return filterText? value.filter((o:OperatorIsEmri)=>o.operator.toLowerCase().indexOf(filterText)!==-1):value;
  }

}
