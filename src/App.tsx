import { MotionConfig, LazyMotion, domMax } from 'framer-motion'

function App(): JSX.Element {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig transition={{ duration: 0.2 }}>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
