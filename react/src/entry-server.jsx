import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
  // Render the app to a string using React
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )

  return { html }
}
 