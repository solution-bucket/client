import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const CategoryNotFound = () => {
  return (
    <div className='category-not-found'>
     <div>
          <h2 style={{ marginTop:'30px',color: 'blue', textTransform: 'uppercase'}}>Oops there is no Tutorial Found</h2>
     <Link  href="/">
     <Button type='primary' style={{ marginTop:'40px'}}>PLEASE GO HOME</Button>
     
     </Link>

     </div>
    </div>
  )
}

export default CategoryNotFound
