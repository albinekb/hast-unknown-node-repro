import { fromHtml } from 'hast-util-from-html'
import util from 'util'
const tree = fromHtml('<button type="login">Hello</button>', { fragment: true })

console.log(util.inspect(tree, { depth: null }))

/**
 * Gives:
{
  type: 'root',
  children: [
    {
      type: 'element',
      tagName: 'button',
      properties: {},
      children: [
        { type: 'login' }, <=== Should not be here?
        {
          type: 'text',
          value: 'Hello',
          position: {
            start: { line: 1, column: 22, offset: 21 },
            end: { line: 1, column: 27, offset: 26 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 36, offset: 35 }
      }
    }
  ],
  data: { quirksMode: false },
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 36, offset: 35 }
  }
}
 */
