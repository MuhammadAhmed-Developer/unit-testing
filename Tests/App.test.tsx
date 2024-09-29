import Home from "@/app/page"
import { screen, render } from "@testing-library/react"
test("home page", () => {
    render(<Home />)
    expect(screen.getByText("Home component")).toBeInTheDocument()
})