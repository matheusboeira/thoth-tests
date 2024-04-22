import { expect, test } from '@playwright/test'
import { project, signIn } from '../utils'

test.beforeEach(async ({ page, baseURL }) => {
  await signIn({ page, baseURL })
})

test('should be able to create a new project', async ({ page, baseURL }) => {
  const title = page.locator('h4')
  expect(await title.innerText()).toBe('My Projects')

  const p = await project.create({ page, baseURL, name: 'New Project' })
  const projectTitle = page.getByRole('heading', { name: p.title })

  expect(await projectTitle.isVisible()).toBeTruthy()
  expect(await projectTitle.innerText()).toBe(p.title)
})
