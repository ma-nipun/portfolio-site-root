import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="post-title" {...props} />,
    h2: (props) => <h2 className="post-heading" {...props} />,
    p: (props) => <p className="post-paragraph" {...props} />,
    ul: (props) => <ul className="post-list" {...props} />,
    ...components,
  }
}
