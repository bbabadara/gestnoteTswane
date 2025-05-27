var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class EtudiantService {
    getAllEtudiants() {
        return __awaiter(this, void 0, void 0, function* () {
            const datas = yield fetch("http://localhost:3000/etudiants")
                .then(response => {
                if (!response.ok)
                    throw new Error("Erreur de ressource");
                return response.json();
            }).catch(error => {
                throw new Error("Erreur de ressource");
            });
            return datas;
        });
    }
    addEtudiant(etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch("http://localhost:3000/etudiants", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(etudiant)
            })
                .then(response => {
                if (!response.ok)
                    throw new Error("Erreur de ressource");
                return response.json();
            }).catch(error => {
                console.log("Erreur de ressource");
            });
            return data;
        });
    }
}
