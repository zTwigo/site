// Utilizzo l'observer per poter fare un effetto di transizione
// ogni volta che l'utente vede qualcosa di "nuovo" nel sito
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})
// Conversione dei numeri
function getNumber(n){
    switch(n){
        case 'A':
            n = 10;
        break;
        case 'B':
            n = 11;
        break;
        case 'C':
            n = 12;
        break; 
        case 'D':
            n = 13;
        break;
        case 'E':
            n = 14;
        break;
        case 'F':
            n = 15;
        break;
        case 'G':
            n = 16;
        break;
        case 'H':
            n = 17;
        break;
        case 'I':
            n = 18;
        break;
        case 'L':
            n = 19;
        break;
        case 'M':
            n = 20;
        break;
    }
    parseInt(n);
    return n;
}
// Setting del logo per ogni film/serie/spinoff
function logoSetting(filmId){
    const descriptions = ["Minaccia Fantasma","Attacco dei cloni","La vendetta dei Sith","Una nuova speranza","L'impero colpisce ancora","Il ritorno dello jedi","Il risveglio della forza","Gli ultimi jedi","L'ascesa di Skywalker","The Mandalorian","Clone Wars","The Bad Batch","Rebels","The book of boba fett","Resistance","Obi Wan Kenobi","Andor","Clone Wars"];
    const image = document.getElementById("modal-img");
    const logo = document.getElementById("modal-logo");
    const desc = document.getElementById("modal-desc");
    const n = getNumber(filmId[2]);
    desc.innerHTML = descriptions[n];
    // image.style.backgroundImage = "url('./banners-foto/banner'" +filmId[0] + "'.jpg')";
    image.src = "./banners-foto/banner" +filmId[0] + ".jpg";
    logo.src = "./loghi/logo" + filmId[0] + ".png";
}
// Setting del nome di ogni personaggio
function charNameSetting(serie,nome){
    // Utilizzo una matrice e grazie alla riga riesco a capire di che serie si tratta
    // e grazie alla colonna di quale personaggio sto parlando
    let nomi = [["s"],["s"],["sd"],["s"],["f"],["s"],["s"],["s"],["t"],["Il mandaloriano/Din Djarin","Il bambino/Din Grogu","Bo-katan Kryze","Greef Karga","Carasynthia Dune “Cara”","The Armorer","Ig-11","Ahsoka Tano","Kuill"],["s"],["Omega","CT-9901 “Hunter”","CT-1904 “Echo”","CT-9902 “Tech”","CT-9903 “Wrecker”","CT-9904 “Crosshair”"]];
    return nomi[serie][nome];
}
// Setting della descrizione di ogni personaggio
function charDescSetting(serie,nome){
    // Segue lo stesso identico principio del nome del personaggio
    let nomi = [["s"],["s"],["sd"],["s"],["f"],["s"],["s"],["s"],["t"],["Il Mandaloriano, conosciuto da alcuni come Din Djarin, è un cacciatore di taglie consumato dalla battaglia, si fa strada in una pericolosa galassia in un’età incerta.","Un misterioso bambino perseguitato dai cacciatori di taglie per conto degli interessi Imperiali, il trovatello Grogu ha trovato protezione con il Mandaloriano Din Djarin.","Una guerriera dotata, Bo-Katan Kryze è una leggenda Mandaloriana. Ha combattuto per il futuro di Mandalore dalle Guerre dei Cloni, indossando un’armatura che è nella sua famiglia da generazioni.","Una volta spedizioniere per la Gilda dei Cacciatori di Taglie, Greef Karga gestiva il settore su Nevarro, un middle-man, un tramite tra i clienti e i cacciatori di taglie.","Un veterano della Guerra Civile Galattica che combattè sotto lo stendardo della Ribellione, Cara Dune è una guerriera esperta che viene da Alderaan","L’Armaiola gioca un ruolo vitale nel mantenimento della cultura Mandaloriana. Forgia le armature di beskar secondo la tradizione antica del suo popolo.","Uno di una serie di pericolosi droidi assassini ampiamente banditi nella galassia, IG-11 è un pistolero programmato per seguire i protocolli della Gilda dei Cacciatori di Taglie alla lettera.","Ahsoka Tano, una femmina di Togruta, era l’apprendista Padawan di Anakin Skywalker e eroe delle Guerre dei Cloni.","Un contadino di vapore su Arvala-7, Kuill è venuto a cercare pace in un mondo desolato, che è ora violato da criminali e mercenari."],["s"],["La giovane Omega viaggia per la galassia com i suoi fratelli, la Clone Force 99, come un formidabile membro del team che ha imparato a usare il suo fidato energy bow con grande abilità.","Hunter è un forte e stoico soldato con un set speciale di abilità, come leader della Bad Batch, Hunter ha dei sensi straordinariamente acuiti che gli danno un vantaggio quando sta tracciando i suoi bersagli.","Ex-ARC Trooper, Echo si è unito alla Bad Batch verso la fine delle Guerre dei Cloni dopo il suo salvataggio dalla Techno Unione. Il suo braccio-scomp link e impianti cibernetici gli danno la peculiare abilità di interagire con i sistemi computer.","Nell’inusuale gruppo di cloni commando specialisti chiamato Clone Force 99, Tech è lo specialista delle armi e dei computer. Con la sua abilità di analisi dei dati, può districarsi lungo i problemi tecnici ad una velocità maggiore di alcuni droidi.","Il turbolento colosso della Clone Force 99, Wrecker è un soldato gigante, con muscoli poderosi che lo rendono molto più forte di un clone normale","Freddo, veloce e attento, Crosshair era un membro della Clone Force 99, nella quale ricopriva il ruolo di cecchino. La sua vista fine gli dona un’accuratezza superiore, e di conseguenza, un’aria di superiorità."]];
    return nomi[serie][nome];
}

