import { selections } from './selections';
import Composition from './Composition';

const Selection = () => {
  return ( 
    <main>
      <div className="selections">
        {selections.map((selection, index) => {
          return <Composition selection={selection} key={index} />
        })}
      </div>
    </main>
  );
}
 
export default Selection;