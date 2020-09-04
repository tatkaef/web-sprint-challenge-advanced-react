import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const checkout = getByText("Checkout Form");
  expect(checkout).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  const { getByLabelText } = render(<CheckoutForm />);

  const firstNameLbl = screen.getByLabelText("First Name:");
  const lastNameLbl = screen.getByLabelText("Last Name:");
  const addressLbl = screen.getByLabelText(/Address:/i);
  const cityeLbl = screen.getByLabelText(/City:/i);
  const stateeLbl = screen.getByLabelText(/State:/i);
  const zipLbl = screen.getByLabelText(/Zip:/i);

  fireEvent.change(firstNameLbl, { target: { value: "Alisa" } });
  fireEvent.change(lastNameLbl, { target: { value: "Ivanova" } });
  fireEvent.change(addressLbl, { target: { value: "134 Fair ave" } });
  fireEvent.change(cityeLbl, { target: { value: "Sun" } });
  fireEvent.change(stateeLbl, { target: { value: "CA" } });
  fireEvent.change(zipLbl, { target: { value: "12345" } });

  const submitBtn = screen.getByRole("button");
  fireEvent.click(submitBtn);

  expect(await screen.findByText(/Alisa/i)).toBeInTheDocument();
  expect(await screen.findByText(/Ivanova/i)).toBeInTheDocument();
});
