import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformjsondata',
  standalone: true
})
export class GetjsonPipe implements PipeTransform {

  transform(val: unknown) {
    return JSON.stringify(val, null, 2)
      .replace(`[{}\]`, '')
      .replace('\n', '<br/>');
  }
}
