import { config } from '../lib'

const fetch = config(async () => ({
    body: JSON.stringify({ value: 10 }),
}))([])

describe.skip('parser', () => {
    test('simple', async () => {
        await expect(
            fetch('json://google.com', async (response) => response).then(
                // @ts-expect-error
                (response) => response.parse('value').toInteger()
            )
        ).resolves.toBe(10)
    })
})