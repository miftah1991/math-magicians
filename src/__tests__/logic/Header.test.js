import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Header from '../../components/header';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Header /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
