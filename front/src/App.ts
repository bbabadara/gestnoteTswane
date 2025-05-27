import { EtudiantService } from "./services/EtudiantService.js";
import { Etudiant } from './models/model';

export class App{
    private static etudiantService : EtudiantService;
    private etudiants?:Etudiant[];
    constructor(){
         App.etudiantService=new EtudiantService();
        this.awaiting();
    }
    //methode intermedaire async pour eviter de metrre constructor async(not possible)
    async awaiting(){
        await this.main()
         this.showData()
    }
   async main():Promise<void>{
        this.etudiants = await App.etudiantService.getAllEtudiants();

        // .then(datas=>{
        //     // console.log(datas);
        //     this.etudiants=datas;
            
        // }).catch(error=>{
        //     console.log('Erreur recuperation');
            
        // })
    }

    showData(){
        console.log(this.etudiants);
        
    }
}

const app = new App();
