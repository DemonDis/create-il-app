import util from 'util'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import { Profiler, Project } from './types'

const ncp = util.promisify(require('ncp').ncp)

const templateFile = (fileName: string, replacements: Profiler) => {
  const fileContent = fs.readFileSync(fileName, 'utf8').toString()

  const template = Object.entries(replacements).reduce((acc, [key, value]) => {
    return acc.replace(
      new RegExp(`(\{\{${key}\}\}|\{\{ ${key} \}\})`, 'g'),
      value?.toString() ?? ''
    )
  }, fileContent)
  fs.writeFileSync(fileName, template)
}

const renameGitignore = (projectName: string) => {
  if (fs.existsSync(path.normalize(`${projectName}/gitignore`))) {
    fs.renameSync(
      path.normalize(`${projectName}/gitignore`),
      path.normalize(`${projectName}/.gitignore`)
    )
  }
}
const renameStoryBook = (projectName: string) => {
  if (fs.existsSync(path.normalize(`${projectName}/storybook`))) {
    fs.renameSync(
      path.normalize(`${projectName}/storybook`),
      path.normalize(`${projectName}/.storybook`)
    )
  }
}

const buildProfiler = ({
  type,
  framework,
  language,
  name,
  port,
}: Project) => {
  const profiler: Profiler = {
    NAME: name,
    FRAMEWORK: framework,
    SAFE_NAME: name.replace(/-/g, '_').trim(),
    LANGUAGE: language === 'typescript' || framework === 'angular' ? 'TypeScript' : 'JavaScript',
  }

  if (type === 'Application') {
    profiler.PORT = port
  }
  return profiler
}

export const buildProject = async (project: Project) => {
  const { language, name, framework, type } = project
  const lang = language === 'typescript' ? 'ts' : 'js'
  const tempDir = type.toLowerCase()
  const profiler = buildProfiler(project)

  switch (type) {
    case 'Application':
      {
          await ncp(
            path.join(__dirname, `../templates/${tempDir}/${framework}/lang/base`),
            name
          )
          await ncp(
            path.join(__dirname, `../templates/${tempDir}/${framework}/lang/${lang}`),
            name
          )
      }
      break
  }
  renameGitignore(name)

  glob.sync(`${name}/**/*`).forEach((file) => {
    if (fs.lstatSync(file).isFile()) {
      templateFile(file, profiler)
    }
  })
  renameStoryBook(name)
}
