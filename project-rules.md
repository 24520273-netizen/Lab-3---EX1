# Lab 3 Engineering Rules

## Stack
- React 19
- Vite
- Modern JavaScript / ES2024
- Functional components only

## React
- Use createRoot from react-dom/client.
- Run the application inside StrictMode.
- Do not use class components.
- Do not use ReactDOM.render.
- Do not use Component.defaultProps.
- Use ES6 default parameters instead.
- Import only the React APIs that are actually required.

## Semantic HTML
- Avoid div-soup.
- Prefer semantic elements such as main, section, article, header, hgroup, dl, dt, dd, ul, li, figure, and output.
- Do not use dangerouslySetInnerHTML.

## State
- State updates must be immutable.
- Do not synchronize derived filter or sort data using useEffect.
- Do not use array indexes as keys when stable entity IDs exist.

## Effects
- Every timer, event listener, network request, or external subscription created inside useEffect must have deterministic cleanup.
- Use AbortController for abortable network requests where appropriate.

## Accessibility
- Use proper semantic landmarks and heading hierarchy.
- Form controls must have associated labels.
- Interactive buttons must use explicit type="button" when they are not submit buttons.

## Styling
- Use CSS Modules for Exercise 1.
- Avoid unnecessary inline styles.
- Use CSS Custom Properties where appropriate.
- The UI must remain usable at 375px width.

## Security
- Media resources must use HTTPS URLs.
