import { useEffect, useRef } from 'react'
import 'tocbot/dist/tocbot.css'
import '@/styles/component/toc.css'

const Component = () => {
  const tocbotRef = useRef<any>(null)

  useEffect(() => {
    import('tocbot').then((tocbot) => {
      tocbotRef.current = tocbot.default || tocbot

      tocbotRef.current.init({
        tocSelector: '.toc',
        contentSelector: 'article',
        headingSelector: 'h2, h3, h4, h5, h6',
        hasInnerContainers: true,
      })
    })

    return () => {
      tocbotRef.current?.destroy()
    }
  }, [])

  return <div id="toc" className="toc sticky break-all text-sm"></div>
}

export default Component
