import { useEffect, useRef } from 'react'
import 'spinkit/spinkit.min.css'
import '@/styles/component/loading.css'

const Component = () => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const completeDuration = 500
  const fadeDuration = 300

  useEffect(() => {
    const handleLoad = () => {
      const loading = loadingRef.current
      if (!loading) return

      setTimeout(() => {
        loading.style.opacity = '0'
        setTimeout(() => (loading.style.display = 'none'), fadeDuration)
      }, completeDuration)
    }

    window.addEventListener('load', handleLoad)

    if (document.readyState === 'complete') {
      handleLoad()
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      ref={loadingRef}
      id="loading"
      className="fixed inset-0 flex flex-col items-center justify-center z-2"
      style={{ transition: `opacity ${fadeDuration}ms ease` }}
    >
      <div className="el-box sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>

      <div className="el-text mt-10 tracking-widest">LOADING...</div>
    </div>
  )
}

export default Component
