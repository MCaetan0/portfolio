import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { FocusProfile } from '../types'

type FocusContextValue = {
  profile: FocusProfile
}

const FocusContext = createContext<FocusContextValue>({ profile: 'fullstack' })

export function FocusProvider({
  profile,
  children,
}: {
  profile: FocusProfile
  children: ReactNode
}) {
  const value = useMemo(() => ({ profile }), [profile])
  return <FocusContext.Provider value={value}>{children}</FocusContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- hook colocated with provider
export function useFocus(): FocusContextValue {
  return useContext(FocusContext)
}
