module.exports = function check(str, bracketsConfig) {
    var getBrackets = function(bracketsConfig) {
        return bracketsConfig.map(function(elem) {
          return elem.join('');   //все элементы из конфига в строку без пробелов
        });
      }    
      var brackets = getBrackets(bracketsConfig);
    
   
      for (let i = 0; i < brackets.length;) {
          if (str.includes(brackets[i]) ) {
            str = str.replace(brackets[i], '');  // если в строке есть элемент из конфига то заменяем и проверяем снова
            i = 0; 
          } else i++; // к следующему из конфига
      };
    
      return str ? false : true;  // если в строке что-то осталось то ошибка
}
