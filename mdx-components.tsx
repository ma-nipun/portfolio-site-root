import type { ComponentPropsWithoutRef } from 'react'

type MDXComponents = Record<string, React.ComponentType<any>>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<'h1'>) => <h1 className="post-title" {...props} />,
    h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 className="post-heading" {...props} />,
    p: (props: ComponentPropsWithoutRef<'p'>) => <p className="post-paragraph" {...props} />,
    ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul className="post-list" {...props} />,
    ...components,
  }
}
