let switching = false; // premenná pre povolenie prepínania obrázkov

/*  Táto funkcia, aktualizuje obrázky galérie tak, aby ukazovali na prvú položku v zozname.  
    Kód začne vyhľadaním všetkých obrázkov v galérii a ich následným pridaním do zoznamu.
    Potom prechádza jednotlivé obrázky a pridáva položky do aktívnej stopy.
    V skratke kód prechádza všetky položky v galérii a ku každej aktualizovanej položke pripojí div s triedou active.
*/
function updateGallery() {
  $('.gallery__core img, .gallery__bg img').attr('src', galleryItems[0].url);
  $('.gallery__track').empty();
  $.each(galleryItems, function (index, item) {
    $('.gallery__track').append('<div class="gallery__track__item ' + (index == 0 ? 'active' : '') + '"><img src="' + item.thumb + '" data-full="' + item.url + '" alt=""></div>');
  });
}

/*  Tento úsek kódu sa používa na zistenie, kedy používateľ klikne na položku galérie.
    V prípade, že sa zaregistruje kliknutie, spustí animáciu prepínania medzi pôvodným a aktuálne zvloleným obrázkom.
    Taktiež ošetruje sitáciu, keby sa na obrázok klikne naraz viac používateľov, 
    vtedy sa spustí len raz za 10 milisekúnd.

    Kód začína pridaním triedy do aktívneho obrázku.
    Potom odstráni aktívny obrázok od jeho súrodencov a pridá ho späť s animovaným prechodom.
    Následne pripojí nový obrázok k základným obrázkom galérie a pridá animáciu prechodu obrázku na pozadí.
    Nakoniec nastaví časový limit, ktorý odstráni obe tieto animácie po 400 milisekundách.
*/
$('.gallery__search input').on('keyup', debounce(() => getNewImages()));
$('.gallery__track').on('click', '.gallery__track__item', function () {
  if (!switching) {
    switching = true;
    $(this).addClass('active').siblings().removeClass('active');
    // animate in new core image and background image
    const $oldBGImg = $('.gallery__bg img');
    const $oldImg = $('.gallery__core img');
    const newImg = $(this).find('img').data('full');
    const $newImg = $('<img class="slide-in" src="' + newImg + '">');
    const $newBGImg = $('<img class="fade-in" src="' + newImg + '">');
    $('.gallery__core').append($newImg);
    $('.gallery__bg').append($newBGImg);
    setTimeout(function () {
      $newImg.addClass('shift-up');
      $oldImg.addClass('shift-up');
      $oldBGImg.addClass('fade-out');
      $newBGImg.addClass('fading');
      setTimeout(function () {
        $('.gallery__core img').eq(0).remove();
        $('.gallery__bg img').eq(0).remove();
        $('.slide-in').removeClass('slide-in shift-up');
        $('.fade-in').removeClass('fade-in fading');
        switching = false;
      }, 400);
    }, 10);
  }
});

/* Pole objektov obsahujúce základné informácie o fotkách. 
      id => identifikačné číslo fotky
      url => internetová adresa fotky
      thumb => tá istá fotka ako v url ale so zníženou kvalitou pre rýchlejšie načítavanie stránky
*/
let galleryItems = [
  {
    "id": "Id2f5Y9dq1g",
    "url": "https://i.pinimg.com/736x/bb/e1/9c/bbe19c657c86ea793b171b1e4a971561.jpg",
    "thumb": "https://i.pinimg.com/736x/bb/e1/9c/bbe19c657c86ea793b171b1e4a971561.jpg"
  },
  {
    "id": "xsFxnW9_KZ0",
    "url": "https://i.pinimg.com/564x/44/45/35/444535ca192e5a01db770fb0f3dd6f4c.jpg",
    "thumb": "https://i.pinimg.com/564x/44/45/35/444535ca192e5a01db770fb0f3dd6f4c.jpg"
  },
  {
    "id": "ystlZBTbKiY",
    "url": "https://i.pinimg.com/564x/82/76/bc/8276bc898ce6b79a5d089ef0b624d105.jpg",
    "thumb": "https://i.pinimg.com/564x/82/76/bc/8276bc898ce6b79a5d089ef0b624d105.jpg"
  },
  {
    "id": "DOb-2jd0sbc",
    "url": "https://i.pinimg.com/564x/4a/69/d8/4a69d81be23cb01b7b6b5727379bd25b.jpg",
    "thumb": "https://i.pinimg.com/564x/4a/69/d8/4a69d81be23cb01b7b6b5727379bd25b.jpg"
  },
  {
    "id": "k_4m9_0PO3Q",
    "url": "https://i.pinimg.com/564x/b8/99/e6/b899e6b62b7379624dce60bd951da9b4.jpg",
    "thumb": "https://i.pinimg.com/564x/b8/99/e6/b899e6b62b7379624dce60bd951da9b4.jpg"
  },
  {
    "id": "NFB5zdUvb-c",
    "url": "https://i.pinimg.com/564x/79/69/ed/7969edf3dce7502278bb634bb3f0813e.jpg",
    "thumb": "https://i.pinimg.com/564x/79/69/ed/7969edf3dce7502278bb634bb3f0813e.jpg"
  },
  {
    "id": "pzC7JfukhUM",
    "url": "https://i.pinimg.com/564x/a4/d1/d9/a4d1d96df7412296f59af8909cb3cf8a.jpg",
    "thumb": "https://i.pinimg.com/564x/a4/d1/d9/a4d1d96df7412296f59af8909cb3cf8a.jpg"

  },
  {
    "id": "dSTalS8QzTg",
    "url": "https://i.pinimg.com/564x/ac/8d/4d/ac8d4d61ec382ac1d57efbf6a978a7c7.jpg",
    "thumb": "https://i.pinimg.com/564x/ac/8d/4d/ac8d4d61ec382ac1d57efbf6a978a7c7.jpg"
  },
  {
    "id": "z7tQUhBVOrY",
    "url": "https://i.pinimg.com/564x/5d/8e/a3/5d8ea356d33bdcd08a8b42fea628597c.jpg",
    "thumb": "https://i.pinimg.com/564x/5d/8e/a3/5d8ea356d33bdcd08a8b42fea628597c.jpg"
  }
];

// Aktualizuje obrázky galérie hneď pri načítaní
updateGallery();

/* Táto funkcia slúži na oznámenie události. 
Prijíma funkciu "func" a vracia inú funkciu, ktorá po uplynutí určitého času (300 milisekúnd) zavolá pôvodnú funkciu. 
Prvým argumentom vrátenej funkcie je "this", čo znamená, že sa zavolá na akýkoľvek objekt, ktorý bol odovzdaný do pôvodnej funkcie.
V skratke kód bude vykonávať funkciu "func" každých 300 milisekúnd, pokiaľ nebude zavolaná viac krát. */
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}