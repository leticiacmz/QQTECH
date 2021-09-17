let a = "Lojas Quero-Quero";

function findFirstCarectere() {
  let firstCaractere = getFirstCaractere(a);

  function getFirstCaractere() {
    const firstCaractere = a.charAt(0);
    return firstCaractere;
  }
  console.log("A PRIMEIRA LETRA É " + firstCaractere);
}

findFirstCarectere(a);
