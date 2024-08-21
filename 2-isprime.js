
function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  console.log(nbrPremier(2));
  console.log(nbrPremier(4));
  console.log(nbrPremier(5));
  console.log(nbrPremier(0));