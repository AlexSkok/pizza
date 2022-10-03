import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    style={{ width: 'auto' }}
    // width={'auto'}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="56" y="281" rx="2" ry="2" width="160" height="21" />
    <rect x="0" y="329" rx="2" ry="2" width="100" height="12" />
    <rect x="0" y="367" rx="2" ry="2" width="50" height="10" />
    <rect x="133" y="329" rx="2" ry="2" width="100" height="12" />
    <rect x="186" y="367" rx="2" ry="2" width="50" height="10" />
    <rect x="98" y="367" rx="2" ry="2" width="50" height="10" />
    <rect x="152" y="405" rx="2" ry="2" width="90" height="21" />
    <rect x="0" y="405" rx="2" ry="2" width="90" height="21" />
  </ContentLoader>
)

export default MyLoader
