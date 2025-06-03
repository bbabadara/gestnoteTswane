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
   
   async loadData():Promise<void>{
        this.etudiants = await App.etudiantService.getAllEtudiants();
    console.log(this.etudiants);
       
    }

    
   async intComponent():Promise<void>{
        // alert("listComponent");
        await this.loadData();
        
        
        const listComponent=document.getElementById("list-component")! as HTMLDivElement; 
       const listEtudiantComponent:ListEtudiantComponent = new ListEtudiantComponent();
       listEtudiantComponent.update(this.etudiants!);
        listComponent.appendChild(listEtudiantComponent.element);

        const formComponent=document.getElementById("form-component")! as HTMLDivElement;
        const formEtudiantComponent:FormEtudiantComponent = new FormEtudiantComponent((etudiant: Etudiant) => {
        this.saveEtudiant(etudiant);
        listEtudiantComponent.update(this.etudiants!);
        });
        formComponent.appendChild(formEtudiantComponent.element)
        
        
    }
     async saveEtudiant(etudiant: Etudiant): Promise<void> {
        const newEtudiant:Etudiant = await App.etudiantService.addEtudiant(etudiant);
        this.etudiants?.push(newEtudiant);
       
    }
}
 
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    // alert('Application chargée avec succès !');
    // Ici, vous pouvez appeler d'autres méthodes de l'application si nécessaire
});