import "./App.css";
import BharatName from "./Component/Bharat Clock/BharatName";
import BharatSlogen from "./Component/Bharat Clock/BharatSlogen";
import CurrentTime from "./Component/Bharat Clock/CurrentTime";
import CalcButton from "./Component/Calculator/CalcButton";
import CalcInput from "./Component/Calculator/CalcInput";
import CalcName from "./Component/Calculator/CalcName";
import Container from "./Component/Calculator/Container";
import ErrorMassage from "./Component/Healthy food component/ErrorMassage";
import HealthyList from "./Component/Healthy food component/HealthyList";
import HealthyfoodName from "./Component/Healthy food component/HealthyfoodName";
import AppName from "./Component/to do component/AppName";
import InputContainer from "./Component/to do component/InputContainer";
import TodoItem from "./Component/to do component/TodoItem";

function App() {
  let todoItem = [
    {
      name: "Buy Milk",
      date: "10/02/2024",
    },
    {
      name: "Go To School",
      date: "10/02/2024",
    },
    {
      name: "Go To Market",
      date: "10/02/2024",
    },
    {
      name: "Go To Station",
      date: "10/02/2024",
    },
  ];

  let foodItem = [
    "Dal",
    "Milk",
    "Salad",
    "Green Vegetable",
    "Ghee",
    "Bread",
    "Sabji",
    "Butter",
  ];

  return (
    <>
      <center className="TodoContainer">
        <AppName />
        <InputContainer />
        <TodoItem items={todoItem} />
      </center>

      <div className="BharatContainer">
        <BharatName />
        <BharatSlogen />
        <CurrentTime />
      </div>

      <div className="HealthyContainer">
        <Container>
          <HealthyfoodName />
          <ErrorMassage items={foodItem} />
          <HealthyList items={foodItem} />
        </Container>
      </div>

      <div className="CalculatorContainer">
        <CalcName />
        <Container>
          <CalcInput />
          <CalcButton />
        </Container>
      </div>
    </>
  );
}

export default App;
