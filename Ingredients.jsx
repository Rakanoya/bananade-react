function Ingredient(props) {
  const rowClass = props.value < props.minimum ? "low" : "ok";

  return (
    <tr className={rowClass}>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
}

export default Ingredient;
