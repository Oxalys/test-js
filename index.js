// 2
let maBoolean = true;

//3
let monArray = [];

//4
let monObjet = {

};

//5
let monString = "coucou";

//6
let monInt = 25;

//7
let objet = {
    nom: "",

    changer() {

    },
};

//8
let fnctn = (a, b) => {

};

//9
if (monInt > 8) {

};

//10
let a;
while (a > 10) {

};

//11
let date = new Date()


console.log(date);
// La date ne correspond pas au format de la consigne
//12
let maj = () => {
    monString = monString.toUpperCase();
};


//13
let partialMaj = () => {
    monString = monString.charAt(0).toUpperCase() + monString.substring(1, 5) + monString.charAt(5).toUpperCase();
};

//14
let longueur = () => {
    console.log(monString.length);
};

//15
let alea1 = () => {
    alert(Math.floor(Math.random() * 100))
};

//16
let alea2 = (a, b) => {
    alert(Math.floor(Math.random() * (b - a)));
}
//alea2(10, 30)

//17
let compare = (valeur) => {
    if (typeof valeur == "boolean") {
        console.log("Votre valeur est de type boolean");
    } else if (typeof valeur == "string") {
        console.log("Votre valeur est de type string");
    } else if (typeof valeur == "object") {
        console.log("Votre valeur est de type objet");
    } else if (typeof valeur == "number") {
        console.log("Votre valeur est de type integer");
    } else {
        console.log("Votre valeur est de type undefined");
    }
};

//18
let objet1 = {
    nom: "",
    age: "",

    modeling(nom, age) {
        this.nom = nom;
        this.age = age;
        alert(`Bonjour ${this.nom}, tu as ${this.age} ans`)
    }
};

//objet1.modeling("Salome", "25")

//19
let objet2 = {
    addKey(a) {
        objet1.ville = a;
        console.log(objet1);
    }
};
objet2.addKey("bruxelles");

//20
let carre = {
    size: "",
    borderaspect: "",
    epaisseur: "",
    couleur: "",

    put() {
        this.size = size;
        this.borderaspect = borderaspect;
        this.epaisseur = epaisseur;
        this.couleur = couleur;
        if (borderaspect != "solide" || borderaspect != "dotted") {
            alert("Veuillez insérer une valeur correcte svp");        
        } else if (couleur != "red" || couleur != "blue" || couleur != "green") {
            alert("Veuillez insérer une valeur correcte svp");
        } else if (typeof epaisseur != "number" || typeof size != "number") { 
            alert("Veuillez insérer une valeur correcte svp");
        } else {
            alert(`Votre carré a pour size = ${this.size}, pour aspect : ${this.borderaspect}, pour epaisseur : ${this.epaisseur} et est en ${this.couleur}.`);
        }
    },
};

//21
let body = document.querySelector('body');
let section = document.querySelector('section');
let h1 = document.querySelector('h1');

//22
h1.getAttribute("id", "management");
h1.innerText = "Bienvenue";

//23
let ssTt = document.createElement('h2');

h1.appendChild(ssTt);

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
