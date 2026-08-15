import '@testing-library/jest-dom'

// jsdom does not implement IntersectionObserver / ResizeObserver, but
// framer-motion's in-view features call them on mount. Provide no-op shims so
// components that render framer-motion elements can mount in tests without
// ReferenceErrors. Test-only — never imported by app code.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = MockIntersectionObserver
globalThis.ResizeObserver = MockResizeObserver
