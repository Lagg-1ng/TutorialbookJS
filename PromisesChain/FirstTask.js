//они не эквивалентны 
promise
  .then(f1)
  .catch(f2);
// получим ту же ошибку, так как нет продолжения f1
  promise
  .then(f1, f2);
  //нет они не явяются