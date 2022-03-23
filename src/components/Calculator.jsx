import React, { useState } from 'react';
// prettier-ignore
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
  const Calculator = () => {
    const [result, setResult] = useState({
      total: null,
      operation: null,
      next: null,
    });
  const clickHandler = (e) => {
    setResult(calculate(result, e.target.textContent));
  };
    return (
    <>
      <Container>
        <Row className="m-3">
          <Col>
            <div dir="ltr" className="w-100 p-2 result">
              {result.total}
              {result.operation}
              {result.next}
            </div>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>AC</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>+/-</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>%</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={clickHandler} >
            ÷
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>7</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>8</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>9</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={clickHandler}>
              x
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>4</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>5</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>6</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={clickHandler}>
              -
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>1</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>2</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>3</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={clickHandler}>
              +
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col xs={6}>
            <Button className="w-100 p-4" onClick={clickHandler}>0</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={clickHandler}>.</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={clickHandler}>
              =
            </Button>
          </Col>
        </Row>
      </Container>
      </>
    );
    };


export default Calculator;