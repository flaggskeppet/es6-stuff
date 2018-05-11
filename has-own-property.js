var obj = {selection:"USER_SELECTED",
                items:{
                    "3AK3 HLHQ":false,
                    "3AK3 HKRT":false,
                    "2J2A SCP4":true,
                    "2J2A PQLN":true,
                    "2J2A SRYR":true
                }
            };
  

/*
Use hasOwnProperty to query a potentially undefined key for its value
*/
    function isItemSelected(id) {
   if (Object.prototype.hasOwnProperty.call(obj.items, id)) {
      return obj.items[id];
    }

    // It has never been saved before, for example a new item, default it to visible
    return true;
  }
  
console.log(isItemSelected("3AK3 HLHQ"))
console.log(isItemSelected("1111 HLHQ"))