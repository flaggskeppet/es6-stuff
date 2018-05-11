const state = {
    ABC: {
      deviceLabel: 'ABC',
      foo: 'bar',
    },
    DEF: {
      deviceLabel: 'DEF',
      food: 'taco',
    },
  };

 /*
Grab the object for every key in state then use the devicelabel as key and re-assign its value. Then 
add the propert viewed: true
The ...prev destructuring is not really needed since we re-assign the object at the current key.
*/
Object.values(state).reduce((prev, curr) => ({
    ...prev,
    [curr.deviceLabel]: { ...state[curr.deviceLabel], viewed: true, },
  }), {});

  /*
  State is now:
    {
    ABC: {
      deviceLabel: 'ABC',
      foo: 'bar',
      viewed: true,
    },
    DEF: {
      deviceLabel: 'DEF',
      food: 'taco',
      viewed: true,
    },
  };
  */ 