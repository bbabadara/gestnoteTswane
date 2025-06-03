export class ListEtudiantComponent {
    // les données appliquées sur les element du DOM
    constructor() {
        this.tableElement = document.createElement('table');
        this.tableElement.className = 'w-full border border-gray-300 text-sm';
        this.tableElement.id = 'table-etudiants';
        this.render();
        this.activateEvents();
    }
    // methode qui affiche les templates
    render() {
        this.tableElement.innerHTML = `
            <thead>
                    <tr class="bg-gray-200 text-left">
                        <th class="border px-3 py-2">Matricule</th>
                        <th class="border px-3 py-2">NOM</th>
                        <th class="border px-3 py-2">Filiere</th>
                        <th class="border px-3 py-2">Niveau</th>
                        <th class="border px-3 py-2">Classe</th>
                        <th class="border px-3 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border px-3 py-2">MAT_2</td>
                        <td class="border px-3 py-2">Mouhamed</td>
                        <td class="border px-3 py-2">Developpement Web Mobile</td>
                        <td class="border px-3 py-2">L3</td>
                        <td class="border px-3 py-2">L3 - Developpement Web Mobile</td>
                        <td class="border px-3 py-2">
                            <button class="bg-gray-200 px-3 py-1 rounded">Voir Notes</button>
                        </td>
                    </tr>
                    <tr class="bg-gray-50">
                        <td class="border px-3 py-2">MAT_1</td>
                        <td class="border px-3 py-2">Coudy</td>
                        <td class="border px-3 py-2">Genie Logiciel</td>
                        <td class="border px-3 py-2">L3</td>
                        <td class="border px-3 py-2">L3 - Genie Logiciel</td>
                        <td class="border px-3 py-2">
                            <button class="bg-gray-200 px-3 py-1 rounded">Voir Notes</button>
                        </td>
                    </tr>
                </tbody>
        `;
    }
    //methode qui active les evenements sur les templates
    activateEvents() {
        // Ici, vous pouvez ajouter des écouteurs d'événements si nécessaire
        // par exemple, pour gérer les clics sur les lignes du tableau
    }
    get element() {
        return this.tableElement;
    }
}
