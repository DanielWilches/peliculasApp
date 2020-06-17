import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSize'
})
export class TitleSizePipe implements PipeTransform {

  transform(text: string, textSize: any ): string  {
    const textArray: string[] = text.split('');
    textArray.splice(20, textSize - 20, '...');
    const newText: string = textArray.join('');
    return newText;
  }

}
