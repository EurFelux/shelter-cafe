// markdown parser
import markdownit from 'markdown-it'
import hljs from 'highlight.js' // https://highlightjs.org
import 'highlight.js/styles/tokyo-night-dark.css'

// Actual default values

export const md = markdownit().use((md) => {
  md.renderer.rules.heading_open = (tokens, idx) => {
    const level = tokens[idx].tag
    switch (level) {
      case 'h1':
        return `<${level} class="text-3xl font-bold mb-4">`
      case 'h2':
        return `<${level} class="text-2xl font-bold my-3">`
      case 'h3':
        return `<${level} class="text-xl font-semibold my-2">`
      case 'h4':
        return `<${level} class="text-lg font-medium my-2">`
      case 'h5':
        return `<${level} class="text-base font-medium my-1">`
      case 'h6':
        return `<${level} class="text-sm font-medium my-1">`
      default:
        return `<${level}>`
    }
  }

  md.renderer.rules.paragraph_open = () => {
    return '<p class="py-1">'
  }

  md.renderer.rules.bullet_list_open = () => {
    return '<ul class="list-disc pl-6 mb-4">'
  }
  md.renderer.rules.ordered_list_open = () => {
    return '<ol class="list-decimal pl-6 mb-4">'
  }
  md.renderer.rules.list_item_open = () => '<li class="mb-1">'

  md.renderer.rules.code_inline = (tokens, idx) => {
    return `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">${md.utils.escapeHtml(tokens[idx].content)}</code>`
  }

  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const lang = token.info.trim()
    const rawContent = token.content
    // const content = md.utils.escapeHtml(token.content)
    const highlighted = hljs.highlight(token.content, {
      language: lang,
      ignoreIllegals: true,
    }).value
    return `
        <div class="w-full bg-base-300 rounded-2xl overflow-hidden">
          <div class="bg-base-200 flex p-2 items-center">
            <div class="px-4 font-mono text-base">
              &lt;${lang}&gt;
            </div>
            <div class="grow"></div>
            <button
              class="btn btn-neutral btn-square btn-ghost copy-btn"
              data-code="${encodeURIComponent(rawContent)}"
            >
              <svg class="p-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
              </svg>
            </button>
          </div>
          <pre class="px-4 rounded-lg mb-4 overflow-x-auto"><code class="font-mono text-sm !py-0 hljs !bg-transparent">${highlighted}</code></pre>
        </div>
    `
  }
})
