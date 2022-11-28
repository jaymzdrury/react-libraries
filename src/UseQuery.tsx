import {useQuery} from 'react-query'

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    return res.json()
}

function Query() {
    const {data, status} = useQuery('person', fetchData)
    if(status === 'loading') return <div>Loading...</div>
    if(status === 'error') return <div>Error</div>
    return <div>{status === 'success' ? data.name : 'Empty'}</div>
}

export default Query