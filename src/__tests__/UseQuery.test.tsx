import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export function useTestHook(){
  return useQuery({queryKey: ['testHook'], queryFn: () => 'Test'})
}

const client = new QueryClient()
const wrapper = ({children}:{children: ReactNode}) => (
  <QueryClientProvider client={client}>
    {children}
  </QueryClientProvider>
)

test('useQuery fetches', async () => {
  const {result} = renderHook(() => useTestHook(),{wrapper})
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toBeDefined()
})

