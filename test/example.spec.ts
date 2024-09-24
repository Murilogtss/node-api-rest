import { test, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('User should be able to create a transaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    type: 'credit',
    amount: 5000,
  })

  expect(response.statusCode).toEqual(201)
})
