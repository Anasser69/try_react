import React from 'react'
import ReactDOM from 'react-dom/client'
import Api from './components/Api';


export default function App(){
 
    

    return(
        <div>
<Api />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />); 