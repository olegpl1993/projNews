import './styles/index.scss';
import five from './ts/five';
import People from './ts/people';

const hi = 'Hell world ';

const txt = 'some text';
console.log(txt);

function plus (a:string, b:number) {
    return a + b;
}
console.log(plus(hi, five));

const oleg:People = new People('Oleg', 28);
const lena:People = new People('Lena', 33);

oleg.setPass('abra357951');

lena.setPass('kity159357')
lena.sayName();
lena.sayAge();
lena.sayPass();

console.log(oleg);
console.log(lena);