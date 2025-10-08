import Code from "./code";

function App() {
  const username = "sumit gujariya";

  return (
    // <div> we called fragment in react with the help you write many elements in this.
    // you also write like this - <> </> It's still valid in react.
    <>
      <Code />
      {/* We called this {} expresion(evaluated expresion) Here we not write the js we write the final outcome of the js */}
      <h1>code is not ready {username}</h1>
      <h2>code is not working</h2>
    </>
  );
}

export default App;
