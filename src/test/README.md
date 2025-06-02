# Nordheim Project Testing Documentation

This directory contains tests for the Nordheim Project, implemented using Vitest and React Testing Library.

## Directory Structure

The test structure reflects the project structure:

```
src/test/
├── components/          # Component tests
├── hooks/               # Custom hooks tests
├── mocks/               # Mocks and factories for tests
├── stores/              # Store tests (Zustand)
├── utils/               # Test utilities
├── setup.ts             # Global test configuration
├── test-utils.tsx       # Common testing utilities
└── README.md            # This documentation
```

## Running Tests

The following scripts are configured in `package.json` to run tests:

- `npm test`: Runs tests in watch mode (useful during development)
- `npm run test:ui`: Runs tests with Vitest's visual UI
- `npm run test:run`: Runs tests once (useful for CI)
- `npm run coverage`: Generates a code coverage report

## Configuration

Vitest configuration is located in `vitest.config.ts` at the project root. Key configuration aspects include:

- Testing environment: happy-dom (DOM simulator)
- Test setup in `src/test/setup.ts`
- Path aliases for cleaner imports (e.g., '@' points to './src')
- Code coverage configuration (using v8 provider)

## Test Setup

The `setup.ts` file includes:

- Automatic cleanup after each test
- Jest DOM matchers for better assertions

## Testing Patterns

### Components

For component tests:

- Rendering with providers (React Router, TanStack Query) via `test-utils.tsx`
- Accessibility and role-based testing
- User event simulations with `@testing-library/user-event`
- Mocking external dependencies when necessary

### Hooks

For hook tests:

- Using `renderHook` from React Testing Library
- Mocking DOM functions and objects when necessary

### Stores and API

For store and API tests:

- Mocking Supabase to simulate responses
- Mocking toast notifications and other external services
- Testing successful flows and error cases

## Test Utilities

The `test-utils.tsx` file provides:

- A custom render function with providers pre-configured
- Re-exports of common testing utilities from React Testing Library
- Custom test query client setup

## Future Improvements

Potential areas to improve test coverage:

1. Implement end-to-end tests with Playwright or Cypress
2. Increase coverage of complex components
3. Add more integration tests between components
4. Implement automated accessibility testing
5. Configure a CI/CD flow with automatic test execution

## How to Add New Tests

1. Identify what you want to test (component, hook, utils, etc.)
2. Create a `.test.tsx` or `.test.ts` file in the corresponding directory
3. Import the necessary utilities from Vitest and React Testing Library
4. Use the AAA (Arrange-Act-Assert) pattern to structure your tests
5. Run the tests to verify they work correctly
