import React from "react";
import "./MainPage.css";

interface MyList {
  title: string;
}

const technologies: MyList[] = [
  {
    title: "React JS",
  },
  {
    title: "Redux Toolkit with Redux Thunk",
  },
  {
    title: "Typescript",
  },
  {
    title: "Custom reusable components",
  },
  {
    title: "Reusable helpers functions",
  },
  {
    title: "React-testin-library (in development)",
  },
];

const MainPage = () => {
  return (
    <div className="content">
      <h3>Hey this is simple React App where I try different technologies:</h3>
      <ul>
        {technologies.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <p>I don't do much styling to it, since it is not my primary priority</p>
    </div>
  );
};

export default MainPage;
