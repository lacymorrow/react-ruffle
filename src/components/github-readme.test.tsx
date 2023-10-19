import React from 'react'
import { render } from '@testing-library/react'
import GitHubReadme from './github-readme'
import 'whatwg-fetch'

describe('GitHubReadme', () => {
  test('renders the readme.md file', () => {
    render(<GitHubReadme username="lacymorrow" repo="crossover" />)
  })
})
