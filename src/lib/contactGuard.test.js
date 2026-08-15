import { describe, it, expect } from 'vitest'
import { normalizeEmail, isOwnerEmail } from './contactGuard'

const OWNER = 'bvmanoj61@gmail.com'

describe('normalizeEmail', () => {
  it('trims and lowercases', () => {
    expect(normalizeEmail('  BVmanoj61@GMAIL.com ')).toBe('bvmanoj61@gmail.com')
  })

  it('returns empty string for null/undefined', () => {
    expect(normalizeEmail(null)).toBe('')
    expect(normalizeEmail(undefined)).toBe('')
  })

  it('returns empty string for non-string input', () => {
    expect(normalizeEmail(42)).toBe('')
  })
})

describe('isOwnerEmail', () => {
  it('returns true when submitted email equals owner email (exact case)', () => {
    expect(isOwnerEmail('bvmanoj61@gmail.com', OWNER)).toBe(true)
  })

  it('returns true regardless of case differences', () => {
    expect(isOwnerEmail('BVmanoj61@GMAIL.COM', OWNER)).toBe(true)
  })

  it('returns true when the submitted email has surrounding whitespace', () => {
    expect(isOwnerEmail('  bvmanoj61@gmail.com  ', OWNER)).toBe(true)
  })

  it('returns false for a different visitor email', () => {
    expect(isOwnerEmail('recruiter@company.com', OWNER)).toBe(false)
  })

  it('returns false for an empty submission', () => {
    expect(isOwnerEmail('', OWNER)).toBe(false)
    expect(isOwnerEmail(null, OWNER)).toBe(false)
  })

  it('returns false when no owner email is provided', () => {
    expect(isOwnerEmail('bvmanoj61@gmail.com', '')).toBe(false)
  })
})
