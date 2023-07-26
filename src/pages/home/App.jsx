import { useState } from 'react';
import {List} from '../../components/historico/historico.jsx';
import './App.css';
import { Container, Row, Navbar, Form, Button } from 'react-bootstrap';

function App() {

  const [name1,setName1] = useState("");
  const [name2,setName2] = useState("");
  const [opacity,setOpacity] = useState(0);
  const [percent,setPercent] = useState(0);
  const [historico,setHistorico] = useState([]);
  const [isDisabled,setIsDisabled] = useState(false);

  function CalculoDoAmor(){ 
    // determinar percentagem
    let randomNum = Math.floor(Math.random() * 101);
    let num = 0;
    
    // animação
    const addNum = setInterval( () => {
      num != randomNum ? num++ : clearInterval(addNum);
      setPercent(num + '%');
    } , 100);
    
    // definindo constantes globais
    setOpacity(1);
    setIsDisabled(true);
    
  }
  
  function ClearHeart(){

    // gerando card da lista de historico
    const newHistorico = {
      firstName: name1,
      percentNum: percent,
      secondName: name2,
    }
    
    setHistorico( prevHist => [...prevHist , newHistorico] );
    let num = parseFloat(percent);

    // animação
    const addNum = setInterval( () => {
      num != 0 ? num-- : clearInterval(addNum);
      setPercent(num + '%');
    } , 50);
    
    // redefinindo variaveis globais
    setOpacity(0);
    setIsDisabled(false);

  }
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#">Calculadora do amor</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="contain-geral">
        <Row className="justify-content-md-center contain-app">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="300px" height="300px" viewBox="0 0 1280.000000 1189.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
            fill="#FF1493" stroke="none">
              <path d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
              -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
              634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
              -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
              408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
              196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
              -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
              -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
              610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
            </g>
          </svg>
          <h2 style={{opacity: opacity}} className="percentagem">{percent}</h2>
          <h3 style={{opacity: opacity}} className="name">{name1}</h3>
          <h3 style={{opacity: opacity}} className="name">{name2}</h3>
          <Form>
            <br/>
            <Form.Control 
              onChange={(e) => {setName1(e.target.value)}}
              disabled={isDisabled}
              size="lg" 
              type="text" 
              placeholder="Pessoa 1"
              bg="dark"
              data-bs-theme="dark"
              required
            />
            <h3 id="sinal">+</h3>
            <Form.Control 
              onChange={(e) => {setName2(e.target.value)}}
              disabled={isDisabled}
              size="lg" 
              type="text" 
              placeholder="Pessoa 1"
              bg="dark"
              data-bs-theme="dark"
              required
            />
            <div id="buttons">
              <Button variant="primary" size="lg" onClick={CalculoDoAmor} disabled={isDisabled}> 
                estimar amor
              </Button>
              <Button variant="primary" size="lg" onClick={ClearHeart}> 
                novas pessoas
              </Button>
            </div>

          </Form>

          {
            historico.map((registro) => (
              <List
                kei= {registro.percentNum} 
                name1= {registro.firstName}
                percent={registro.percentNum}
                name2={registro.secondName}
              />
            ))
          }
          
        </Row>
      </Container>
    </div>
  )

}

export default App
