
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
    constructor(public filiere:string, public niveau:string){}
}
export interface Etudiant {
    matricule: string;
    nom: string;
    prenom: string;
    classe: Classe;
    notes: Note[];
}