const nekiObjekat = {
    kljuc:100,
    "ime i prezime" : "asasdasd",
    obj:{
        kljuc:"vrednost",
    }
};

console.log(nekiObjekat.kljuc);
console.log(nekiObjekat["obj"]);

nekiObjekat.nesto = "bilo sta";

console.log(nekiObjekat);

const prazanObjekat = {};

const broj = 10;
const broj2 = "10";

console.log(broj==broj2);
console.log(broj===broj2);

const sayHello = function(param1){
    console.log(param1);
}
const callSayHello = function(func){
   let result; 
   const a = 1000;
   // racuna nesto 
   // result = nest

    func(a);
    return 100;
};

function sayHello2(){

}

sayHello2();


callSayHello(sayHello);



const fonis2 = "fonis";


function f1(){
    console.log(fonis2);
}

function f2(){
    const fonis = "fonis2";
    f1();
}

f2();
let br11= 11;
let br2= 21;

if(br2 > br11) {
    let tmp = br11;
    br11 = br2;
    br2 = tmp;
}


// console.log(tmp);


let a = 10;

{
    let a = 11;
    function logA(){
        console.log(a);
    }
    logA();
}


// napisati funkciju koja racuna i vraca izvod neke funkcije
// xˆn

function vratiIzvod(func){
    const parsed = func.split('ˆ');
    console.log(parsed);
    const stepen = +parsed[1];

    return function(x){
        return stepen * x**(stepen-1); //a**b -> a na b
    }
}
function xNa5(x){
    return x**5;
}

const izvod = vratiIzvod('xˆ5');

console.log('vrednost funkcije u tacki 2 je: ' , xNa5(2));
console.log('izvod funkcije u tacki 2 je: ' , izvod(2));


const container = document.querySelector('.container');

const childrens = container.children;

for(var i=0; i<childrens.length; i++){
//1.Nacin

//    const wrapper = function(i){


//         return function wrapper(){
//             childrens[i].innerHTML = i;
//         };

//     }
//     childrens[i].onclick =  wrapper(i);

//2.nacin

    for(let i=0; i<childrens.length; i++){
        childrens[i].onclick = function wrapper(){
            childrens[i].innerHTML = i+1;
        };
    }
}

