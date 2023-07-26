import sum from '@utils/sum'

describe('Test in utils folder', () => {
  it('sum two numbers', () => {
    const result = sum(2, 5)

    expect(result).toEqual(7)
  })
})
