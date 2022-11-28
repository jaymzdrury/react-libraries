import UseQuery from "./UseQuery";
import UseForm from './UseForm'
import {QueryClientProvider, QueryClient} from 'react-query'
import IfElse from "./IfElse";
import I18 from './118'
import WhyDidYouRender from "./WhyDidYouRender";
const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <UseQuery />
      <UseForm />
      <IfElse />
      <WhyDidYouRender />
      <I18 />
    </QueryClientProvider>)
}

export default App;
