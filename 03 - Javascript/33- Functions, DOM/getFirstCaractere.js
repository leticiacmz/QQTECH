const a = "Lojas Quero-Quero";

findFirstCarectere(a);

function findFirstCarectere(a) {
  const firstCaractere = getFirstCaractere(a);

  console.log("A PRIMEIRA LETRA É " + firstCaractere);

  function getFirstCaractere(a) {
    const result = a.charAt(0);
  }
}
