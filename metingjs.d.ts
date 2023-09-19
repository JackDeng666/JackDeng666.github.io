import * as React from 'react'

declare global {
  interface MetingjsProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    server: string
    type: string
    id: string
    fixed?: string
    autoplay?: string
  }

  namespace JSX {
    interface IntrinsicElements {
      'meting-js': MetingjsProps
    }
  }
}
