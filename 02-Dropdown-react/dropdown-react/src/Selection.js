import { selections } from './selections';
import Composition from './Composition';

const Selection = () => {
  return ( 
    <main>
      <div className="selections">
        {selections.map((selection) => {
          return <Composition selection={selection} key={selection.id} />
        })}
      </div>
    </main>
  );
}
 
export default Selection;