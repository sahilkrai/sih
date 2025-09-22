// Global declaration for custom elements used in TSX
// Allows usage of <spline-viewer /> without TS errors
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': any;
  }
}
