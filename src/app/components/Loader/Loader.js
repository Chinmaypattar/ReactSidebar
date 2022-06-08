import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
  return (
    <div style={{margin:'auto'}}>
         <Spinner animation="border" variant="success" />
    </div>
  )
}
