import Home from "@/app/page"
import { screen, render } from "@testing-library/react"
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

test("snapshots for home screen", () => {
    const container = render(<Home />)
    expect(container).toMatchSnapshot()
})