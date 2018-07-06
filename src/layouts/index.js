import React from "react"
import { rhythm } from "../utils/typography"

const MainLayout = ({ children, location }) => (
  <div
    css={{
      maxWidth: 640,
      margin: `0 auto`,
      padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
    }}
  >
    {children}
  </div>
)

export default MainLayout
