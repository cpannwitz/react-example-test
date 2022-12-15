import { render, screen, userEvent } from "./test-utils"
import ButtonComp from "./Button"

describe("ButtonComp", async () => {
  it("should render the input I give him", () => {
    render(<ButtonComp>Hello</ButtonComp>)
    expect(screen.queryByText("Hello")).toBeInTheDocument()
  })
})
