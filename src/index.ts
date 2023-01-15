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
  toolsbuild,
  typeweb,
  framework,
  language,
  name,
  css,
  port,
}: Project) => {
  const profiler: Profiler = {
    NAME: name,
    TOOLSBUILD: toolsbuild,
    TYPEWEB: typeweb === 'SPA' ? 'SPA' : 'SSR',
    FRAMEWORK: framework,
    CSS: css,
    SAFE_NAME: name.replace(/-/g, '_').trim(),
    LANGUAGE: language === 'typescript' || framework === 'angular' ? 'TypeScript' : 'JavaScript',
  }

  if (type === 'StoryBook' || type === 'Application' || type === 'Flutter' ) {
    profiler.PORT = port
  }
  return profiler
}

export const buildProject = async (project: Project) => {
  const { language, name, framework, typeweb, type, toolsbuild } = project
  const lang = language === 'typescript' ? 'ts' : 'js'
  const tempDir = type.toLowerCase()
  const profiler = buildProfiler(project)

  switch (type) {
    case 'Packages':
      await ncp(
        path.join(__dirname, `../templates/${tempDir}`),
        project.name
      )
      fs.mkdir(`${project.name}/packages`, { recursive: true }, err => {
          if(err) throw err;
       });
      break
    case 'Flutter':
      await ncp(
        path.join(__dirname, `../templates/${tempDir}`),
        project.name
      )
      break
    case 'StoryBook':
      await ncp(
        path.join(__dirname, `../templates/${tempDir}/${framework}/base`),
        name
      )
      await ncp(
        path.join(__dirname, `../templates/${tempDir}/${framework}/${lang}`),
        name
      )
      break
    case 'SingleSpa':
      {
        await ncp(
          path.join(__dirname, `../templates/${tempDir}/${framework}`),
          name
        )

      }
      break
    case 'Application':
      {
        if(framework === 'angular' || (toolsbuild === 'Vite' && framework === 'react')) {
          await ncp(
            path.join(__dirname, `../templates/${tempDir}/${toolsbuild}/${typeweb}/${framework}`),
            project.name
          )
        } else {
          await ncp(
            path.join(__dirname, `../templates/${tempDir}/${toolsbuild}/${typeweb}/${framework}/base`),
            name
          )
          await ncp(
            path.join(__dirname, `../templates/${tempDir}/${toolsbuild}/${typeweb}/${framework}/${lang}`),
            name
          )
        }

        if (profiler.CSS === 'Tailwind') {
          profiler.CONTAINER = 'mt-10 text-3xl mx-auto max-w-6xl'
          profiler.CSS_EXTENSION = 'scss'
          fs.unlinkSync(path.normalize(`${name}/src/styles/index.css`))
          await ncp(
              path.join(__dirname, '../templates/application-extras/tailwind'),
              name
          )

          const packageJSON = JSON.parse(
              fs.readFileSync(path.join(name, 'package.json'), 'utf8')
          )
          packageJSON.devDependencies.tailwindcss = '^2.0.2'
          fs.writeFileSync(
              path.join(name, 'package.json'),
              JSON.stringify(packageJSON, null, 2)
          )
        }

        if (profiler.CSS === 'Bootsrap') {
          profiler.CONTAINER = 'container'
          profiler.CSS_EXTENSION = 'scss'
          fs.unlinkSync(path.normalize(`${name}/src/styles/index.css`))
          await ncp(
              path.join(__dirname, '../templates/application-extras/bootstrap'),
              name
          )

          const packageJSON = JSON.parse(
              fs.readFileSync(path.join(name, 'package.json'), 'utf8')
          )
          packageJSON.devDependencies.bootstrap = '^5.2.3'
          fs.writeFileSync(
              path.join(name, 'package.json'),
              JSON.stringify(packageJSON, null, 2)
          )
        }

        if (profiler.CSS === 'CSS') {
          profiler.CONTAINER = 'container'
          profiler.CSS_EXTENSION = 'css'
        }

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
