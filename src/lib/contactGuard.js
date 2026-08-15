// Pure, testable helpers for the contact form's anti-abuse guard.
//
// The portfolio contact form posts to Formspree. We never want the owner's
// own address to be submitted as a visitor's "reply-to" email — doing so
// breaks the owner's ability to reply and looks like spam. These helpers
// isolate that rule so it can be unit-tested without a DOM or network.

/**
 * Normalize an email for comparison: trim whitespace and lowercase.
 * Handles null/undefined safely (returns an empty string).
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeEmail(value) {
  if (typeof value !== 'string') return ''
  return value.trim().toLowerCase()
}

/**
 * Returns true when the submitted email equals the owner's address,
 * case- and whitespace-insensitively. Used to block self-submission.
 * @param {string} submittedEmail value from the form's email field
 * @param {string} ownerEmail the portfolio owner's address
 * @returns {boolean}
 */
export function isOwnerEmail(submittedEmail, ownerEmail) {
  if (!ownerEmail) return false
  return normalizeEmail(submittedEmail) === ownerEmail.toLowerCase()
}
