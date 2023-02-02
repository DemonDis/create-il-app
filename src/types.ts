export type Profiler = {
  NAME: string
  FRAMEWORK: string | undefined
  TYPEWEB: 'SPA' | 'SSR'
  TOOLSBUILD: string | undefined
  PROTOCOL?: 'REST' | 'WebSocket'
  SAFE_NAME: string
  LANGUAGE: 'TypeScript' | 'JavaScript'
  PORT?: number
  CSS_EXTENSION?: 'css' | 'scss' | 'less'
  CSS?: 'CSS' | 'Tailwind' | 'Bootsrap'
  CONTAINER?: string
}

export type Project = {
  framework?: string
  css?: 'CSS' | 'Tailwind' | 'Bootsrap'
  typeweb?:  'SPA' | 'SSR'
  toolsbuild?: string
  protocol?: 'REST' | 'WebSocket'
  language?: 'javascript' | 'typescript'
  port?: number
  name: string
  type: 'Application' | 'SingleSpa' | 'StoryBook' | 'Packages' | 'Flutter'
}
