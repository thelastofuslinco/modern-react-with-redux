import { useState, useCallback } from 'react'
import { useAppDispatch } from './useAppDispatch'

export function useThunk<
  T extends (value: any) => any,
  Arg extends Parameters<T>[0]
>(thunk: T): [(arg: Arg) => void, boolean, Error | null] {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useAppDispatch()

  const runThunk = useCallback(
    (arg: Arg) => {
      setLoading(true)
      dispatch(thunk(arg))
        .unwrap()
        .catch(setError)
        .finally(() => setLoading(false))
    },
    [dispatch, thunk]
  )

  return [runThunk, loading, error]
}
