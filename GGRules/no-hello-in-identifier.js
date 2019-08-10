var _ = require('lodash')

module.exports = {
  meta: {
    messages: {
      invalidName: '请使用Span代替Text'
    }
  },
  create (context) {
    return {
      JSXIdentifier (node) {
        if (_.includes(node.name, 'Text')) {
          context.report({
            node,
            messageId: 'invalidName'
          })
        }
      }
    }
  }
}