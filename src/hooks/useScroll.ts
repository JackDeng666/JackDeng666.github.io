import { useEffect, useState } from 'react'

export function useScroll() {
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const ele = document.documentElement
      setScrolled(ele.scrollTop / (ele.scrollHeight - ele.clientHeight))
    }
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    scrolled
  }
}
