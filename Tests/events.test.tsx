// * Test onChange Event with input Box
// Make Input box in the component
// Define state and use with on change event
// import component in test file
// Write code for test case

import { fireEvent, render, screen } from "@testing-library/react"
import Home from "@/app/page";
import InputComponent from "@/components/Input";

test("OnChnage Event Testing", () => {
    render(<InputComponent />)
    let input: any = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("atest")
})


// Test Click Event with button
// Make button and state in the component
// Update state with button click event
// write code for test click event

test("Click Event Testing", () => {
    render(<InputComponent />)
    let button: any = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Updated Data")).toBeInTheDocument()
})