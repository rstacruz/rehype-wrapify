import {
  getClassName,
  updateLastChild,
  updateLast,
  updateChildren,
  appendChild
} from './helpers'

/**
 * Wrap everything.
 */

function wrap(root) {
  root = wrapH2(root)

  root = updateChildren(root, children =>
    (children || []).map(section =>
      updateLastChild(section, body => wrapH3(body))
    )
  )

  return root
}

/**
 * Wrap H2 headings.
 */

function wrapH2(root) {
  return wrapify(root, {
    tagName: 'h2',
    sectionClass: ['h2-section'],
    bodyClass: ['body', 'h3-section-list']
  })
}

/**
 * Wraps H3 headings.
 */

function wrapH3(root) {
  return wrapify(root, {
    tagName: 'h3',
    sectionClass: ['h3-section'],
    bodyClass: ['body']
  })
}

/**
 * Wraps headings.
 */

function wrapify(
  root,
  { tagName = 'h2', sectionClass = ['h2-section'], bodyClass = ['body'] } = {}
) {
  const children = root.children.reduce((list, node) => {
    if (node.tagName === tagName) {
      // H2 heading - create a new `.h2-section`.
      // Get the class name of the h2.
      const extraClass = getClassName(node)

      // Pass that same class name into the body.
      const body = wrapper([...bodyClass, extraClass], [])

      // Wrap
      return [...list, wrapper([...sectionClass, extraClass], [node, body])]
    } else if (list.length) {
      // Not prelude
      return updateLast(list, last => ({
        ...last,
        children: updateLast(last.children, body => appendChild(body, node))
      }))
    } else {
      // Prelude
      const body = wrapper(bodyClass, [node])
      return [wrapper(sectionClass, [body])]
    }
  }, [])

  return { ...root, children }
}

/**
 * Creates a wrapper element.
 */

function wrapper(className /*: Array<string> */, children /*: HastNodeList */) {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className },
    children
  }
}

/*
 * Export
 */

export { wrapH2, wrapH3, wrapify }
export default wrap
