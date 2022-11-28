import { useState } from 'react'

type Object = {name: string}
const updatedUser = {name: 'James'}

function WhyDidYouRender() {
  const [user, userSet] = useState<Object>(updatedUser)
  const updateUser = () => userSet(updatedUser)
  return <div>{user.name}<button onClick={updateUser}>Update</button></div>
}
WhyDidYouRender.whyDidYouRender = true

export default WhyDidYouRender