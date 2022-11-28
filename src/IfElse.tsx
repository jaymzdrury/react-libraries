import {If, Else, Then, Switch, Case, Default, Fallback} from 'react-if'

const num = 9
const SwitchCase = () => {
  return (
    <div>
      <Switch>
        <Case condition={typeof num === 'string'}>9</Case>
        <Case condition={typeof num === 'number'}>{num.toString()}</Case>
        <Default>9</Default>
      </Switch>
    </div>
  )
}

const IfThenElseFallback = () => {
  return (
    <If condition={true}>
      <Then><div>True</div></Then>
      <Else><div>False</div></Else>
      <Fallback><div>Loading...</div></Fallback>
    </If>
  )
}

function IfElse() {
  return <><SwitchCase /><IfThenElseFallback /></>
}

export default IfElse