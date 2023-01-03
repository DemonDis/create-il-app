export type Profiler = {
  NAME: string
  FRAMEWORK: string | undefined
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
  typeweb?:  'SPA' | 'SSR'
  language?: 'javascript' | 'typescript'
  css?: 'CSS' | 'Tailwind' | 'Bootsrap'
  port?: number
  name: string
  type: 'Application' | 'SingleSpa' | 'StoryBook' | 'Packages' 
}
