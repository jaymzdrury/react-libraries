import {FieldValues, useForm} from 'react-hook-form'

function UseHook() {
  const {register, reset, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors['name'] ? <span>Name Required</span> : undefined}
      <label>Name</label>
      <input type='text' {...register('name',{required: true})} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UseHook