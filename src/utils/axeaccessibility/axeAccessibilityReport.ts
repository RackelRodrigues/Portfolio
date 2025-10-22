export async function axeAccessibilityReporter() {
  if (import.meta.env.DEV) {
    const axe = (await import("@axe-core/react")).default;
    const React = (await import("react")).default;
    const ReactDom = (await import("react-dom")).default;

    axe(React, ReactDom, 1000);
  }
}
