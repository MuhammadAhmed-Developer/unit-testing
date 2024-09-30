import Home from "@/app/page"
import Users from "@/components/User"
import { handleOtherMethod } from "@/utils/helper"
import { screen, render, fireEvent } from "@testing-library/react"
import renderer from "react-test-renderer"
// test("home page", () => {
//     render(<Home />)
//     expect(screen.getByText("Home component")).toBeInTheDocument()
// })


// Before and after hooks in jest
// beforeAll and beforeEach
//  afterAll and afterEach

beforeAll(() => {
    console.log("Before all tests")
})

afterEach(() => {
    console.log("Before each test")
})


// what is snapshot testing
// when this is usefull
// how to update snapshots

// test("snapshots for home screen", () => {
//     const container = render(<Home />)
//     expect(container).toMatchSnapshot()
// })


// Important points for testing
//  what things we shout not tests
// important points


// what we should test
//  1- Testing component rendering
//  2- UI element that we write
//  3- Functions which we write
//  4- API testing
//  5- event testing
//  6- props and states
//  7- UI condition testing | UI state tasting

//  Avoid testing for
//  1- external UI library Code
//  2- No need to test deafult function of js and react
//  3- sometime we should mock function rathen then testing it in details

//  Do not write snapshots in the starting of project
//  Run test case after completing your functionality
//  Make a standard for code coverage


// Class component method testing
//  react test render

//  React test render
test("class component testing", () => {
    const componentData: any = renderer.create(<Users />).getInstance()
    // console.log('componentData', componentData)
    expect(componentData.getUserList()).toMatch("user list")
})


// Functional component method testing
//  1-Discuss possible case for method testing
//  2- Define the button, click event and method
//  3- Test method with event
//  4- Test method without event 


// test("method testing case 1", () => {
//     render(<Home />)
//     const btn = screen.getByTestId("btn1")
//     fireEvent.click(btn)
//     expect(screen.getByText("Hello")).toBeInTheDocument();
// })

// test("method 2", () => {
//     expect(handleOtherMethod()).toMatch("hi")
// })


// RTL Query (react testing library)
//  1- what is RTL Query
//  2- Why need RTL Query?
//  3- Steps in testing UI
//  4- How RTL Query finds elements?
//  5- Type of RTL Queries.

//  Find Single Element
//    getBy
//    queryBy
//    findBy
// Find Multiple elements
//    getAllBy
//    queryAllBy
//     findAllBy


//  getByRole Query

// what is role in getByRole?
// What is semantic elements?
//  Button , heading tags and table are semantic element
//  div and span are not semantic elements
// Test textBox with getByRole
//  text box present
//  textbox value
//  text box disabled or not


// test("get by role", () => {
//     render(<Home />)
//     const inputField = screen.getByRole("textbox")
//     expect(inputField).toBeInTheDocument()
//     expect(inputField).toHaveValue("hi")
//     expect(inputField).toBeDisabled()
// })


// MUltiple element with role custom role
//  multiple element with the same role issue
//  multiple buttons with role
//  multiple input box with role
//  custom role


// test("getbyRole", () => {
//     render(<Home />)
//     const btn1 = screen.getByRole("button", { name: "click 1" })
//     const input1 = screen.getByRole("textbox", { name: "username" })
//     const div = screen.getByRole("div")
//     expect(btn1).toBeInTheDocument()
//     expect(input1).toBeInTheDocument()
//     expect(div).toBeInTheDocument()
// })

// getallbyrole

test("get all by role", () => {
    render(<Home />)
    const buttons = screen.getAllByRole("button")
    const options = screen.getAllByRole("option")
    for (let i = 0; i < buttons.length; i++) {
        expect(buttons[i]).toBeInTheDocument()
    }

    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }

})