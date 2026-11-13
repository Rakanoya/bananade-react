import { useState } from 'react';
import './App.css';
import Inventory from './Inventory.jsx';
import Admin from './Admin.jsx';
import Controls from './Controls.jsx';

function App() {
  // Lifted Inventory States
  const [bananas, setBananas] = useState({ name: "Bananas", value: 20, minimum: 6 });
  const [water, setWater] = useState({ name: "Water", value: 2, minimum: 1 });
  const [sugar, setSugar] = useState({ name: "Sugar", value: 4, minimum: 1 });
  const [emptyGlasses, setEmptyGlasses] = useState({ name: "Empty Glasses", value: 10, minimum: 8 });

  // Lifted Admin States
  const [fullGlasses, setFullGlasses] = useState(0);
  const [income, setIncome] = useState(0);
  const price = 2.00;

  function makeBananaade() {
    if (
      bananas.value >= 6 &&
      water.value >= 1 &&
      sugar.value >= 1 &&
      emptyGlasses.value >= 8
    ) {
      setBananas({ ...bananas, value: bananas.value - 6 });
      setWater({ ...water, value: water.value - 1 });
      setSugar({ ...sugar, value: sugar.value - 1 });
      setEmptyGlasses({ ...emptyGlasses, value: emptyGlasses.value - 8 });
      setFullGlasses(fullGlasses + 8);
      return true;
    }
    return false;
  }

  function sellBananaade() {
    if (fullGlasses >= 1) {
      setFullGlasses(fullGlasses - 1);
      setIncome(income + price);
    } else {
      // If out of full glasses, try to make a batch (8 glasses) and immediately sell 1
      if (
        bananas.value >= 6 &&
        water.value >= 1 &&
        sugar.value >= 1 &&
        emptyGlasses.value >= 8
      ) {
        setBananas({ ...bananas, value: bananas.value - 6 });
        setWater({ ...water, value: water.value - 1 });
        setSugar({ ...sugar, value: sugar.value - 1 });
        setEmptyGlasses({ ...emptyGlasses, value: emptyGlasses.value - 8 });
        // +8 made minus 1 sold = +7 net glasses
        setFullGlasses(fullGlasses + 7);
        setIncome(income + price);
      }
    }
  }

  return (
    <>
      <Inventory
        bananas={bananas}
        water={water}
        sugar={sugar}
        emptyGlasses={emptyGlasses}
      />
      <Admin fullGlasses={fullGlasses} income={income} />
      <Controls make={makeBananaade} sell={sellBananaade} />
    </>
  );
}

export default App;
