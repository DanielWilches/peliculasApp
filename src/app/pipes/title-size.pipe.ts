import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSize'
})
export class TitleSizePipe implements PipeTransform {

  transform(text: string, textSize: any ): string  {
    // console.log(textSize);
    const textArray: string[] = text.split('');
    textArray.splice(20, textSize - 20, '...');
    const newText: string = textArray.join('');
    console.log(newText);
    return newText;
  }

}
