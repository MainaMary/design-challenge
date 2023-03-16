import AllRoutes from "./routes/AllRoutes"
import { Suspense } from "react"


function App() {
  return (
   <Suspense fallback="Loading..">
    <div className="max-[1200px] m-auto">
    <AllRoutes/>
    </div>
   
   </Suspense>
  )
}

export default App
