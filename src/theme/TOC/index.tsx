import React from 'react'
import clsx from 'clsx'
import TOCItems from '@theme/TOCItems'
import type { Props } from '@theme/TOC'
import styles from './styles.module.css'

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight'
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active'

export default function TOC({ className, ...props }: Props): JSX.Element {
  return (
    <div
      className={clsx(
        styles.tableOfContents,
        'thin-scrollbar',
        'mimicry-wrap sunken',
        className
      )}
      style={{ padding: '1em 0' }}
    >
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  )
}
