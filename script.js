let element = document.getElementById("menu");
let element2 = document.getElementById("btnScroll");

element.addEventListener("click", navigateTo, true);

function navigateTo(event) {
  event.preventDefault();
  element2.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

// Group elements
const GroupOne = document.getElementById("grupp1");
const GroupTwo = document.getElementById("grupp2");
const GroupThree = document.getElementById("grupp3");
const GroupFour = document.getElementById("grupp4");
const GroupFive = document.getElementById("grupp5");

// Set values
GroupOne.innerHTML = "110kr";
GroupTwo.innerHTML = "120kr";
GroupThree.innerHTML = "125kr";
GroupFour.innerHTML = "130kr";
GroupFive.innerHTML = "145kr";

// Kebab - Kyckling - Gyros - Falafel menu
const kebabPrice = document.getElementById("KebabMedBröd");
const kebabTallrik = document.getElementById("KebabTallrik");
const hawaiiTallrik = document.getElementById("HawaiiTallrik");
const grekiskTallrik = document.getElementById("Grekisktallrik");
const iskanderRulle = document.getElementById("Iskanderrulle");
const kycklingRulle = document.getElementById("Kycklingrulle");
const kycklingkebabTallrik = document.getElementById("Kycklingkebabtallrik");
const kycklingkebabBröd = document.getElementById("Kycklingkebabbröd");
const gyrosTallrik = document.getElementById("Gyrostallrik");
const falafelTallrik = document.getElementById("Falafeltallrik");

// Set values
kebabPrice.innerHTML = "110kr";
kebabTallrik.innerHTML = "110kr";
hawaiiTallrik.innerHTML = "120kr";
grekiskTallrik.innerHTML = "120kr";
iskanderRulle.innerHTML = "120kr";
kycklingRulle.innerHTML = "120kr";
kycklingkebabTallrik.innerHTML = "120kr";
kycklingkebabBröd.innerHTML = "120kr";
gyrosTallrik.innerHTML = "120kr";
falafelTallrik.innerHTML = "110kr";

// A la carte
const lövstek = document.getElementById("Lövstek");
const schnitzel = document.getElementById("Schnitzel");
const pannbiff = document.getElementById("Pannbiff");
const rödspätta = document.getElementById("Rödspätta");
const kycklingfilé = document.getElementById("Kycklingfilé");
const fläskfilé = document.getElementById("Fläskfilé");
const kycklingspett = document.getElementById("Kycklingspett");
const pyttipanna = document.getElementById("Pyttipanna");
const raggmunk = document.getElementById("Raggmunk");
const lasagne = document.getElementById("Lasagne");
const bolognese = document.getElementById("Bolognese");
const nintyG = document.getElementById("90g");
const hundredfiftyG = document.getElementById("150g");
const paellaKyckling = document.getElementById("PaellaKyckling");
const paellaKebab = document.getElementById("PaellaKebab");
const paellaMix = document.getElementById("PaellaMix");

// Set values
lövstek.innerHTML = "120kr";
schnitzel.innerHTML = "120kr";
pannbiff.innerHTML = "120kr";
rödspätta.innerHTML = "120kr";
kycklingfilé.innerHTML = "125kr";
fläskfilé.innerHTML = "135kr";
kycklingspett.innerHTML = "135kr";
pyttipanna.innerHTML = "120kr";
raggmunk.innerHTML = "125kr";
lasagne.innerHTML = "125kr";
bolognese.innerHTML = "110kr";
nintyG.innerHTML = "99kr";
hundredfiftyG.innerHTML = "110kr";
paellaKyckling.innerHTML = "120kr";
paellaKebab.innerHTML = "120kr";
paellaMix.innerHTML = "120kr";

// Sallader
const Sallader = document.getElementById("Sallader");
const KycklingSpecial = document.getElementById("KycklingSpecial");
const NaddasSpecial = document.getElementById("NaddasSpecial");
const Barnmeny = document.getElementById("Barnmeny");

// Set values
Sallader.innerHTML = "110kr";
KycklingSpecial.innerHTML = "129kr";
NaddasSpecial.innerHTML = "129kr";
Barnmeny.innerHTML = "89kr";
