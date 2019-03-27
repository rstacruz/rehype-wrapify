/* @jsx h */
/* eslint-env jest */

import wrapMany from '../src/wrapMany'
import h from 'hastscript'
import render from 'hast-util-to-html'

/*
 * Test wrapping h2
 */

const OPTIONS = [
  {
    tagName: 'h2',
    sectionClass: ['h2-section'],
    bodyClass: ['body']
  },
  {
    tagName: 'h3',
    sectionClass: ['h3-section'],
    bodyClass: ['body']
  }
]

// This is TODO, so let's skip this for now haha.
xdescribe('wrapMany', () => {
  it('works', () => {
    const input = (
      <div>
        <h2>Introduction</h2>
        <p>Hello there</p>
      </div>
    )

    const expected = (
      <div>
        <div className='h2-section'>
          <h2>Introduction</h2>
          <div className='body'>
            <p>Hello there</p>
          </div>
        </div>
      </div>
    )

    const output = wrapMany(input, OPTIONS)
    expect(render(output)).toEqual(render(expected))
  })

  it('leave preludes alone', () => {
    const input = (
      <div>
        <p>Hello there</p>
      </div>
    )

    const expected = (
      <div>
      </div>
    )

    const output = wrapMany(input, OPTIONS)
    expect(render(output)).toEqual(render(expected))
  })
})
