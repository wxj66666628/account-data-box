/**
 * Created by xjweng on 2019/4/27.
 */
import { Pipe, PipeTransform,NgModule } from '@angular/core';
@Pipe({
  name: 'toThousandFormat'
})
export class toThousandPipe implements PipeTransform {
  transform(num: Number, bit: number): any {
    bit = bit > 0 && bit <= 20 ? bit : 2;
    let num_str = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(bit) + "";
    let l = num_str.split(".")[0].split("").reverse(), r = num_str.split(".")[1];
    let tem = "";
    for (let i = 0; i < l.length; i++) {
      tem += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return tem.split("").reverse().join("") + "." + r;
  }
}
@NgModule({
  imports: [],
  exports: [toThousandPipe],
  declarations: [toThousandPipe],
  providers: [],
})
export class ToThousandModule { }
