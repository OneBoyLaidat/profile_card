# Frontend Wizard:  Profile Card

A responsive, accessible, and highly testable Profile Card built with semantic HTML, modern CSS (Flexbox), and vanilla JavaScript.

## 🚀 Live Demo

[Insert your Netlify / Vercel / GitHub Pages link here]

## 🛠️ Tech Stack

- HTML5 (Semantic Structure & Landmarks)
- CSS3 (Custom Properties, Flexbox, Mobile-First Media Queries)
- Vanilla JavaScript (DOM Manipulation, Time Polling)

## ✨ Features

- **Testable Data Attributes:** Fully compliant with the required `data-testid` tags.
- **Accessibility (a11y):** - Semantic tags (`<article>`, `<figure>`, `<nav>`).
  - Screen reader friendly `aria-live` region for dynamically updating time.
  - Passes WCAG AA color contrast ratios.
  - Visible `focus-visible` styling for keyboard navigation.
- **Responsiveness:** Single column on mobile devices, gracefully scaling to a side-by-side layout on tablets and desktops.
- **Dynamic Content:** Epoch time generated via `Date.now()` and refreshed every 500ms.

## 💻 Running Locally

1. Clone this repository:

   ```bash
   git clone [your-repo-url]

2. Navigate to the project directory:

    ```bash
    cd profile-card-task
    ```

3. Open index.html in your favorite browser. No build steps or local servers are strictly required! (If you have VS Code, using the 'Live Server' extension works perfectly).