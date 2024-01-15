import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-hook-form'
import {AddToArr} from './testSlice'

const AddTest = () => {
    let dispatch = useDispatch();
    let { register, handleSubmit } = useForm();
    const save = (data) => {
        dispatch(AddToArr(data))
    }
    return(<>
<form onSubmit={handleSubmit(save)}>
    <label>מספר מבחן: </label>
    <input {...register("testId")}/>
    <label>נושא המבחן: </label>
    <input {...register("topic")}/>
    <input type="submit"></input>
</form>
    </>)
}
export default AddTest;
