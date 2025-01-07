// skabelon fundet på https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
// variabel "slideIndex" bliver opretter og sat til 1
let imageIndex = 1;
// showImages bliver sat til at være =1
showImages(imageIndex);

// funktionen bliver kaldt når der bliver klikket på næste billede
function plusImages(n) {
  showImages((imageIndex += n));
}

//funktionen bliver kaldt når det bliver klikket på en af prikkerne
function currentImage(n) {
  showImages((imageIndex = n));
}
// funktionen bliver kaldt når der skal blive skiftet billede
function showImages(n) {
  console.log("billede", n);

  //   variablen "i" bliver oprettet
  let i;
  // der bliver lavet en liste ud fra "myImages" klassen
  let images = document.getElementsByClassName("myImages");

  // der bliver lavet en liste ud fra "prik" klassen
  let prikker = document.getElementsByClassName("prik");

  //   hvis n er større end "images" længden bliver imageIndex sat til 1
  if (n > images.length) {
    imageIndex = 1;
  }
  //   hvis n er mindre end 1 bliver imageIndex sat til at være det samme som "images" længden
  if (n < 1) {
    imageIndex = images.length;
  }

  //   Variablen i sættes til 0.
  //   Løkken fortsætter, så længe "i" er mindre end længden af images-listen.
  //   Efter hver iteration øges i med 1.
  for (i = 0; i < images.length; i++) {
    console.log(i);
    // images listen bliver sat til "display:none;"
    images[i].style.display = "none";
  }

  //   Variablen i sættes til 0.
  //   Løkken fortsætter, så længe "i" er mindre end længden af prikker-listen.
  //   Efter hver iteration øges i med 1.
  for (i = 0; i < prikker.length; i++) {
    // alle i "prikker" listen får fjernet "active" klassen
    prikker[i].className = prikker[i].className.replace(" active", "");
  }
  // det aktuelle billede bliver sat til "display:block;"
  images[imageIndex - 1].style.display = "block";
  //   prik som svare til siden for klassen "active"
  prikker[imageIndex - 1].className += " active";
}
