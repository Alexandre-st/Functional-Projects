import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
// import arrow from '../assets/plan/desktop/icon-arrow.svg';

const Composition = () => {

  const [isOpen, setIsOpen] = useState(false);

  const selections = [
    {
      id: 0,
      name: 'Preferences',
      question: 'How do you drink your coffee?',
      options : [
        {
          name: 'Capsule',
          text: 'Compatible with Nespresso systems and similar brewers'
        },
        {
          name: 'Filter',
          text: 'For pour over or drip methods like Aeropress, Chemex, and V60'
        },
        {
          name: 'Espresso',
          text: 'Dense and finely ground beans for an intense, flavorful experience'
        }
      ]
    },
    {
      id: 1,
      name: 'Bean Type',
      question: 'What type of coffee?',
      options : [
        {
          name: 'Single Origin',
          text: 'Distinct, high quality coffee from a specific family-owned farm'
        },
        {
          name: 'Decaf',
          text: 'Just like regular coffee, except the caffeine has been removed'
        },
        {
          name: 'Blended',
          text: 'Combination of two or three dark roasted beans of organic coffees'
        }
      ]
    },
    {
      id: 2,
      name: 'Quantity',
      question: 'How much would you like?',
      options : [
        {
          name: '250g',
          text: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
        },
        {
          name: '500g',
          text: 'Perfect option for a couple. Yields about 40 delectable cups.'
        },
        {
          name: '1000g',
          text: 'Perfect for offices and events. Yields about 90 delightful cups.'
        }
      ]
    },
    {
      id: 3,
      name: 'Grind Options',
      question: 'Want us to grind them?',
      options : [
        {
          name: 'Wholebean',
          text: 'Best choice if you cherish the full sensory experience'
        },
        {
          name: 'Filter',
          text: 'For drip or pour-over coffee methods such as V60 or Aeropress'
        },
        {
          name: 'Cafetiére',
          text: 'Course ground beans specially suited for french press coffee'
        }
      ]
    },
    {
      id: 4,
      name: 'Deliveries',
      question: 'How often should we deliver?',
      options : [
        {
          name: 'Every Week',
          text: '$7.20 per shipment. Includes free first-class shipping.'
        },
        {
          name: 'Every 2 weeks',
          text: '$9.60 per shipment. Includes free priority shipping.'
        },
        {
          name: 'Every month',
          text: '$12.00 per shipment. Includes free priority shipping.'
        }
      ]
    },
  ];

  const openDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return ( 
    <section className="composition">
      <aside className="composition-left">
        <ul>
          {selections.map(selection => {
            return (
              <li key={uuidv4()}>
                <span>{`0${selection.id + 1}`}</span>
                {selection.name}
              </li>
            )
          })}
        </ul>
      </aside>
      <div className="composition-right">
        {selections.map(dropdown => {
          return (
            <div className="composition-dropdown" key={uuidv4()} id={dropdown.id}>
              <div className="composition-dropdown-title" onClick={openDropdown} >
                <h2>{dropdown.question}</h2>
                <p style={!isOpen ? {transform: 'rotate(0deg)'} : {}}>T</p>
                {/* <img 
                  src={arrow} alt="To show the selection" 
                  style={!isOpen ? {transform: 'rotate(0deg)'} : {}}
                /> */}
              </div>
              <div className="composition-dropdown-content">
                <ul>
                  <li>
                    <h4>{dropdown.options[0].name}</h4>
                    <p>{dropdown.options[0].text}</p>
                  </li>
                  <li>
                    <h4>{dropdown.options[1].name}</h4>
                    <p>{dropdown.options[1].text}</p>
                  </li>
                  <li>
                    <h4>{dropdown.options[2].name}</h4>
                    <p>{dropdown.options[2].text}</p>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
 
export default Composition;