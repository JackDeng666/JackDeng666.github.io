import React, { useState } from 'react'
import clsx from 'clsx'
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle
} from '@docusaurus/theme-common'
import TagsListByLetter from '@theme/TagsListByLetter'
import { TagsListByFlat } from '../TagsListByLetter'
import type { Props } from '@theme/BlogTagsListPage'
import SearchMetadata from '@theme/SearchMetadata'
import { Icon } from '@iconify/react'

import MyLayout from '../MyLayout'

export default function BlogTagsListPage({
  tags,
  sidebar
}: Props): JSX.Element {
  const title = translateTagsPageTitle()

  const [type, setType] = useState<'list' | 'grid'>('grid')

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <MyLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1>{title}</h1>
          <span>
            <div
              className={`mimicry-button ${type === 'grid' ? 'active' : ''}`}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem',
                marginRight: '0.5rem'
              }}
              onClick={() => setType('grid')}
            >
              <Icon icon="ph:grid-four" width="24" height="24" />
            </div>
            <div
              className={`mimicry-button ${type === 'list' ? 'active' : ''}`}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem'
              }}
              onClick={() => setType('list')}
            >
              <Icon icon="ph:list" width="24" height="24" />
            </div>
          </span>
        </div>
        {type === 'list' && <TagsListByLetter tags={tags} />}
        {type === 'grid' && <TagsListByFlat tags={tags} />}
      </MyLayout>
    </HtmlClassNameProvider>
  )
}
