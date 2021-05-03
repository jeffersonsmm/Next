import React from 'react'

// import load from '@/assets/loading.svg'

interface IProps {
  styled?: string
}

const Loading: React.FC<IProps> = styled => {
  return (
    <div id="loading" style={{ display: `${styled}` }}>
      {/* <img className="image" src={load} alt="loading" /> */}
    </div>
  )
}

export default Loading
