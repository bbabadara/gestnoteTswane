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
export class App {
    constructor() {
        App.etudiantService = new EtudiantService();
        this.awaiting();
    }
    awaiting() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.main();
            this.showData();
        });
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            this.etudiants = yield App.etudiantService.getAllEtudiants();
            // .then(datas=>{
            //     // console.log(datas);
            //     this.etudiants=datas;
            // }).catch(error=>{
            //     console.log('Erreur recuperation');
            // })
        });
    }
    showData() {
        console.log(this.etudiants);
    }
}
const app = new App();
