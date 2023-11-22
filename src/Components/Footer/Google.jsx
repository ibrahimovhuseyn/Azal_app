import React from 'react'

function Google() {
  const url = 'https://th.bing.com/th/id/OIP.D4_94lbhjeBBRgXYvzKs7wHaCH?pid=ImgDet&rs=1'
  return (
    <div className='google'>
      <img src={url} alt="logo" />
    </div>
  )
}

export default Google