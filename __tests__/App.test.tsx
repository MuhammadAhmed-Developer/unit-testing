import Home from "@/app/page"
import Users from "@/components/User"
import { screen, render } from "@testing-library/react"
import renderer from "react-test-renderer"
test("home page", () => {
    render(<Home />)
    expect(screen.getByText("Home component")).toBeInTheDocument()
})


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