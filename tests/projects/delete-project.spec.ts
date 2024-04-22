import { expect, test } from '@playwright/test'
import { project, signIn } from '../utils'

test.beforeEach(async ({ page, baseURL }) => {
  await signIn({ page, baseURL })
})

test('should be able to delete a project', async ({ page, baseURL }) => {
  await project.create({ page, baseURL, name: 'Delete Project' })
  const projectId = page.url().split('/').pop()

  await page.goto(`${baseURL}/dashboard`, { waitUntil: 'networkidle' })
  await page
    .locator(
      `button[onclick="delete_project(${projectId},$(this).parents('tr'))"]`
    )
    .click()

  await page.click('text=Yes, delete it!')
  expect(true).toBeTruthy()
})
