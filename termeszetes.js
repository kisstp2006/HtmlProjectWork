
const betegsegek = {
    tea: "Nyugtató hatású, segít a stressz csökkentésében és az emésztési zavarok enyhítésében.",
    mez: "Antibakteriális és gyulladáscsökkentő hatású, segít a torokfájás és a légúti fertőzések kezelésében.",
    kamilla: "Nyugtató hatású, csökkenti a szorongást, segít az alvás javításában és enyhíti az emésztési problémákat.",
    levendula: "Segít a pihenésben, csökkenti a szorongást, enyhíti a fejfájást, és segíthet az alvási problémák kezelésében.",
    vagy: "Erős antibakteriális és vírusellenes hatású, segít a fertőzések megelőzésében és az immunrendszer erősítésében.",
};

const kepek = ["fa.png", "levego.png", "viz.png"];
let veletlenkep = 0;

var kivalasztottbetegseg;

function mutat(melyik) {
    kivalasztottbetegseg=melyik;
    const info = betegsegek[melyik] || "Nincs elérhető információ.";
    document.getElementById('lapozo').innerHTML = info;
}

/* 
Ez a funckció azért lett kikommentelve mert nem használjuk az új "További információ gomb miatt"
function pucol() {
    document.getElementById('lapozo').innerHTML = "Ha kíváncsi valamelyik gyógyhatás részleteire, akkor mozgassa az egérkurzort a megfelelő listaelem fölé!";
}
*/

function kever() {
    veletlenkep = Math.floor(Math.random() * kepek.length);
    document.getElementById("kephely").src = kepek[veletlenkep];
}


function tipp() {
    const tippje = parseInt(document.getElementById("anyagok").value, 10);
    const resultMessage = tippje === veletlenkep ? "Jó a tipp!" : "Rossz tipp!";
    document.getElementById("kiirato").innerHTML = resultMessage;
}


function kiir(melyik) {
    const info = betegsegek[melyik] || "Nincs elérhető információ.";
    document.write(info);
}
function tovabbiinfo(){
    switch(kivalasztottbetegseg){
        case "tea":
            window.open("https://benu.hu/cikk/a-diolevel-tea-meglepo-hatasai", '_blank').focus();
            break;
        case "mez":
            window.open("https://hu.wikipedia.org/wiki/M%C3%A9z", '_blank').focus();
            break;
        case "kamilla":
            window.open("https://www.hazipatika.com/eletmod/termeszetes_gyogymodok/cikkek/kamilla_a_legismertebb_gyogynoveny_hatasai", '_blank').focus();
            break;
        case "levendula":
            window.open("https://novenytar.krp.hu/novenytar/levendula/61", '_blank').focus();
            break;
        case "fokhagyma ":
            window.open("https://hu.wikipedia.org/wiki/Fokhagyma", '_blank').focus();
            break;
        default:
            document.write('<h1>Nem találtunk információt</h1> <p>Elnézést a kellemetlenségért</p> <br> <button onclick=(window.location.reload())>Oldal újratöltése</button>');
            break;
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    const openSearchButton = document.getElementById("openSearch");
    const closeSearchButton = document.getElementById("closeSearch");
    const searchOverlay = document.getElementById("searchOverlay");
  
    openSearchButton.addEventListener("click", () => {
      searchOverlay.style.display = "flex";
    });
  
    closeSearchButton.addEventListener("click", () => {
      searchOverlay.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.style.display = "none";
      }
    });
  });