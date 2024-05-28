document.addEventListener('DOMContentLoaded', () => {
    // Interpolate and display user's name from localStorage
  
    document.querySelector('.welcome-text h2').textContent = `Emma BRIGITTE`;
    document.querySelector('.welcome-text h6').textContent = `Statu: Responsable d'habitat`;
   
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
    <h2>CLOTURE DU PROCESS DE TRAITEMENT D'UN SINISTRE</h2>
    <form id="claimForm">
  

      
<fieldset>
<legend>DOSSIER A CLOTURE</legend>

<br>
<label for="esi-number">N° DU SINISTRE :</label>
<input type="number" id="esi-number" name="esi-number" required  placeholder=" Entrez le Numéro de dossier">
<br>
<label for="esi-number">N° ESI :</label>
<input type="text" id="esi-number" name="esi-number" required  placeholder=" Entrez le Numéro ESI">
<br><br>


</select>
<br>



</fieldset>


<button type="submit" style="font-size: 12px;
border-radius: 7px;
border: #007bff;
padding: 10px 20px;margin-left: 87%;
cursor: pointer;
color: #fff;
font-weight: bold;
justify-content: center;
background-color: #0057b3ea;">Trouvé et  Clore</button>
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
          <button id="btn-confirmer" class="view-btn-confirmer">Réouvrir</button> <button id="btn-modifie" class="view-btn-modifier">Archivé</button>  

          </td>
        
        `;
        
            tbody.appendChild(row);

            
        });
       
      
    };
    

    // Initial table update
    updateClaimTable();
    
    
});

