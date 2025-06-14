export class FormEtudiantComponent {
    constructor(onSave) {
        this.onSave = onSave;
        this.formElement = document.createElement('form');
        this.formElement.className = 'w-full ';
        this.formElement.id = 'form-etudiant';
        this.render();
        this.activateEvents();
    }
    // methode qui affiche les templates
    render() {
        this.formElement.innerHTML = `
            
            <div class="flex w-full py-2 justify-end">

                <button class="bg-blue-100 text-green-600 px-3 py-1 rounded ">Refresh</button>
            </div>
            <div class="mb-4">
                <div class="flex gap-4">
                    <div class="w-1/2">
                        <label class="block text-gray-700 font-semibold mb-1">Nom</label>
                        <input type="text" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                            placeholder="Nom" id="nom">
                    </div>
                    <div class="w-1/2">
                        <label class="block text-gray-700 font-semibold mb-1">Prénom</label>
                        <input type="text" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                            placeholder="Prénom" id="prenom">
                    </div>
                </div>
            </div>
            <div class="flex gap-4 ">
                <div class="w-1/2 ">
                    <label class="block text-gray-700 font-semibold mb-1">Filière</label>
                    <select class="border rounded px-3 py-2 w-full" id="filiere">
                        <option>DATA-IA</option>
                        <option>Genie Logiciel</option>
                    </select>
                </div>
                <div class="w-1/2 ">
                    <label class="block text-gray-700 font-semibold mb-1">Niveau</label>
                    <select class="border rounded px-3 py-2 w-full" id="niveau">
                        <option>L1</option>
                        <option>L2</option>
                        <option>L3</option>
                    </select>
                </div>
            </div>
            <div class="flex w-full py-2 justify-end">

                <button class="bg-green-100 text-green-600 px-3 py-1 rounded ">Add Note</button>
            </div>

            <!-- Matières et notes -->
            <div class="w-full ">
                <div class=" w-full flex items-center gap-3">
                    <select class="border w-2/5 rounded px-2 py-2">
                        <option>PHP</option>
                        <option>JS</option>
                    </select>
                    <input type="number" value="0" class=" border rounded px-2 py-2">
                    <button class="bg-red-100 text-red-500 font-bold px-3 py-1 rounded">X</button>
                </div>

                <div class="flex items-center gap-3 py-2">
                    <select class="border w-2/5  rounded px-2 py-2">
                        <option>PHP</option>
                        <option>JS</option>
                    </select>
                    <input type="number" value="0" class=" border rounded px-2 py-2">
                    <button class="bg-red-100 text-red-500 font-bold px-3 py-1 rounded">X</button>
                </div>

            </div>

            <button class="bg-black text-white w-full py-2 rounded">Ajouter un étudiant</button>
        
        `;
    }
    //methode qui active les evenements sur les templates
    activateEvents() {
        this.onSubmitForm();
    }
    get element() {
        return this.formElement;
    }
    onSubmitForm() {
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            // Récupérer les valeurs des champs du formulaire
            const nom = this.formElement.querySelector("#nom").value;
            const prenom = this.formElement.querySelector("#prenom").value;
            const filiere = this.formElement.querySelector("#filiere").value;
            const niveau = this.formElement.querySelector("#niveau").value;
            // Créer un nouvel étudiant
            let matr = Math.random().toString(36).substring(2, 10).toUpperCase();
            const etudiant = { matricule: matr, nom, prenom, classe: { filiere, niveau } };
            this.onSave(etudiant); // Appeler la fonction de rappel pour sauvegarder l'étudiant
            this.formElement.reset(); // Réinitialiser le formulaire après la soumission
        });
    }
    update(data) {
    }
}
