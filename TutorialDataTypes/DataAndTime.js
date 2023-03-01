function firstnumber(){
let d = new Date(2012, 1, 20, 3, 12);
    console.log( d );
}
firstnumber();//2012-02-19T23:12:00.000Z

function twonumber(){
    function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); 
  console.log( getWeekDay(date) ); 
}
twonumber();// ПТ

function threnumber(){
    let date = new Date(2012, 0, 3);
    function getLocalDay(date) {

        let day = date.getDay();
    
        if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
        }
    
        return day;
    }
    console.log(getLocalDay(date));
}
threnumber();//2

function fournumber(){
    function getDateAgo(date, days) {
        let dateCopy = new Date(date);
      
        dateCopy.setDate(date.getDate() - days);
        return dateCopy.getDate();
      }
      
      let date = new Date(2015, 0, 2);
      
      console.log( getDateAgo(date, 1) ); // 1
      console.log( getDateAgo(date, 2) ); // 31
      console.log( getDateAgo(date, 365) ); // 2
}
fournumber();

function fivenumber(){
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
      }
      
      console.log( getLastDayOfMonth(2012, 0) ); // 31
      console.log( getLastDayOfMonth(2012, 1) ); // 29
      console.log( getLastDayOfMonth(2013, 1) ); // 28
}
fivenumber();

function sixnumber(){
    function getSecondsToday() {
        let now = new Date();

        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
        let diff = now - today;
        return Math.round(diff / 1000);
      }
      
      console.log( getSecondsToday() );
}
sixnumber();//58701

function sevennumber(){
    function getSecondsToTomorrow() {
        let now = new Date();
      
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
      
        let diff = tomorrow - now;
        return Math.round(diff / 1000);
      }
      console.log(getSecondsToTomorrow())
}
sevennumber();//27551

function eightnumber(){
    function formatDate(date) {
        let diff = new Date() - date; // разница в миллисекундах
      
        if (diff < 1000) { // меньше 1 секунды
          return 'прямо сейчас';
        }
      
        let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
      
        if (sec < 60) {
          return sec + ' сек. назад';
        }
      
        let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
        if (min < 60) {
          return min + ' мин. назад';
        }
      
        // отформатировать дату
        // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
        let d = date;
        d = [
          '0' + d.getDate(),
          '0' + (d.getMonth() + 1),
          '' + d.getFullYear(),
          '0' + d.getHours(),
          '0' + d.getMinutes()
        ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
      
        // соединить компоненты в дату
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
      }
      
      console.log( formatDate(new Date(new Date - 1)) ); 
      
      console.log( formatDate(new Date(new Date - 30 * 1000)) );
      
      console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
      
      // вчерашняя дата вроде 31.12.2016, 20:00
      console.log( formatDate(new Date(new Date - 86400 * 1000)) );
}
eightnumber();//прямо сейчас 30 сек. назад 5 мин. назад 28.02.23 16:24

