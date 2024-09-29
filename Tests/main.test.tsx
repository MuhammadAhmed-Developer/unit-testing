import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

test("Main test case", () => {
    render(<Home />);
    const text = screen.getByText(/main/i) //not case senstivity because of this syntax /name/i
    const title = screen.getByTitle("logo")
    expect(text).toBeInTheDocument()
    expect(title).toBeInTheDocument()
})


test("Test input", () => {
    render(<Home />)
    let checkinput = screen.getByRole("textbox") // textbox fotr input its predefined
    expect(checkinput).toBeInTheDocument()
    expect(checkinput).toHaveAttribute("name", "name")
    expect(checkinput).toHaveAttribute("value")
})


// how to run specific test files
// what is watch mode?
// how to run the failed test case
// how to run call test cases
// how to quit watch mode
// how to filter test files for run
// how to filter test cases


// Sunday
// Test Grouping With Describe
// - What is Describe?
// - How to make test cases Group?
// - Run test case with Describe
// - Skip in Describe
// - Only in Describe
// - Nested Describe


describe("UI test Group ", () => {
    test("group test1", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
    test("group test2", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
    test("group test3", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
    describe("nested describe", () => {
        test("nested describe group test1", () => {
            render(<Home />)
            let checkinput = screen.getByRole("textbox")
            expect(checkinput).toBeInTheDocument()
        })
    })
})

describe("API testing Group ", () => {
    test("API group test1", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
    test("API group test2", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
    test("Api group test3", () => {
        render(<Home />)
        let checkinput = screen.getByRole("textbox")
        expect(checkinput).toBeInTheDocument()
    })
})


