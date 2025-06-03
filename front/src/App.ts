import { EtudiantService } from "./services/EtudiantService.js";
import { Etudiant } from './models/model.js';
import { ListEtudiantComponent } from './components/list-etudiant-component.js';
import { FormEtudiantComponent } from './components/form-etudiant-component.js';

export class App{
    private static etudiantService : EtudiantService;
    private etudiants?:Etudiant[];
    constructor(){
         App.etudiantService=new EtudiantService();
        this.intComponent();
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
    intComponent():void{
        // alert("listComponent");
        const listComponent=document.getElementById("list-component")! as HTMLDivElement; 
       const listEtudiantComponent:ListEtudiantComponent = new ListEtudiantComponent();
        listComponent.appendChild(listEtudiantComponent.element);

        const formComponent=document.getElementById("form-component")! as HTMLDivElement;
        const formEtudiantComponent:FormEtudiantComponent = new FormEtudiantComponent();
        formComponent.appendChild(formEtudiantComponent.element)
        
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    // alert('Application chargée avec succès !');
    // Ici, vous pouvez appeler d'autres méthodes de l'application si nécessaire
});