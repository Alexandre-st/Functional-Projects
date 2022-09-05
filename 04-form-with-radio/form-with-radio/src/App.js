import { Formik, Form } from 'formik';
import Composition from "./components/Composition";
import { selections } from './data/selections';

const App = () => {
  return (
    <Formik
      initialValues={{
        preferences: '',
        type: '',
        quantity: '',
        options: '',
        deliveries: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
    {() => (
      <Form>
        {selections.map((selection) => <Composition selection={selection} key={selection.id} />)}
        <button type="submit">Submit</button>
      </Form>
    )}
    </Formik>
  );
}
 
export default App;