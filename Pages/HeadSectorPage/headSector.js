document.addEventListener('DOMContentLoaded', () => {
    
 

    document.querySelector('.welcome-text h2').textContent = `Josephine DESOUZA`;
    document.querySelector('.welcome-text h6').textContent = `Statu: Chef de secteur`;


    //Disconnect
    const disconnect = document.querySelector(".disconnect-btn")
    disconnect.addEventListener('click',  () => {
        // Redirect to login page
   window.location.href = "../LoginPage/login.html"
    })

    // Function to open the modal
    const openModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');


        modal.innerHTML = `
      <div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>DÉCLARATION DE SINISTRE MULTIRISQUES IMMEUBLE</h2>
    <form id="claimForm">
    <fieldset>
    <legend>RENSEIGNEMENTS GÉNÉRAUX</legend>
    <label for="contract-number">Contrat n° :</label>
    <input type="text" id="contract-number" name="contract-number" required>
    <label for="assureur">Assureur :</label>
    <input type="text" id="assureur" name="assureur" required>
    <br>
    <label for="reference-assure">Référence Assuré :</label>
    <input type="text" id="reference-assure" name="reference-assure" required>
    <label for="nom-declarant">Nom du déclarant :</label>
    <input type="text" id="nom-declarant" name="nom-declarant" required>
    <br>
    <label for="tel" >N° Tél :</label>
    <input type="tel" id="tel" name="tel" pattern="[0-9]{9}" placeholder=" Entrez le Téléphone" required>
    <label for="chef-secteur">Chef de secteur ou gérant rattachés à l’immeuble :</label>
    <input type="text" id="chef-secteur" name="chef-secteur" required>
    <br>
    <label for="chef-tel">N° tel :</label>
    <input type="tel" id="chef-tel" name="chef-tel" pattern="[0-9]{9}" placeholder=" Entrez le Téléphone" required>
    <label for="fax">Fax :</label>
    <input type="text" id="fax" name="fax">
    <br>
    <label for="email">E-mail du Chef de secteur ou gérant rattaché :</label>
    <input type="email" id="email" name="email" placeholder=" Entrez le Email" required>
</fieldset>

      
<fieldset>
<legend>ADRESSE DE L’IMMEUBLE</legend>
<label for="address">Adresse 1 :</label>
<input type="text" id="address1" name="address" required >
<label for="address">Adresse 2 :</label>
<input type="text" id="address2" name="address2">
<br>
<label for="esi-number">N° ESI :</label>
<input type="text" id="esi-number" name="esi-number" required  placeholder=" Entrez le Numéro ESI">
<br><br>
<select id="copropriete-select" name="copropriete" required >
<option value="" disabled selected>Copropriété :</option>
<option  id="copropriete-oui" name="copropriete" value="Oui">Oui</option>
<option id="copropriete-non" name="copropriete" value="Non">Non</option>

</select><br><br>
<br>

<div id="trustee-details" style="display: none;">
<label for="trustee-name">Nom et coordonnées du syndic : </label>
<input type="text" id="trustee-name" name="trustee-name">
</div>

</fieldset>

<fieldset>
<legend>Informations sur le Sinistre</legend>
<label for="date-sinistre">Date du sinistre :</label>
<input type="date" id="date-sinistre" name="date-sinistre">
<label for="date-connaissance">Date de connaissance du sinistre :</label>
<input type="date" id="date-connaissance" name="date-connaissance">
</fieldset>

<fieldset>
<legend>NATURE DU SINISTRE</legend>

<select id="nature-select" name="nature-select" style="margin-bottom: 15px;" required >
<option value="" disabled selected>NATURE DU SINISTRE :</option>
<option  id="degat-eaux" name="nature-sinistre" value="Dégât des Eaux">Dégât des Eaux</option>
<option id="bris-glace" name="nature-sinistre" value="Bris de glace">Bris de glace</option>
<option  id="tempete" name="nature-sinistre" value="Tempête/grêle">Tempête/grêle</option>
<option   id="vol" name="nature-sinistre" value="Vol">Vol</option>
<option  id="incendie" name="nature-sinistre" value="Incendie">Incendie</option>
<option   id="choc-vehicule" name="nature-sinistre" value="Choc Véhicule/Impact">Choc Véhicule/Impact</option>
<option  id="catastrophe" name="nature-sinistre" value="Catastrophe Naturelle">Catastrophe Naturelle</option>
<option id="vandalisme" name="nature-sinistre" value="Vandalisme">Vandalisme</option>
<option id="resp-civile" name="nature-sinistre" value="Resp. Civile">Resp. Civile</option>
<option id="autres" name="nature-sinistre" value="Autres">Autres</option>

</select>
<div id="nature-sinistre-details" style="display: none;">
<label for="other-details" id="other-details-label">Autres (à préciser):</label>
<input type="text" id="other-details" name="other-details">
</div>
</fieldset>


<fieldset>
<legend>POINT DE DÉPART DU SINISTRE</legend>
<h3>Parties Privatives :</h3>
<select id="parties-privatives" name="parties-privatives"  style="margin-bottom: 15px;" required >
<option value="" disabled selected>Veuillez sélectionner</option>
<option id="logement" name="parties-privatives" value="Logement">Logement</option>
<option id="cave-privative" name="parties-privatives" value="Cave privative">Cave privative</option>
<option id="parking-privatif" name="parties-privatives" value="Parking privatif">parking-privatif</option>
<option id="commerce" name="parties-privatives" value="Commerce">Commerce</option>
<option id="autre-partie-privative" name="parties-privatives" value="Autre Partie Privative">Autre Partie Privative</option>
</select>
<div id="parties-privatives-details" style="display: none;">
<label for="autre-partie-privative">Autre Partie Privative (à préciser) :</label>
<input type="text" id="autre-partie-privative-details" name="autre-partie-privative-details">
</div>
<br>

<h3>Parties Communes :</h3>
<select id="parties-communes" name="parties-communes" style="margin-bottom: 15px;" required >
<option value="" disabled selected>Veuillez sélectionner</option>
<option id="pc-generales" name="parties-communes" value="PC Générales">PC Générales</option>
<option id="local-vo" name="parties-communes" value="Local VO">Local VO</option>
<option id="caves" name="parties-communes" value="Caves">Caves</option>
<option id="parkings" name="parties-communes" value="Parkings">Parkings</option>
<option id="autre-partie-commune" name="parties-communes" value="Autre Partie Commune">Autre Partie Commune</option>

</select>
<div id="parties-communes-details" style="display: none;">
<label for="autre-partie-privative">Autre Partie Privative (à préciser) :</label>
<input type="text" id="autre-partie-privative-details" name="autre-partie-privative-details">
</div>
<br>
<h3>Extérieurs :</h3>
<select id="exterieurs" name="exterieurs" style="margin-bottom: 15px;"  required>
<option value="" disabled selected>Veuillez sélectionner</option>
<option id="espaces-verts" name="exterieurs" value="Espaces verts">Espaces verts</option>
<option id="exterieurs-parkings" name="exterieurs" value="Parkings">Parkings</option>
<option id="installations-sportives" name="exterieurs" value="Installations sportives/Jeux">Installations sportives/Jeux"</option>
<option id="autres-exterieurs" name="exterieurs" value="Autre">Autre</option>
</select>
<div id="exterieur-details" style="display: none;">
<label for="autres-exterieurs">Autre (à préciser) :</label>
<input type="text" id="autres-exterieurs-details" name="autres-exterieurs-details">
</div>
</fieldset>


<fieldset>
<legend>CAUSES ET CIRCONSTANCES DU SINISTRE</legend>
<textarea id="causes-circonstances" name="causes-circonstances" rows="4" cols="50"></textarea>
</fieldset>

<fieldset>
<legend>NATURE DES DOMMAGES</legend>
<textarea id="nature-dommages" name="nature-dommages" rows="4" cols="50"></textarea>
</fieldset>

<fieldset>
<legend>MONTANT ESTIME DES DOMMAGES HTVA</legend>
<select id="montant" name="montant" style="margin-bottom: 15px;" required >
<option value="" disabled selected>Veuillez sélectionner</option>
<option id="moins-1600" name="montant-estime" value="< 1 600 €">&lt; 1 600 €</option>
<option  id="entre-1600-10000" name="montant-estime" value="> 1 600 € < 10 000 €">&gt; 1 600 € &lt; 10 000 €</option>
<option  id="entre-10000-30000" name="montant-estime" value="> 10 000 € < 30 000 €">&gt; 10 000 € &lt; 30 000 €</option>
<option  id="entre-30000-50000" name="montant-estime" value="> 30 000 € < 50 000 €">&gt; 30 000 € &lt; 50 000 €</option>
<option  id="plus-50000" name="montant-estime" value="> 50 000 €">&gt; 50 000 €</option>
<option  id="estimation-precie" name="estimation-precise" value="Estimation precise">Estimation précise</option>
</select>
<div id="estimation-details" style="display: none;">
<input type="number" id="estimation-precise" name="estimation-precise" placeholder="€">
</div>

</fieldset>

<fieldset>
<legend>SINISTRE INFERIEUR A LA FRANCHISE ET COMPORTANT UN RECOURS CONTRE UN RESPONSABLE ASSURE</legend>
<select id="sinistre-inferieur-franchise" name="sinistre-inferieur-franchise" required>
<option for="montant-dommages-incendie"  value="" disabled selected>MONTANT ESTIME DES DOMMAGES HTVA :</option>
<option   id="moins-30000" name="montant-dommages-incendie" value="< 30 000 €">INCENDIE &lt; 30 000 €</option>
<option   id="moins-10000" name="montant-dommages-impact" value="< 10 000 €">IMPACT IDENTIFIE &lt; 10 000 €</option>
</select>
<p>Voir Procédure d’instruction des sinistres Multirisques sous franchise</p>
</fieldset>


<fieldset>
<legend>OCCUPANT LÉSÉ</legend>
<select id="occupant-lese" name="occupant-lese" required>
<option for="occupant-lese"  value="" disabled selected>OCCUPANT :</option>
<option id="locataire" name="occupant-lese" value="Locataire">Locataire</option>
<option id="coproprietaire" name="occupant-lese" value="Copropriétaire">Copropriétaire</option>
</select>
<br>
<label for="nom-adresse-lese" style="margin-top:30px;" >Nom et adresse :</label>
<input type="text" id="nom-adresse-lese" name="nom-adresse-lese" required>
<br>
<label for="assurance-lese">Cie d’Assurance :</label>
<input type="text" id="assurance-lese" name="assurance-lese" required>
<label for="numero-police-lese">N° de Police :</label>
<input type="text" id="numero-police-lese" name="numero-police-lese" required>
<br>
<label for="adresse-lese">Adresse :</label>
<input type="text" id="adresse-lese" name="adresse-lese" required>
</fieldset>


<fieldset>
<legend>PRÉSUMÉ RESPONSABLE</legend>
<label for="nom-adresse-responsable">Nom et adresse :</label>
<input type="text" id="nom-adresse-responsable" name="nom-adresse-responsable" required>
<br>
<label for="assurance-responsable">Cie d’Assurance :</label>
<input type="text" id="assurance-responsable" name="assurance-responsable" required>
<label for="numero-police-responsable">N° de Police :</label>
<input type="text" id="numero-police-responsable" name="numero-police-responsable" required>
<br>
<label for="adresse-responsable">Adresse :</label>
<input type="text" id="adresse-responsable" name="adresse-responsable" required>
</fieldset>

<fieldset>
<legend>PIÈCES JOINTES</legend>
<select id="pieces-jointes" name="pieces-jointes" style="margin-bottom: 15px;" required >
<option value="" disabled selected>Veuillez sélectionner la pièce :</option>
<option id="devis" name="pieces-jointes" value="DEVIS">DEVIS</option>
<option id="factures" name="pieces-jointes" value="FACTURES">FACTURES</option>
<option id="depot-plainte" name="pieces-jointes" value="DÉPOT DE PLAINTE">DÉPOT DE PLAINTE (*)</option>
<option id="temoignages" name="pieces-jointes" value="TEMOIGNAGE(S)">TEMOIGNAGE(S)</option>
<option id="reclamation-victime" name="pieces-jointes" value="RÉCLAMATION DE LA VICTIME">RÉCLAMATION DE LA VICTIME</option>
<option id="avis-responsabilites" name="pieces-jointes" value="AVIS SUR LES RESPONSABILITES">AVIS SUR LES RESPONSABILITES</option>
<option id="certificat-medical" name="pieces-jointes" value="CERTIFICAT MEDICAL">CERTIFICAT MEDICAL</option>
<option id="plan-lieux" name="pieces-jointes" value="PLAN DES LIEUX">PLAN DES LIEUX</option>
<option id="rapport-technique" name="pieces-jointes" value="RAPPORT TECHNIQUE INTERNE">RAPPORT TECHNIQUE INTERNE</option>
<option id="contrat-entretien" name="pieces-jointes" value="CONTRAT D’ENTRETIEN OU DE MAINTENANCE">CONTRAT D’ENTRETIEN OU DE MAINTENANCE</option>
<option  id="attestation-assurance" name="pieces-jointes" value="ATTESTATION D’ASSURANCE">ATTESTATION D’ASSURANCE DU LOCATAIRE</option>
<option id="immatriculation-vehicule" name="pieces-jointes" value="IMMATRICULATION DU VEHICULE">IMMATRICULATION DU VEHICULE</option>
<option id="identite-proprietaire" name="pieces-jointes" value="IDENTITE DU PROPRIETAIRE DU VEHICULE">IDENTITE DU PROPRIETAIRE DU VEHICULE</option>
<option id="constat-dde" name="pieces-jointes" value="CONSTAT DDE">CONSTAT DDE</option>
<option id="constat-amiable" name="pieces-jointes" value="CONSTAT AMIABLE">CONSTAT AMIABLE</option>
<option  id="autre" name="pieces-jointes" value="AUTRE">AUTRE (à préciser)</option>

</select >
<div id="piece-details" style="display: none;">

<input type="text" id="autre-details" name="autre-details" placeholder="Préciser la pièce">
</div>
<div id="file-details" style="display: none;">
    <input type="file" id="file" name="Télécharger la pièce" multiple />
  </div>
</fieldset>

<fieldset>
<legend>CONTACT MANDATÉ POUR SUIVRE LE DOSSIER</legend>
<label for="nom-contact">Nom :</label>
<input type="text" id="nom-contact" name="nom-contact" required>
<label for="prenom-contact">Prénom :</label>
<input type="text" id="prenom-contact" name="prenom-contact" required>
<br>
<label for="fonction-contact">Fonction :</label>
<input type="text" id="fonction-contact" name="fonction-contact" required>
<br>
<label for="tel-contact">N° de tél. :</label>
<input type="tel" id="tel-contact" name="tel-contact" required>
<br>
<label for="email-contact">E-mail :</label>
<input type="email" id="email-contact" name="email-contact" required>
<br>
<p>
    (*) Documents obligatoires pour la gestion du sinistre. <br>
    Le déclarant s’engage à fournir toutes informations et documents
    complémentaires nécessaires à l’instruction du sinistre à première
    demande de l’Assureur. <br>
    Le souscripteur est informé que toute fausse déclaration ou exagération
    des pertes et dommages, volontaire ou involontaire, est passible de sanctions
    pénales (articles 113-8 et 113-10 du code pénal).
</p>
</fieldset>

<button type="submit" style="font-size: 12px;
border-radius: 7px;
border: #007bff;
padding: 10px 20px;margin-left: 87%;
cursor: pointer;
color: #fff;
font-weight: bold;
justify-content: center;
background-color: #0057b3ea;">Valider</button>
    </form>
  </div>
</div>

    `;
        document.body.appendChild(modal);

        // Close modal when clicking on the close button or outside of the modal content
        modal.querySelector('.close').onclick = () => modal.remove();
        window.onclick = event => {
            if (event.target === modal) {
                modal.remove();
            }
        };
        //dynamic field

        const coOwnershipField = document.getElementById('copropriete-select');
        const trusteeDetails = document.getElementById('trustee-details');

        const natureClaimDetail = document.getElementById('nature-sinistre-details');
        const natureClaim = document.getElementById('nature-select');

        const partiPrimitiveDetails = document.getElementById('parties-privatives-details');
        const partiePrimitive = document.getElementById('parties-privatives');

        const partiCommuneDetails = document.getElementById('parties-communes-details');
        const partieCommune = document.getElementById('parties-communes');

        const exterieurDetails = document.getElementById('exterieur-details');
        const exterieur = document.getElementById('exterieurs');

        const estimationDetails = document.getElementById('estimation-details');
        const estimation = document.getElementById('montant');

        const pieceDetails = document.getElementById('piece-details');
        const piece = document.getElementById('pieces-jointes');


        const fileDetails = document.getElementById('file-details');





        piece.addEventListener('change', () => {
            pieceDetails.style.display = piece.value === 'AUTRE' ? 'block' : 'none';
            fileDetails.style.display = piece.value === 'AUTRE' || 'DEVIS' || 'FACTURES' || 'DÉPOT DE PLAINTE' || 'TEMOIGNAGE(S)'
                || 'RÉCLAMATION DE LA VICTIME'
                || 'AVIS SUR LES RESPONSABILITES'
                || 'CERTIFICAT MEDICAL'
                || 'PLAN DES LIEUX'
                || 'RAPPORT TECHNIQUE INTERNE'
                || 'CONTRAT D’ENTRETIEN OU DE MAINTENANCE'
                || 'ATTESTATION D’ASSURANCE'
                || 'IMMATRICULATION DU VEHICULE'
                || 'IDENTITE DU PROPRIETAIRE DU VEHICULE'
                || 'CONSTAT DDE'
                || 'CONSTAT AMIABLE' ? 'block' : 'none';
        })



        estimation.addEventListener('change', () => {
            estimationDetails.style.display = estimation.value === 'Estimation precise' ? 'block' : 'none';
        })



        exterieur.addEventListener('change', () => {
            exterieurDetails.style.display = exterieur.value === 'Autre' ? 'block' : 'none';
        })


        partieCommune.addEventListener('change', () => {
            partiCommuneDetails.style.display = partieCommune.value === 'Autre Partie Commune' ? 'block' : 'none';
        })


        partiePrimitive.addEventListener('change', () => {
            partiPrimitiveDetails.style.display = partiePrimitive.value === 'Autre Partie Privative' ? 'block' : 'none';
        })

        natureClaim.addEventListener('change', () => {
            natureClaimDetail.style.display = natureClaim.value === 'Autres' ? 'block' : 'none';
        });


        coOwnershipField.addEventListener('change', () => {
            trusteeDetails.style.display = coOwnershipField.value === 'Oui' ? 'block' : 'none';
        });

        // Handle form submission
        document.getElementById('claimForm').onsubmit = event => {
            event.preventDefault();
            const claims = JSON.parse(localStorage.getItem('claims')) || [];
            const newClaim = {
                num_sin: claims.length ? claims[claims.length - 1].num_sin + 1 : 1,
                num_esi: document.getElementById('esi-number').value,
                dat_sin: document.getElementById('date-sinistre').value,
                nat_sin: document.getElementById('nature-select').value,
                adr_sin : document.getElementById('address1').value,
                mont_sin: document.getElementById('montant').value,
               

            };
            claims.push(newClaim);
            localStorage.setItem('claims', JSON.stringify(claims));
            updateClaimTable();
            modal.remove();
        };
    };

    // Attach event listener to the button to open the modal
    document.getElementById('loginBtn').addEventListener('click', openModal);

                            // <th>Numéro Sinistre</th>
                            // <th>Numéro ESI</th>
                            // <th>Date de Sinistre</th>
                            // <th>Nature du Sinistre</th>
                            // <th>Adresse</th>
                            // <th>Montant Réclamé</th>
                            // <th>Action</th>

    // Function to update the claims summary table
    const updateClaimTable = () => {
        const claims = JSON.parse(localStorage.getItem('claims')) || [];
        const tbody = document.querySelector('.claim-table tbody');
        tbody.innerHTML = '';
        claims.forEach(claim => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${claim.num_sin}</td>
          <td>${claim.num_esi}</td>
          <td>${claim.dat_sin}</td>
          <td>${claim.nat_sin}</td>
          <td>${claim.adr_sin}</td>
          <td>
          <button id="btn-confirmer" class="view-btn-confirmer">Confirmer</button> <button id="btn-modifie" class="view-btn-modifier">Modifie</button> <button id="btn-supprimer" class="view-btn-supprimer">Supprimer</button>  

          </td>
        
        `;
        
            tbody.appendChild(row);

            
            
        });
       
      
    };
    

    // Initial table update
    updateClaimTable();
    
    
});

