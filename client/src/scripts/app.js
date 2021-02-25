import Engine from './library/Engine';
import display from './components/display';

const engine = new Engine(
  () => {},
  () => console.log('running')
);
