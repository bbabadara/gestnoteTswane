import { Etudiant } from "../models/model";

export class ListEtudiantComponent{
    //elements du DOM
    private tableElement: HTMLTableElement;
    // les données appliquées sur les element du DOM
    private etudiants: Etudiant[] = []; 

    constructor(etudiants: Etudiant[] = []) {
        // this.etudiants = etudiants;
        this.tableElement = document.createElement('table');
        this.tableElement.className = 'w-full border border-gray-300 text-sm';
        this.tableElement.id = 'table-etudiants';
        this.render();
        this.activateEvents();

    }
    // methode qui affiche les templates
    private render(): void {
        this.tableElement.innerHTML = `
            <thead>
                    <tr class="bg-gray-200 text-left">
                        <th class="border px-3 py-2">Matricule</th>
                        <th class="border px-3 py-2">NOM</th>
                        <th class="border px-3 py-2">PRENOM</th>
                        <th class="border px-3 py-2">Filiere</th>
                        <th class="border px-3 py-2">Niveau</th>
                        <th class="border px-3 py-2">Classe</th>
                        <th class="border px-3 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
        `
        this.renderTbody();
    }
    private renderTbody(): void {
        const tbody = this.tableElement.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = ''; // Clear existing rows
            this.etudiants.forEach(etudiant => {
                const row = document.createElement('tr');
                row.className = 'bg-white';
                row.innerHTML = `
                    <td class="border px-3 py-2">${etudiant.matricule}</td>
                    <td class="border px-3 py-2">${etudiant.nom}</td>
                    <td class="border px-3 py-2">${etudiant.prenom}</td>
                    <td class="border px-3 py-2">${etudiant.classe.filiere}</td>
                    <td class="border px-3 py-2">${etudiant.classe.niveau}</td>
                    <td class="border px-3 py-2">${etudiant.classe.filiere} - ${etudiant.classe.niveau}</td>
                    <td class="border px-3 py-2">
                        <button class="bg-gray-200 px-3 py-1 rounded">Voir Notes</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }
    }
    //methode qui active les evenements sur les templates
   private activateEvents(): void {
        // Ici, vous pouvez ajouter des écouteurs d'événements si nécessaire
        // par exemple, pour gérer les clics sur les lignes du tableau
    }

    get element(): HTMLTableElement {
        return this.tableElement;
    }

    update(etudiants: Etudiant[]): void {
        this.etudiants = etudiants;
        this.renderTbody();
    }

}