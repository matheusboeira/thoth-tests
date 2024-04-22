import { expect, test } from '@playwright/test'
import { Auth } from '../utils'

const account = {
  name: 'John Doe',
  email: `john.doe.${Math.random()}@example.com`,
  password: 'password'
}

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.click('text=Sign Up')
})

test('should be able to create an account', async ({ page, baseURL }) => {
  let title = page.locator('h4')
  expect(await title.innerText()).toBe('Join Thoth')

  await page.fill('input[name="name"]', account.name)
  await page.fill('input[name="email"]', account.email)
  await page.fill('input[name="password"]', account.password)
  await page.click('button[type="submit"]')

  title = page.locator('h4')

  expect(page.url()).toBe(`${baseURL}/dashboard`)
  expect(await title.innerText()).toBe('My Projects')
})

test('should not be able to create an account with existing email', async ({
  page,
  baseURL
}) => {
  const title = page.locator('h4')
  expect(await title.innerText()).toBe('Join Thoth')

  await page.fill('input[name="name"]', account.name)
  await page.fill('input[name="email"]', Auth.EMAIL)
  await page.fill('input[name="password"]', account.password)
  await page.click('button[type="submit"]')

  await page.waitForURL(`${baseURL}/sign_up`, { waitUntil: 'networkidle' })
  const alertMessage = page.locator('text=Email already used!')

  expect(await alertMessage.isVisible()).toBeTruthy()
  expect(page.url()).toBe(`${baseURL}/sign_up`)
})
