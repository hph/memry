import Datamap from 'datamaps';

import './styles.css';
import states from './states.json';


const colors = {
  background: '#1e1e1e',
  playerOne: '#00b0ff',
  playerTwo: '#cc4a4a',
};

const container = document.querySelector('#container');
const input = document.querySelector('input');

const map = new Datamap({
  element: container,
  scope: 'usa',
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false,
  },
  fills: {
    defaultFill: colors.background,
  },
});

let turn = 0;
function onEnter (event) {
  if (event.keyCode === 13) {
    const { value } = event.target;
    event.target.value = '';
    const state = states.find(state => state.name === value);
    map.updateChoropleth({
      [state.abbr]: turn % 2 === 0 ? colors.playerOne : colors.playerTwo,
    });
    turn += 1;
  }
}

input.addEventListener('keyup', onEnter);
