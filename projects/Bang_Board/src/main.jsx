import React from 'react'
import { createRoot } from 'react-dom/client'
import { Tldraw } from 'tldraw'
import { getAssetUrlsByImport } from '@tldraw/assets/imports.vite'
import 'tldraw/tldraw.css'
import './style.css'

const assetUrls = getAssetUrlsByImport()

function App() {
  return (
    <main>
      <header className="brand-bar">
        <div className="brand">
          <span className="brand-seal" aria-hidden="true">B</span>
          <strong>Bang Board</strong>
        </div>
        <span className="save-note"><i aria-hidden="true" />Saved in this browser</span>
      </header>
      <div className="board">
        <Tldraw
          persistenceKey="bang-board"
          assetUrls={assetUrls}
          licenseKey={import.meta.env.VITE_TLDRAW_LICENSE_KEY}
        />
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
