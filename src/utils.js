    //return a datetime string formated dd/mm/yy hh:mm am
    export function getDateTime(createdDate) {
        let d = '';
        let theDateTime = '';
      
          if(createdDate == undefined){
          d = new Date();
          } else {
          d = new Date(createdDate);
          }
      
          let dDate = '01';
          if((d.getDate() + 1) < 10) {
              dDate = `0${d.getDate()}`; 
          } else {
              dDate = d.getDate();
          }      
          
          let dMonth = '01';
          
          if((d.getMonth() + 1) < 10) {
              dMonth = `0${d.getMonth() + 1}`;
          } else {
              dMonth = d.getMonth() + 1;
          }
          
          let dYear = d.getFullYear();
          
          let dHours = d.getHours();
          let dAM = 'AM';
          
          if(dHours > 12) {
            dAM = 'PM';
            dHours -= 12;
          } else if (dHours === 0) {
            dHours = 12;
          }
      
          let dMins = d.getMinutes().toString();
  
          if(dMins == '0') {
            dMins = '00';
          }
      
          theDateTime = `${dDate}/${dMonth}/${dYear} ${dHours}:${dMins} ${dAM}`;
  
          return theDateTime;
    }
  