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

const menuItems = {
  groups: [
    { id: "grupp1", price: "110kr" },
    { id: "grupp2", price: "120kr" },
    { id: "grupp3", price: "125kr" },
    { id: "grupp4", price: "130kr" },
    { id: "grupp5", price: "145kr" },
  ],
  kebabMenu: [
    { id: "KebabMedBröd", price: "110kr" },
    { id: "KebabTallrik", price: "110kr" },
    { id: "HawaiiTallrik", price: "120kr" },
    { id: "Grekisktallrik", price: "120kr" },
    { id: "Iskanderrulle", price: "120kr" },
    { id: "Kycklingrulle", price: "120kr" },
    { id: "Kycklingkebabtallrik", price: "120kr" },
    { id: "Kycklingkebabbröd", price: "120kr" },
    { id: "Gyrostallrik", price: "125kr" },
    { id: "Falafeltallrik", price: "110kr" },
  ],
  aLaCarteMenu: [
    { id: "Lövstek", price: "120kr" },
    { id: "Schnitzel", price: "120kr" },
    { id: "Pannbiff", price: "125kr" },
    { id: "Rödspätta", price: "125kr" },
    { id: "Kycklingfilé", price: "125kr" },
    { id: "Fläskfilé", price: "139kr" },
    { id: "Kycklingspett", price: "135kr" },
    { id: "Pyttipanna", price: "120kr" },
    { id: "Raggmunk", price: "125kr" },
    { id: "Lasagne", price: "130kr" },
    { id: "Bolognese", price: "110kr" },
    { id: "90g", price: "99kr" },
    { id: "150g", price: "110kr" },
    { id: "PaellaKyckling", price: "125kr" },
    { id: "PaellaKebab", price: "125kr" },
    { id: "PaellaMix", price: "125kr" },
  ],
  saladsMenu: [
    { id: "Sallader", price: "115kr " },
    { id: "KycklingSpecial", price: "129kr" },
    { id: "NaddasSpecial", price: "129kr" },
    { id: "Barnmeny", price: "89kr" },
  ],
};

for (const key in menuItems) {
  const group = menuItems[key];
  group.forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) {
      element.innerHTML = item.price;
    }
  });
}
