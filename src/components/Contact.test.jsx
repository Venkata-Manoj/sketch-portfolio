import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from './Contact'
import { PROFILE } from '../data'

// We do NOT hit Formspree in tests. Stub fetch with a forced success response
// so the component's state transitions can be exercised deterministically.
let fetchSpy

beforeEach(() => {
  vi.restoreAllMocks()
  fetchSpy = vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({}) }),
  )
  vi.stubGlobal('fetch', fetchSpy)
})

describe('Contact form owner-email guard', () => {
  it('rejects submission when the visitor enters the owner email', async () => {
    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'A Curious Recruiter' },
    })
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: PROFILE.email.toUpperCase() },
    })
    fireEvent.change(screen.getByLabelText(/the note/i), {
      target: { value: 'Great portfolio!' },
    })

    fireEvent.click(screen.getByRole('button', { name: /send the note/i }))

    // The anti-abuse message appears and the form is NOT posted.
    expect(
      await screen.findByText(/do not enter my email in this form/i),
    ).toBeInTheDocument()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('submits normally when a different visitor email is used', async () => {
    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: 'jane.doe@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/the note/i), {
      target: { value: 'Loved the projects.' },
    })

    fireEvent.click(screen.getByRole('button', { name: /send the note/i }))

    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(1))
    const [url, opts] = fetchSpy.mock.calls[0]
    expect(url).toContain('formspree.io')
    expect(opts.method).toBe('POST')

    expect(await screen.findByText(/message delivered/i)).toBeInTheDocument()
  })
})
