
import Card  from "./cards.tsx"

import { Route, Routes } from "react-router-dom";
import Details from "./details.tsx";

function App() {


  return (
     <Routes>

        <Route path="/" element={<Card></Card>}/>
        <Route path="/de" element={<Details />} />
    
    </Routes>
   
  )
}

export default App
