import { createRoot } from "react-dom/client"
import { Suspense } from "react"
import { App } from "./App"
import { Underlay, Overlay } from "./DirtyFigmaExport"
import "./index.css"
import About from "./About"

createRoot(document.getElementById("root")).render(
  <>
    <div className="h-full ">
      <Underlay />
      <Suspense fallback={null}>
        <App />
      </Suspense>
      <About />
    </div>
  </>,
)
