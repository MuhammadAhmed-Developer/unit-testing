import Home from "@/app/page"
import { screen, render } from "@testing-library/react"
test("home page", () => {
    render(<Home />)
    expect(screen.getByText("Home component")).toBeInTheDocument()
})
test("home page1", () => {
    render(<Home />)
    expect(screen.getByText("Home component")).toBeInTheDocument()
})
test("home page2", () => {
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