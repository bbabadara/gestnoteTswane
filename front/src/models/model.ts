
export enum  Filiere{
    DEV="Developpement Web Mobile",
    MD="Marketing Digital"
}
export enum Niveau{
    L1,
    L2
}

export class Note{
    private static nbrNote:number = 0;
    constructor(public matiere:string, public valeur:number,public id?:number){
        if (id==undefined) this.id=++Note.nbrNote;
            
        
    }
}

export class Classe{
    constructor(public filiere:Filiere, public niveau:Niveau){}
}
export class Etudiant {
    constructor(public matricule:string, public nom:string, public prenom:string, public classe:Classe,public notes:Note[]=[]) {
        
    }
}