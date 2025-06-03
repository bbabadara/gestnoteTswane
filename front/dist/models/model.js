export var Filiere;
(function (Filiere) {
    Filiere["DEV"] = "Developpement Web Mobile";
    Filiere["MD"] = "Marketing Digital";
})(Filiere || (Filiere = {}));
export var Niveau;
(function (Niveau) {
    Niveau[Niveau["L1"] = 0] = "L1";
    Niveau[Niveau["L2"] = 1] = "L2";
})(Niveau || (Niveau = {}));
export class Note {
    constructor(matiere, valeur, id) {
        this.matiere = matiere;
        this.valeur = valeur;
        this.id = id;
        if (id == undefined)
            this.id = ++Note.nbrNote;
    }
}
Note.nbrNote = 0;
export class Classe {
    constructor(filiere, niveau) {
        this.filiere = filiere;
        this.niveau = niveau;
    }
}
