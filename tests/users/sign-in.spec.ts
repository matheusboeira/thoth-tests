import { expect, test } from '@playwright/test'
import { Auth, signIn } from '../utils'

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.click('text=Sign In')
})

test('should sign in with valid credentials', async ({ page, baseURL }) => {
  await signIn({ page, baseURL })

  const title = page.locator('h4')
  expect(await title.innerText()).toBe('My Projects')
})

test('should not be able to sign in with invalid email format', async ({
  page,
  baseURL
}) => {
  await page.fill('input[name="email"]', 'invalid_email')
  await page.fill('input[name="password"]', 'invalid_password')
  await page.click('button[type="submit"]')

  expect(page.url()).toBe(`${baseURL}/login`)
})

test('should not be able to sign in with invalid password', async ({
  page,
  baseURL
}) => {
  await page.fill('input[name="email"]', Auth.EMAIL)
  await page.fill('input[name="password"]', Math.random().toString(24))
  await page.click('button[type="submit"]')

  await page.waitForURL(`${baseURL}/login`, { waitUntil: 'networkidle' })

  expect(
    await page.locator('text=Email or Password invalid!').isVisible()
  ).toBeTruthy()
  expect(page.url()).toBe(`${baseURL}/login`)
})

test('should not be able to sign in with empty email and password', async ({
  page,
  baseURL
}) => {
  await page.click('button[type="submit"]')
  expect(page.url()).toBe(`${baseURL}/login`)
})

test('should redirect to dashboard if user is already authenticated', async ({
  page,
  baseURL
}) => {
  await signIn({ page, baseURL })
  await page.goto(`${baseURL}/login`, { waitUntil: 'networkidle' })

  expect(page.url()).toBe(`${baseURL}/dashboard`)
})
