#!/usr/bin/env node
import inquirer from 'inquirer'
import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import * as banners from '../utils/banners'

import { red, green, bold } from 'kolorist'

import { buildProject } from '../src/index'
import { Project } from '../src/types'
;(async function () {
  console.log()
  console.log(
    process.stdout.isTTY && process.stdout.getColorDepth() > 8
      ? banners.gradientBanner
      : banners.defaultBanner
  )
  console.log()
  const answers = await inquirer.prompt<Project>([
    {
      type: 'input',
      message: 'Name of your app:',
      name: 'name',
      default: 'host',
    },
    {
      type: 'list',
      message: 'Project Type:',
      name: 'type',
      choices: ['Application', 'StoryBook', 'Packages', 'SingleSpa', 'Flutter'],
      default: 'Application',
    },
    {
      type: 'list',
      message: 'Operating system:',
      name: 'os',
      choices: ['Linux', 'Windows'],
      default: 'Linux',
    },
  ])

  if (answers.type === 'Packages') {
    buildProject(answers)
  }

  if (answers.type === 'Flutter') {
    const serverAnswers = await inquirer.prompt<Project>([
      {
        type: 'input',
        message: 'Port number:',
        name: 'port',
        default: '9001',
      },
    ])
    buildProject({
      ...answers,
      ...serverAnswers,
    })
  }

  if (answers.type === 'StoryBook') {
    const templates = fs
      .readdirSync(path.join(__dirname, '../templates/storybook'))
      .sort()
   
    const storyAnswers = await inquirer.prompt<Project>([
      {
        type: 'input',
        message: 'Port number:',
        name: 'port',
        default: '6006',
      },
      {
          type: 'list',
          message: 'Framework:',
          name: 'framework',
          choices: templates,
          default: 'react',
      },
    ])

    const lang = storyAnswers.framework === 'vue3' ? ['javascript'] : ['typescript', 'javascript'];
    const storyAnswersLang = await inquirer.prompt<Project>([
      {
          type: 'list',
          message: 'Language:',
          name: 'language',
          choices: lang,
          default: 'javascript',
      },
    ])
    buildProject({
      ...answers,
      ...storyAnswers,
      ...storyAnswersLang,
    })
  }

  if (answers.type === 'SingleSpa') {
    const templates = fs
      .readdirSync(path.join(__dirname, '../templates/singlespa'))
      .sort()

    const appAnswers = await inquirer.prompt<Project>([
      {
        type: 'list',
        message: 'Framework:',
        name: 'framework',
        choices: templates,
        default: 'react',
      }
      
    ])

    buildProject({
      ...answers,
      ...appAnswers,
    })
  }

  if (answers.type === 'Application') {
    const tools = fs
      .readdirSync(path.join(__dirname, `../templates/application`))
      .sort()

    const appAnswersTools = await inquirer.prompt<Project>([
      {
        type: 'input',
        message: 'Port number:',
        name: 'port',
        default: '9001',
      },
      {
        type: 'list',
        message: 'Tools build:',
        name: 'toolsbuild',
        choices: tools,
        default: 'Webpack5',
      },
 
    ])

    const templates = fs
    .readdirSync(path.join(__dirname, `../templates/application/${appAnswersTools.toolsbuild}`))
      .sort()

    const appAnswersTemplate = await inquirer.prompt<Project>([
      {
        type: 'list',
        message: 'Type:',
        name: 'typeweb',
        choices: templates,
        default: 'SPA',
      },

    ])

    buildProject({
      ...answers,
      ...appAnswersTools,
      ...appAnswersTemplate
    })
  }

  console.log()
  shell.echo(`👉 Your ${bold(green(`${answers.name}`))} project. 🔥 ${bold(green(`READY`))} 🔥.

Next steps:

▶️ ${bold(green(`cd ${answers.name}`))}
▶️ ${bold(green(`yarn`))}
▶️ ${bold(green(`yarn start`))}
`)
})()
