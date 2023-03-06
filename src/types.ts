export type Profiler = {
  NAME: string
  FRAMEWORK: string | undefined
  SAFE_NAME: string
  LANGUAGE: 'TypeScript' | 'JavaScript'
  PORT?: number
  CONTAINER?: string
}

export type Project = {
  os?: 'Linux' | 'Windows'
  framework?: string
  language?: 'javascript' | 'typescript'
  port?: number
  name: string
  type: 'Application' | 'SingleSpa' | 'StoryBook' | 'Packages' | 'Flutter'
}
