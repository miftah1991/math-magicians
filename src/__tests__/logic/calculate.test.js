import calculate from '../../logic/calculate';

test('Check Calculate operations', () => {
  let obj = {
    total: '100',
    next: '5',
    operation: '+',
  };
  const button = 'AC';
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: null,
    operation: null,
  });
  expect(calculate(obj, '=')).toEqual({
    total: '105',
    next: null,
    operation: null,
  });
  expect(calculate(obj, '+/-')).toEqual({
    total: '100',
    next: '-5',
    operation: '+',
  });
  obj = {
    total: '20',
    next: '5',
    operation: '÷',
  };
  expect(calculate(obj, '=')).toEqual({
    total: '4',
    next: null,
    operation: null,
  });
});
