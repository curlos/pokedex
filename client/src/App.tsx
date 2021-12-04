import { styled } from '@mui/system';
import PokemonList from './pages/PokemonList';

const StyledApp = styled('div', {
  name: 'StyledApp',
  slot: 'Wrapper'
})({
  backgroundImage: `url("/assets/bg-light-20.png")`,
  backgroundSize: 'cover',
  margin: '0',
  padding: '0'
})


const App = () => {
  return (
    <StyledApp>
      <img src="https://archives.bulbagarden.net/media/upload/8/8b/20th_Anniversary_logo.png" />
      <PokemonList />
    </StyledApp>
  );
}

export default App;
