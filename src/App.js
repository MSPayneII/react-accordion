import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, SetQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> Questions And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion {...question} key={question.id} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
