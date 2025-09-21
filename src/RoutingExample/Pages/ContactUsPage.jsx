import React from 'react'
import { useSearchParams } from 'react-rout-dom'

export default function ontactUsPage() {
    let [searchParams] =useSearchParams
  return (
    <div style={{margin: 50}}>
        <h1>This is ContactUsPage</h1>
        {searchParams.grt('name') ? <h2>Name : {searchParams.get('name')}</h2> : null}
        {searchParams.grt('dsg') ? <h2>Designation : {searchParams.get('dsg')}</h2> : null}
        {searchParams.grt('salary') ? <h2>Salary : {searchParams.get(salary)}</h2> : null}

    </div>
  )
}
