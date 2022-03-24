import operate from '../../logic/operate';

describe('the result should match', () => {
  test('test addition', () => {
    const object = {
      numberOne: 4,
      numberTwo: 6,
      operation: '+',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('10');
  });

  test('test subtract', () => {
    const object = {
      numberOne: 6,
      numberTwo: 4,
      operation: '-',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('2');
  });

  test('test multiply', () => {
    const object = {
      numberOne: 4,
      numberTwo: 2,
      operation: 'x',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('8');
  });

  test('test mode', () => {
    const object = {
      numberOne: 4,
      numberTwo: 2,
      operation: '%',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('0');
  });

  test('division', () => {
    const object = {
      numberOne: 4,
      numberTwo: 2,
      operation: '÷',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('2');
  });
});