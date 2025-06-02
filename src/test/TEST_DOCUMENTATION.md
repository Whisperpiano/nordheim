# Nordheim Project - Test Documentation

## Testing Strategy

Nordheim follows a comprehensive testing strategy focused on ensuring the reliability, functionality, and user experience of the application. The testing approach is built on the following principles:

- **Component-level Testing**: Individual UI components are tested in isolation to verify their behavior and appearance.
- **Hook Testing**: Custom React hooks are tested to ensure they manage state and side effects correctly.
- **Store Testing**: State management (using Zustand) is tested to verify correct data flow and state updates.
- **Utility Function Testing**: Pure functions are tested with various inputs to ensure they produce the expected outputs.
- **Integration Testing**: Components are tested with their dependencies to verify they work together correctly.

## Test Structure

The test structure mirrors the application architecture:

```
src/test/
├── components/          # UI component tests
│   ├── Button.test.tsx
│   └── ProductCard.test.tsx
├── hooks/               # Custom hook tests
│   └── useScrollToReviews.test.ts
├── mocks/               # Mock data and factories
│   └── productMocks.ts
├── store/               # State management tests
│   └── authStore.test.ts
├── utils/               # Utility function tests
│   └── averageRating.test.ts
├── setup.ts             # Global test configuration
├── test-utils.tsx       # Common testing utilities
├── README.md            # Basic testing documentation
└── TEST_DOCUMENTATION.md  # This comprehensive documentation
```

## Types of Tests Implemented

### 1. Component Tests

Component tests verify that UI components render correctly, respond to user interactions, and maintain their expected behavior when props change.

Examples:
- Button component tests verify rendering, styling, and click handling
- ProductCard tests verify product information display, navigation links, and conditional rendering

### 2. Hook Tests

Hook tests ensure that custom React hooks maintain correct state, respond to inputs, and produce expected side effects.

Examples:
- `useScrollToReviews` tests verify scrolling behavior when triggered

### 3. Store Tests

Store tests validate that the state management layer correctly manages application state and responds to actions.

Examples:
- `authStore` tests verify user authentication state changes

### 4. Utility Tests

Utility tests check that pure functions produce expected outputs for given inputs.

Examples:
- `averageRating` tests verify correct calculation of average ratings

## Configuration

### Testing Dependencies

The project uses the following testing libraries:

```json
{
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^14.6.1",
  "happy-dom": "^17.5.6",
  "vitest": "^3.1.4"
}
```

- **Vitest**: Modern testing framework compatible with Vite
- **React Testing Library**: DOM-based testing utilities for React components
- **Jest DOM**: Custom DOM element matchers
- **User Event**: Advanced user interaction simulation
- **Happy DOM**: Lightweight and fast DOM implementation for testing

### Vitest Configuration

The configuration in `vitest.config.ts` defines the testing environment and setup:

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['./src/test/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
})
```

Key features:
- Uses `happy-dom` for DOM simulation
- Sets up test environment with `setup.ts`
- Configures file patterns for test discovery
- Configures code coverage reporting

### Setup File

The `setup.ts` file initializes the testing environment:

```typescript
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});
```

This setup:
- Imports Jest DOM matchers for enhanced assertions
- Ensures DOM cleanup after each test

## Test Scripts

The following npm scripts are available for testing:

```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:run": "vitest run",
  "coverage": "vitest run --coverage"
}
```

- `npm test`: Runs tests in watch mode (interactive development)
- `npm run test:ui`: Runs tests with a visual UI for debugging
- `npm run test:run`: Runs all tests once (useful for CI pipelines)
- `npm run coverage`: Generates a code coverage report

## How to Run Tests

### Development Mode

During development, run tests in watch mode to get immediate feedback:

```bash
npm test
```

This will run tests related to changed files and re-run tests when files change.

### Single Run

For a one-time execution of all tests (useful for CI):

```bash
npm run test:run
```

### With UI

To debug tests with a visual interface:

```bash
npm run test:ui
```

### Code Coverage

To generate a code coverage report:

```bash
npm run coverage
```

This creates HTML, JSON, and text coverage reports.

## Test Examples

### Component Test Example

```tsx
// Button.test.tsx
import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import Button from "../../components/Button/Button.component";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Utility Test Example

```typescript
// averageRating.test.ts
import { describe, it, expect } from "vitest";
import { calculateAverageRating } from "../../utils/ratings";

describe("calculateAverageRating", () => {
  it("calculates the average of ratings", () => {
    const reviews = [
      { rating: 5, id: 1, title: "", review: "", username: "" },
      { rating: 3, id: 2, title: "", review: "", username: "" }
    ];
    
    expect(calculateAverageRating(reviews)).toBe(4);
  });
  
  it("returns 0 for empty reviews array", () => {
    expect(calculateAverageRating([])).toBe(0);
  });
});
```

## Best Practices Implemented

### 1. Testing Utilities

Custom render function with providers:

```tsx
// test-utils.tsx
export function renderWithProviders(
  ui: ReactElement,
  {
    route = '/',
    queryClient = createTestQueryClient(),
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: WrapperProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[route]}>
          {children}
        </MemoryRouter>
      </QueryClientProvider>
    )
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
```

### 2. Mocking External Dependencies

```tsx
// ProductCard.test.tsx
// Mock ImageProduct to avoid image loading issues
vi.mock(
  "../../components/ProductCard/components/ImageProduct/ImageProduct.component",
  () => ({
    default: () => <div data-testid="image-product">Mock Image</div>,
  })
);
```

### 3. Mock Data

```typescript
// productMocks.ts
export const mockProduct = {
  id: "12345678-1234-1234-1234-123456789012",
  title: "Test Product",
  slug: "test-product",
  price: 99.99,
  // ...other properties
};
```

### 4. AAA Pattern (Arrange-Act-Assert)

Tests follow the AAA pattern:
- **Arrange**: Set up the test conditions
- **Act**: Perform the action to test
- **Assert**: Verify the expected outcome

### 5. Testing User Interactions

```tsx
it("handles click events", async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole("button", { name: /click me/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Challenges and Solutions

### Challenge 1: Testing Components with External Dependencies

**Problem**: Components that depend on external services or complex rendering environments are difficult to test in isolation.

**Solution**: Created mock implementations for external components and services, allowing tests to focus on the component's behavior rather than its dependencies.

### Challenge 2: Testing Asynchronous Behavior

**Problem**: Components and hooks that involve asynchronous operations are challenging to test.

**Solution**: Leveraged React Testing Library's async utilities and waitFor functions to ensure tests correctly await asynchronous operations before making assertions.

### Challenge 3: Type Errors in Tests

**Problem**: TypeScript can be strict with mocked components and data.

**Solution**: Created well-typed mock data that matches the exact structure expected by components, ensuring type safety in tests.

## Next Steps

To improve the testing strategy, consider implementing:

1. **End-to-End Tests**: Add Playwright or Cypress for full application flow testing
2. **Visual Regression Testing**: Implement screenshot comparison for UI components
3. **Performance Testing**: Add performance benchmarks for critical components and operations
4. **Accessibility Testing**: Enhance accessibility testing with specialized tools
5. **API Mocking**: Implement a more robust API mocking strategy for backend interactions
6. **Storybook Integration**: Link component tests with Storybook stories for better documentation

## Useful Resources

- [Vitest Documentation](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Testing React Hooks](https://react-hooks-testing-library.com/)
- [TanStack Query Testing](https://tanstack.com/query/latest/docs/react/guides/testing)
- [Testing React Router](https://reactrouter.com/en/main/start/overview#testing)
