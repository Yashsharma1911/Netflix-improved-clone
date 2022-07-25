import React from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function TopLoader({...restProps}) {
    return  <LoadingBar color='#e50914' {...restProps}/>
}
