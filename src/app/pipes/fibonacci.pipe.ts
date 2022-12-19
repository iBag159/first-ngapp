import { Pipe, PipeTransform } from '@angular/core';

// transformar datos

const fibonacci = (number: number): number => {
  if(number === 1 ||  number === 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
};

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): any {
    console.log("FIBO", value)
    return fibonacci(value);
  }

}
