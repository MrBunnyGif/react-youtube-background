import { Button, Row, Col, Input } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <form>
            <Input
              placeholder="Cole o link do vídeo aqui"
            />
            <Button color="primary">Enviar</Button>
          </form>
        </Col>
      </Row>
    </div>  
  );
}

export default App
