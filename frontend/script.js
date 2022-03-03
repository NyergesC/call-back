function init (){
    var a =  50;
    var b = 6;

    console.log(c) // undifined lesz ha most lefuttatjuk

    if (a < b) {
       function initC() { //itt lekeretezzuk a var scopjeat mert local scopeja van
            var c = b - a;
       };
       initC ();
    } else {
        function initC() {
        var c = a - b;
        };
        initC();

    };

    console.log(c); // itt 1et kapunk mert itt latszodik a c


}

init();

//UGYANEZ CSAK ITT AZ A LENYEG H NEM AKARJUK EGYBOL MEGHIVNI ES NEV NELKUILIEK

function init (){
    var a =  50;
    var b = 6;

    console.log(c) // undifined lesz ha most lefuttatjuk

    if (a < b){
       (function (){ //itt lekeretezzuk a var scopjeat mert local scopeja van
            var c = b - a;
            console.log(c);
       
        })();
    } else {
        (function () {
            var c = a - b;        
        })();
    };

    console.log(c); // itt 1et kapunk mert itt latszodik a c
}








function init(mathFunction){
    var a =  50;
    var b = 6;

    console.log(c) // undifined lesz ha most lefuttatjuk

    if (a < b){
        let c =mathFunction(b,a);
             
        console.log(c);
    } else {
        let c =mathFunction(a,b); 

    console.log(c);
        
}

//lenyeg h minket nem erdekel h hivjak 
//cel az init fuggvenyt atadni valahova 

const initC = (firstNumber, secondNumber) =>{
    return firstNumber - secondNumber;

};

const initD = (firstNumber,secondNumber) =>{
    return firstNumber * secondNumber;

};

init(initD);
