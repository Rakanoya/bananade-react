function Controls(props) {
  return (
    <section>
      <h2>Controls</h2>
      <button onClick={props.make}>Make Bananaade</button>
      <button onClick={props.sell}>Sell Bananaade</button>
    </section>
  );
}

export default Controls;
