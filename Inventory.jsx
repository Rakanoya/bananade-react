import Ingredient from './Ingredient.jsx';

function Inventory(props) {
  return (
    <section>
      <h2>Ingredients</h2>
      <table>
        <tbody>
          <Ingredient
            name={props.bananas.name}
            value={props.bananas.value}
            minimum={props.bananas.minimum}
          />
          <Ingredient
            name={props.water.name}
            value={props.water.value}
            minimum={props.water.minimum}
          />
          <Ingredient
            name={props.sugar.name}
            value={props.sugar.value}
            minimum={props.sugar.minimum}
          />
          <Ingredient
            name={props.emptyGlasses.name}
            value={props.emptyGlasses.value}
            minimum={props.emptyGlasses.minimum}
          />
        </tbody>
      </table>
    </section>
  );
}

export default Inventory;
