import OneTest from './OneTest'
import {useSelector} from 'react-redux'


const TestList=()=>{
    let arr=useSelector(state=>state.test.arr)
    return(<><ul>
{arr.map(item=>{return<li key={item._id}><OneTest one={item}/></li>})}
    </ul></>)
}
export default TestList;