var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EtudiantService } from "./services/EtudiantService.js";
import { ListEtudiantComponent } from './components/list-etudiant-component.js';
import { FormEtudiantComponent } from './components/form-etudiant-component.js';
export class App {
    constructor() {
        App.etudiantService = new EtudiantService();
        this.intComponent();
    }
    //methode intermedaire async pour eviter de metrre constructor async(not possible)
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.etudiants = yield App.etudiantService.getAllEtudiants();
            console.log(this.etudiants);
        });
    }
    intComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            // alert("listComponent");
            yield this.loadData();
            const listComponent = document.getElementById("list-component");
            const listEtudiantComponent = new ListEtudiantComponent();
            listEtudiantComponent.update(this.etudiants);
            listComponent.appendChild(listEtudiantComponent.element);
            const formComponent = document.getElementById("form-component");
            const formEtudiantComponent = new FormEtudiantComponent((etudiant) => {
                this.saveEtudiant(etudiant);
                listEtudiantComponent.update(this.etudiants);
            });
            formComponent.appendChild(formEtudiantComponent.element);
        });
    }
    saveEtudiant(etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const newEtudiant = yield App.etudiantService.addEtudiant(etudiant);
            (_a = this.etudiants) === null || _a === void 0 ? void 0 : _a.push(newEtudiant);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    // alert('Application chargée avec succès !');
    // Ici, vous pouvez appeler d'autres méthodes de l'application si nécessaire
});
