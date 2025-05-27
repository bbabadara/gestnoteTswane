import { Etudiant } from '../models/model.js';
export class EtudiantService{
   async getAllEtudiants():Promise<Etudiant[]>{
      const datas = await fetch("http://localhost:3000/etudiants")
        .then(response=>{
            if (!response.ok) throw new Error("Erreur de ressource")
            return response.json()
            
        }).catch(error=>{
            throw new Error("Erreur de ressource")
            
        })
        return datas
    }
   async addEtudiant(etudiant:Etudiant):Promise<Etudiant>{

        const data = await fetch("http://localhost:3000/etudiants",{
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(etudiant)
        })
        .then(response=>{
            if (!response.ok) throw new Error("Erreur de ressource")
            return response.json()
            
        }).catch(error=>{
            console.log("Erreur de ressource");
            
        })
        return data
    }
}