import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Agenda DT',
  description: 'Criado em next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <a href='/'>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAA6CAYAAAB
          f5IcZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmN
          vbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6
          cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG
          1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MD
          oyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5Lz
          AyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6
          eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLm
          Fkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFw
          LzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wI
          ENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEIxOTNEMUE4RUY
          2MTFFOTkzQ0VBNjQzMEFEOEMxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEIxOTNEMUI4RU
          Y2MTFFOTkzQ0VBNjQzMEFEOEMxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD
          0ieG1wLmlpZDo1MUVERDA3RjhFREMxMUU5OTNDRUE2NDMwQUQ4QzE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0
          ieG1wLmRpZDo1MUVERDA4MDhFREMxMUU5OTNDRUE2NDMwQUQ4QzE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvb
          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
          vxPgAEAIK9CguQXHfYAAAAASUVORK5CYII=' />
        </a>
        <div className='mainContent'>
          {children}
        </div>
      </body>
    </html>
  )
}
