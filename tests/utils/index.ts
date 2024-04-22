import {
  expect,
  type PlaywrightTestArgs,
  type PlaywrightTestOptions,
  type PlaywrightWorkerArgs,
  type PlaywrightWorkerOptions
} from '@playwright/test'

export const Auth = {
  EMAIL: 'matheusb_dias@teste.com',
  PASSWORD: 'teste'
}

type Props = PlaywrightTestArgs &
  PlaywrightTestOptions &
  PlaywrightWorkerArgs &
  PlaywrightWorkerOptions

export const signIn = async ({ page, baseURL }: Partial<Props>) => {
  await page?.goto(`${baseURL}/login`, { waitUntil: 'networkidle' })
  await page?.fill('input[name="email"]', Auth.EMAIL)
  await page?.fill('input[name="password"]', Auth.PASSWORD)
  await page?.click('button[type="submit"]')

  expect(Auth.EMAIL).not.toBe('')
  expect(Auth.PASSWORD).not.toBe('')
}

export const project = {
  create: async ({
    page,
    baseURL,
    name
  }: Partial<Props> & { name: string }) => {
    await page?.click('text="Create New Project"')
    await page?.waitForURL(`${baseURL}/new_project`, {
      waitUntil: 'networkidle'
    })

    const project = {
      title: name,
      description: 'Test Description',
      objectives: 'Test Objectives'
    }

    await page?.fill('input[name="title"]', project.title)
    await page?.fill('textarea[name="description"]', project.description)
    await page?.fill('textarea[name="objectives"]', project.objectives)
    await page?.click('button[type="submit"]')

    await page?.waitForURL(`${baseURL}/open/**`, {
      waitUntil: 'networkidle'
    })

    return {
      id: page?.url().split('/').pop(),
      ...project
    }
  }
}
