import renderer from "react-test-renderer";
import Calculator from "../components/Calculator";

it("check calculator render correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});