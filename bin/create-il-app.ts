#!/usr/bin/env node
import inquirer from 'inquirer'
import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import * as banners from '../utils/banners'

import { green, bold } from 'kolorist'

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
      choices: ['Application'],
      default: 'Application',
    },
    {
      type: 'list',
      message: 'Framework:',
      name: 'framework',
      choices: ['React', 'Vue'],
      default: 'react',
    },
  ])


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
      }
    ])


    buildProject({
      ...answers,
      ...appAnswersTools,
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
