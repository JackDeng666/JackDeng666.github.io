import React, { useEffect, useState } from 'react'

let loadNum = 0

const MusicPlayer = React.memo(() => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loadNum >= 3) {
      if (!loaded) {
        setLoaded(true)
      }
      return
    }
    const aPlayerCss = document.createElement('link')
    const aPlayerJs = document.createElement('script')
    const metingJs = document.createElement('script')
    aPlayerCss.rel = 'stylesheet'
    aPlayerCss.href =
      'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'
    aPlayerJs.src = 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js'
    metingJs.src = 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js'
    function loadFuc() {
      loadNum++
      if (loadNum >= 3) {
        if (!loaded) {
          setLoaded(true)
        }
      }
    }
    aPlayerCss.onload = loadFuc
    aPlayerJs.onload = loadFuc
    metingJs.onload = loadFuc

    const header = document.getElementsByTagName('head')[0]
    header.append(aPlayerCss, aPlayerJs, metingJs)
  }, [])

  return (
    <>
      {loaded ? (
        <meting-js
          server="netease"
          type="playlist"
          id="2981441842"
          fixed="true"
          autoplay="true"
        ></meting-js>
      ) : null}
    </>
  )
})

export default MusicPlayer
