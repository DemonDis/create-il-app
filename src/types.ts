export type Profiler = {
  NAME: string
  FRAMEWORK: string | undefined
  CSS2?: 'CSS' | 'Tailwind' | 'Bootsrap'
  TYPEWEB: 'SPA' | 'SSR'
  SAFE_NAME: string
  LANGUAGE: 'TypeScript' | 'JavaScript'
  PORT?: number
  CSS_EXTENSION?: 'css' | 'scss' | 'less'
  CSS?: 'Tailwind' | 'Bootsrap' | 'Empty CSS'
  CONTAINER?: string
}

export type Project = {
  framework?: string
  css2?: 'CSS' | 'Tailwind' | 'Bootsrap'
  typeweb?:  'SPA' | 'SSR'
  language?: 'javascript' | 'typescript'
  css?: 'CSS' | 'Tailwind' | 'Bootsrap'
  port?: number
  name: string
  type: 'Application' | 'SingleSpa' | 'StoryBook' | 'Packages' 
}
