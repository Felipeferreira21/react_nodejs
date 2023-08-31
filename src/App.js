import Header from './componentes/Header';
import styled from 'styled-components';

const AppContanier = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
    return (
    <AppContanier>  
      <Header/>
    </AppContanier>
  );
}

export default App;
