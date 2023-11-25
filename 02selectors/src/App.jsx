import React from 'react'
import { useState } from 'react'
import './App.css'


function App() {

  const[selected, setSelected] = useState([]);

 

  let countries = [
    {id:1, name:"India" },
    {id:2, name:"Nepal" },
    {id:3, name:"Pakistan"},
    {id:4, name:"USA"}
  ];

  const allSelected = selected.length === countries.length;


  return(
    <div className=' p-8 dark:bg-slate-800 text-white  w-screen:100vw h-screen justify-center flex-auto
          items-center'>
            <label >
              <input type="checkbox"  
              checked={allSelected}
              onChange={()=>{
                if (allSelected) {
                  setSelected([])
                } else {
                  setSelected(countries)
                }
              }} />
              {" "}SelectAll
            </label>

            <ul>
              {countries.map((each)=> {
                const ischecked = selected.find(({id})=> each.id === id) !== undefined;
              return (
              <li key={each.id}>
                <label >
                  <input type="checkbox"
                  checked={ischecked}
                   onChange={()=>{
                    if (ischecked) {
                      setSelected(selected.filter(({id})=> each.id !== id));
                    }
                  }}
                   />
                  {" "}
                  {each.name}
                </label>
              </li> )
                  })}
            </ul>

    </div>
  )
}


// function App() {

//   return (
//     <>
//       <div className=' p-8 dark:bg-slate-800 text-white  w-screen:100vw h-screen justify-center flex-auto
//       items-center'>
//       <h1 className='text-4xl '>Selectors</h1>
//             <div className='text-3xl'>

//             <input type="checkbox"  name="" id="all"  className=" w-5 h-5" />
//               <label htmlFor="all"> SelectAll</label>
              
//                   <div className='text-2xl m-2'>
//                   <li>
//                   <input type="checkbox"  name="" id="India" className="list w-5 h-5" />
//                   <label htmlFor="India"> India</label>
//                   </li>
//                   <li>
//                   <input type="checkbox"  name="" id="Nepal" className="list w-5 h-5" />
//                   <label htmlFor="Nepal"> Nepal</label>
//                   </li>
//                   <li>
//                   <input type="checkbox"  name="" id="Pakistan" className="list w-5 h-5" />
//                   <label htmlFor="Pakistan"> Pakistan</label>
//                   </li>
//                   <li>
//                   <input type="checkbox"  name="" id="USA" className="list w-5 h-5" />
//                   <label htmlFor="USA"> USA</label>
//                   </li>
//                   </div>
//             </div>
//       </div>
//     </>
//   )
// }

export default App
