const initialState = [
  {
    id: "1",
    createdAt: "2020-02-10T01:22:52.133Z",
    name:
      "The USB application is down, bypass the haptic circuit so we can calculate the SSL port!",
    done: false
  },
  {
    id: "2",
    createdAt: "2020-02-10T10:58:54.108Z",
    name:
      "The SMS driver is down, parse the online transmitter so we can program the RAM sensor!",
    done: true
  },
  {
    id: "3",
    createdAt: "2020-02-10T03:25:55.920Z",
    name:
      "You can't override the array without backing up the 1080p SMS capacitor!",
    done: true
  },
  {
    id: "4",
    createdAt: "2020-02-09T22:46:22.622Z",
    name:
      "You can't program the array without programming the virtual SMS hard drive!",
    done: true
  },
  {
    id: "5",
    createdAt: "2020-02-09T22:06:59.982Z",
    name:
      "Use the back-end HTTP panel, then you can generate the digital protocol!",
    done: true
  },
  {
    id: "6",
    createdAt: "2020-02-10T05:01:22.389Z",
    name:
      "If we input the microchip, we can get to the USB transmitter through the bluetooth PNG bandwidth!",
    done: false
  },
  {
    id: "7",
    createdAt: "2020-02-10T15:28:54.908Z",
    name:
      "I'll connect the online PNG transmitter, that should bandwidth the USB port!",
    done: true
  },
  {
    id: "8",
    createdAt: "2020-02-10T12:43:35.514Z",
    name: "We need to bypass the online PCI panel!",
    done: true
  },
  {
    id: "9",
    createdAt: "2020-02-10T03:43:28.656Z",
    name: "Try to copy the SSL system, maybe it will parse the digital panel!",
    done: true
  },
  {
    id: "10",
    createdAt: "2020-02-10T17:32:02.654Z",
    name:
      "Try to generate the TCP driver, maybe it will synthesize the redundant matrix!",
    done: false
  },
  {
    id: "11",
    createdAt: "2020-02-10T07:42:47.933Z",
    name:
      "If we back up the panel, we can get to the SQL pixel through the online JBOD driver!",
    done: false
  },
  {
    id: "12",
    createdAt: "2020-02-09T21:16:16.409Z",
    name:
      "The FTP bandwidth is down, transmit the primary matrix so we can transmit the JSON transmitter!",
    done: false
  },
  {
    id: "13",
    createdAt: "2020-02-10T17:29:08.616Z",
    name:
      "indexing the sensor won't do anything, we need to back up the solid state HDD matrix!",
    done: false
  },
  {
    id: "14",
    createdAt: "2020-02-10T05:45:04.059Z",
    name:
      "I'll quantify the 1080p CSS alarm, that should transmitter the EXE program!",
    done: true
  },
  {
    id: "15",
    createdAt: "2020-02-10T03:29:30.415Z",
    name:
      "You can't parse the hard drive without calculating the bluetooth CSS alarm!",
    done: true
  },
  {
    id: "16",
    createdAt: "2020-02-10T01:13:22.661Z",
    name:
      "Use the auxiliary IB capacitor, then you can hack the multi-byte capacitor!",
    done: false
  },
  {
    id: "17",
    createdAt: "2020-02-10T04:07:26.078Z",
    name:
      "Try to override the TCP circuit, maybe it will index the auxiliary transmitter!",
    done: true
  },
  {
    id: "18",
    createdAt: "2020-02-10T14:10:51.660Z",
    name:
      "I'll navigate the digital JSON sensor, that should interface the IB matrix!",
    done: false
  },
  {
    id: "19",
    createdAt: "2020-02-09T23:56:37.774Z",
    name:
      "Use the primary ADP firewall, then you can back up the multi-byte alarm!",
    done: true
  },
  {
    id: "20",
    createdAt: "2020-02-09T19:19:43.345Z",
    name:
      "If we compress the application, we can get to the SMS circuit through the digital PNG array!",
    done: true
  },
  {
    id: "21",
    createdAt: "2020-02-10T12:19:40.296Z",
    name:
      "Use the online PNG bandwidth, then you can synthesize the auxiliary pixel!",
    done: true
  },
  {
    id: "22",
    createdAt: "2020-02-10T15:43:40.991Z",
    name:
      "If we index the application, we can get to the RSS array through the haptic XML pixel!",
    done: false
  }
];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE_TODO":
      // const newState = [...state];
      // const index = newState.findIndex(todo => todo.id === action.payload);
      // newState.splice(index, 1);

      const newState = state.filter(todo => todo.id !== action.payload);
      return newState;

    case "TOGGLE_TODO":
      // const toggledState = [...state];
      // const index = toggledState.findIndex(todo => todo.id === action.payload);
      // toggledState[index].done = !toggledState[index].done;

      const toggledState = state.map(todo => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }

        return todo;
      });

      return toggledState;
    default:
      return state;
  }
  return state;
}

export default todoReducer;