function modalSetting(filmId){
    const model = document.getElementById("model-sub-main");
    model.innerHTML = "";
    const n = getNumber(filmId[1]);
    const letter = filmId[0];
    var grid = "";
    // Preparo il mio grid
    for(var i=0;i<n;i++){
        grid+= "20vh ";
    }
    model.style.gridTemplateRows = grid;
    const child = document.createElement("div");
    child.classList.toggle("first-char");
    const x = getNumber(filmId[2]);
    // Con un div di partenza con la classe first-char vado a ricreare lo stesso
    // n volte (clonandolo)
    for(var i=0;i<n;i++){
        //const clone = child.cloneNode(true);
        const clone = child;
        const img = document.createElement("img");
        img.classList.toggle("img-char");
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.style.width = "700px";
        p2.style.width = "700px";
        p1.classList.toggle("p1-char");
        p2.classList.toggle("p2-char");
        const nome = charNameSetting(x,i);
        p1.innerHTML = nome;
        p2.innerHTML = charDescSetting(x,i);
        img.src = "./sw/" + letter + "/char" + i + ".WEBP";
        div.style.marginBottom = "20px";     
        clone.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        clone.appendChild(div);
        model.appendChild(clone);
    } 
}
// Ogni volta che clicco sopra ad un'immagine faccio apparire la schermata modale
function modal(element){
    const modal = document.getElementById("myModal");
    const footer = document.getElementById("footer");
    var filmId = element.id;
    console.log(filmId);
    modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.overflowX = "hidden";
    footer.classList.toggle("footer-modal");
    footer.classList.remove("footer-base");
    logoSetting(filmId);
    modalSetting(filmId);
    document.body.style.overflow = 'hidden';
}
// Chiusura schermata modale
function modalExit(){
    const modal = document.getElementById("myModal");
    const footer = document.getElementById("footer");
    modal.style.display = "none";
    footer.classList.remove("footer-modal");
    footer.classList.toggle("footer-base");
    document.body.style.overflowY = 'scroll';
}

// Transizione
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => { observer.observe(el) });
