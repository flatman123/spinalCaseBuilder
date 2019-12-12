function spinalCase(str) {
      let re = /(_\w)|([a-z][A-Z])|(\W\w)/g;
         
      let convert = str.replace(re,((match,g1,g2,g3,index,string) => {
             let splitChars = match.split('');
             
             g2 ? splitChars.splice(1,0,'-') :
                  splitChars.splice(0,1,'-');

             return splitChars.join('');    
      }));

      return convert.toLowerCase();
};
