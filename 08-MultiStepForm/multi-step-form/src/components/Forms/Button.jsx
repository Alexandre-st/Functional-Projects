import { forwardRef, useImperativeHandle, useRef } from "react";

export const Button = forwardRef(({ children, variant = "primary", ...props }, ref) => {
  const buttonRef = useRef();

  // useImperativeHandle allows calling the ref target's methods outside its component (e.g. from parent components).
  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef.current.click();
    },
  }));

  return (
    <button className={`btn btn-${variant}`} {...props} ref={buttonRef}>
      {children}
    </button>
  );
});
