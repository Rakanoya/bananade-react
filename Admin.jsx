function Admin(props) {
  return (
    <section>
      <h2>Admin</h2>
      <ul>
        <li>Price per Glass: $2.00</li>
        <li>Glasses of Bananaade: {props.fullGlasses}</li>
        <li>Income: ${props.income.toFixed(2)}</li>
      </ul>
    </section>
  );
}

export default Admin;
