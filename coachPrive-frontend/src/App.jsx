import {  createBrowserRouter , RouterProvider ,BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DesktopLayout from './layout/DesktopLayout.jsx'
import Main from './pages/Main.jsx'
import Login from './pages/Login.jsx'
import Registration from "./pages/Registration.jsx"
import {createContext , useState , useEffect} from 'react'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
export const AppContext =  createContext()

function App() {
  const client = new QueryClient({
    defaultOptions:{
    queries : {
      refetchOnWindowFocus : false,
    }
  }})


 const [Data,setData] = useState(null)
  const fetchData = () => {
    fetch("http://localhost:3000/coach").then((res) => (res.json())).then((data) => (setData(data)))
  }
  useEffect (fetchData , [])
  //this way is to teach of explain to same one as begginner but the useQuery is the recommended way from react

  const [Search , setSearch] = useState("")
   const [categories,setCategories] = useState ([
          { name: 'All', state: 'selected' },
          { name: 'Kick boxing', state: 'unselected' },
          { name: 'Gym', state: 'unselected' },
          { name: 'Box anglese', state: 'unselected' },
      ]);
 
      return (
  <div>
    <QueryClientProvider client={client}>
          <AppContext.Provider value={{Search , setSearch, Data,setData ,categories,setCategories}}>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<DesktopLayout/>}>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='/Main' element={<Main/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='Registration' element={<Registration/>}/>
                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                  </Routes>
                </BrowserRouter>
        </AppContext.Provider>
  </QueryClientProvider>
  </div>
 )
}

export default App