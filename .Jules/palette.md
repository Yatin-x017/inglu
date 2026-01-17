## 2024-07-25 - Interactive Cards Should Be Buttons

**Learning:** The application uses clickable `div` elements for interactive card-like components (e.g., role selection). This is a common anti-pattern that harms accessibility, as `div`s are not naturally focusable via keyboard and are not announced as interactive elements by screen readers.

**Action:** When encountering interactive, card-like UI elements, refactor them into semantic `<button>` elements. Ensure they have appropriate `aria-pressed` states for toggle functionality and clear `focus-visible` styles for keyboard navigators. This ensures the component is accessible to all users.
