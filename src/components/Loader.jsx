import React from 'react'

export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="loaderWrap" role="status" aria-live="polite" aria-busy="true">
      <div className="spinner"></div>
      <div className="loaderText">{label}</div>
    </div>
  )
}
