import { PipeTransform, Pipe } from '@angular/core';
import {Product_TopInterface} from './product-top.interface'
@Pipe({
    name: 'typeFilter'
})

export class TypeFilterPipe implements PipeTransform {
    transform(value: Product_TopInterface[], filter: string): Product_TopInterface[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((product: Product_TopInterface) =>
            product. productType.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
