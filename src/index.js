import {useState, useEffect} from 'react'

const useViewportVisibility = () => {
  const [visibilityState, setVisibility] =
    useState(document.visibilityState)

  const handleVisibilityChange = () => {
    setVisibility(document.visibilityState)
  }

  useEffect(() => {
    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
      true
    )
    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
    }
  }, [])

  return visibilityState
}

export default useViewportVisibility
