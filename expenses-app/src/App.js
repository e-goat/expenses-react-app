import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2018, 1, 31),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 29494.67,
      date: new Date(2020, 8, 26),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 67.67,
      date: new Date(2022, 4, 22),
    },
    {
      id: "e4",
      title: "Car Maintenance",
      amount: 1000,
      date: new Date(2019, 3, 25),
    },
    {
      id: "e5",
      title: "HAVE FUN!",
      amount: "Infinity",
      date: new Date(2050, 3, 25),
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
