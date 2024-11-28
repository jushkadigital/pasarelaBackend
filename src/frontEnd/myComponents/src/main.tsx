import { StrictMode } from 'react'
import { createRoot, } from 'react-dom/client'
import PriceMultiplier from "./components/PriceMultiplier"


const ele = document.getElementById('react-price-widget')!

 document.addEventListener('DOMContentLoaded', function() {
    createRoot(ele).render(
  // <StrictMode>
    <PriceMultiplier 
        name={ele.dataset.name!}
        initialValue={(ele.dataset.initialValue) || "0"}
    />
  // </StrictMode>,
  )
    });

