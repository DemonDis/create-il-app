#!/usr/bin/env node
import inquirer from 'inquirer'
import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import { buildProject } from '../src/index'
import { Project } from '../src/types'
;(async function () {
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
      choices: ['Application', 'StoryBook', 'Packages', 'SingleSpa'],
      default: 'Application',
    },
  ])

  if (answers.type === 'Packages') {
    buildProject(answers)
  }

  if (answers.type === 'StoryBook') {
    const templates = fs
      .readdirSync(path.join(__dirname, '../templates/storybook'))
      .sort()

    const serverAnswers = await inquirer.prompt<Project>([
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
    {
        type: 'list',
        message: 'Language:',
        name: 'language',
        choices: ['typescript', 'javascript'],
        default: 'javascript',
    },
    ])

    buildProject({
      ...answers,
      ...serverAnswers,
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
    const typeweb = fs
      .readdirSync(path.join(__dirname, `../templates/application//${appAnswersTools.toolsbuild}/${appAnswersTemplate.typeweb}`))
      .sort()

    const appAnswersType = await inquirer.prompt<Project>([
      {
        type: 'list',
        message: 'Framework:',
        name: 'framework',
        choices: typeweb,
        default: 'react',
      },

    ])

    const lang = (appAnswersTools.toolsbuild === 'Vite' && appAnswersType.framework === 'react' || appAnswersType.framework === 'angular') ? ['typescript'] : ['typescript', 'javascript'];
    const appAnswersList = await inquirer.prompt<Project>([
      {
        type: 'list',
        message: 'Language:',
        name: 'language',
        choices: lang,
        default: 'javascript',
      },
      {
        type: 'list',
        message: 'CSS:',
        name: 'css',
        choices: ['CSS', 'Tailwind', 'Bootsrap'],
        default: 'CSS',
      },

    ])

    buildProject({
      ...answers,
      ...appAnswersTools,
      ...appAnswersTemplate,
      ...appAnswersType,
      ...appAnswersList
    })
  }

  shell.echo(`Your '${answers.name}' project. 🔥 READY 🔥.

Next steps:

▶️ cd ${answers.name}
▶️ yarn
▶️ yarn start
`)
})()
