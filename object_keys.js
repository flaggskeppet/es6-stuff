var mouse = {
    '3AJZ YE96': {
      device: {
        deviceLabel: '3AJZ YE96',
        area: 'Dos',
        gui: {
          label: 'MOUSE',
          __typename: 'Gui'
        },
        __typename: 'Device'
      },
      type: 'Mouse',
      detections: [],
      __typename: 'Mouse'
    },
    '3AJZ YDZV': {
      device: {
        deviceLabel: '3AJZ YDZV',
        area: 'Uno',
        gui: {
          label: 'MOUSE',
          __typename: 'Gui'
        },
        __typename: 'Device'
      },
      type: 'Mouse',
      detections: [],
      __typename: 'Mouse'
    },
    '3AJZ YGRG': {
      device: {
        deviceLabel: '3AJZ YGRG',
        area: 'Tres 3',
        gui: {
          label: 'MOUSE',
          __typename: 'Gui'
        },
        __typename: 'Device'
      },
      type: 'Mouse',
      detections: [],
      __typename: 'Mouse'
    }
}

// Iterate every key in the array, extract the name as key and destruct & assign all other props

var hrs = Object.keys(mouse).map(c => <hr key={c} {...mouse[c]} />);
console.log(hrs)
ReactDOM.render(<React.Fragment>{hrs}</React.Fragment>, mountNode)
