import { expect, test } from '@playwright/test'
import { signIn } from '../utils'

test.beforeEach(async ({ page, baseURL }) => {
  await signIn({ page, baseURL })
})

test('should be able to logout', async ({ page, baseURL }) => {
  const title = page.locator('h4')
  expect(await title.innerText()).toBe('My Projects')

  await page.click('text=Sign out')
  expect(page.url()).toBe(`${baseURL}/`)
})
