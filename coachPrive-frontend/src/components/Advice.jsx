import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
function Advice() {
  const {data , isLoading , isError} = useQuery({ queryKey: ["advice"] , queryFn : () => {
    return Axios.get("https://api.adviceslip.com/advice").then((res) => res.data)//fix it
  }})
    console.log(isError)
  return (
    <div>{data?.slip.advice}</div>
  )
}

export default Advice