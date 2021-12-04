import { styled } from '@mui/system';
import PokemonList from './pages/PokemonList';

const StyledApp = styled('div', {
  name: 'StyledApp',
  slot: 'Wrapper'
})({
  backgroundImage: `url("/assets/bg-light-20.png")`,
  backgroundSize: 'cover',
  margin: '0',
  padding: '0',
  minHeight: '100vh',
  minWidth: '100vw'
})

const StyledLogo = styled('div')`
  display: flex;
  justify-content: center;
`

const StyledImg = styled('img')`
  height: 200px;
`

const App = () => {
  return (
    <StyledApp>
      <StyledLogo>
        <StyledImg src="/assets/logo.png" />
      </StyledLogo>

      <PokemonList />
    </StyledApp>
  );
}

export default App;
