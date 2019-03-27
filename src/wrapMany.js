import { wrapify } from './index'
import { updateChildren, updateLastChild } from './helpers'
/**
 * Wrap many
 */

function wrapMany(root, optionsList) {
  root = wrapify(root, optionsList[0])

  root = updateChildren(root, children =>
    (children || []).map(section =>
      updateLastChild(section, body => wrapify(body, optionsList[1]))
    )
  )

  return root
}

/*
 * Export
 */

export default wrapMany
