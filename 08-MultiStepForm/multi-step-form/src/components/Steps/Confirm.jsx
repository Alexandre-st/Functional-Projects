import { useForm } from 'react-hook-form';
import { useAppState } from "../../contexts/state";
import { Button, Form, Section, SectionRow } from '../Forms';

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to ther server
  };

  const formData = [
    {
      title: "Personal info",
      url: "/",
      items: [
        { name: "First name", value: state.firstName, required: true },
        { name: "Last name", value: state.lastName },
        { name: "Email", value: state.email, required: true },
        {
          name: "Password",
          value: !!state.password ? "*****" : "",
          required: true,
        },
      ],
    },
    {
      title: "Education",
      url: "/education",
      items: [
        { name: "University", value: state.university },
        { name: "Degree", value: state.degree },
      ],
    },
    {
      title: "About",
      url: "/about",
      items: [{ name: "About me", value: state.about }],
    },
  ];

  const disableSubmit = formData.some((section) =>
    section.items.some((item) => item.required && !item.value)
  );
   
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1>Confirm</h1>
      {formData.map(({ title, url, items }) => (
        <Section title={title} url={url} key={title}>
          {/* To making require fields more visible */}
          {items.map(({ name, value, required }) => {
             const isMissingValue = required && !value;
             return (
              <SectionRow key={name}>
                <div className={isMissingValue ? "text-warning" : ""}>
                  {name}
                </div>
                <div>
                  {isMissingValue ? (
                    <span className="warning-sign">!!</span>
                  ) : (
                     value 
                  )}
                </div>
              </SectionRow>
             )
          })}
        </Section>
      )
      )}
      <div>
        <Button disabled={disableSubmit}>Submit</Button>
      </div>
    </Form>
  );
};