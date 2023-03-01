function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
console.log( ucFirst("вася") ); // Вася

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  console.log( checkSpam('buy ViAgRA now') );//true
  console.log( checkSpam('free xxxxx') );//true
  console.log( checkSpam("innocent rabbit") );//false

function trunslcate(str, maxlength) {
    str = "Вот, что мне хотелось бы сказать на эту тему:";
    console.log(str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
trunslcate();


function extractCurrencyValue(str) {
    str = "возвращает для строки $120 число 120";
    return str = parseInt(str.match(/\d+/))
    
    }
    console.log(extractCurrencyValue('$120'))//120
extractCurrencyValue();