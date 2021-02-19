function devuelveExcusa(){

    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let positionWho = (Math.floor(Math.random() * who.length + 0));
    let positionWhat = (Math.floor(Math.random() * what.length + 0));
    let positionWhen = (Math.floor(Math.random() * when.length + 0));

    return who[positionWho] + " " + what[positionWhat] + " " + when[positionWhen];
}
console.log(devuelveExcusa());

document.getElementById("excuse").innerHTML = devuelveExcusa();


