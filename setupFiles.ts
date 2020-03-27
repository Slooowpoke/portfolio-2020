import 'jest-axe/extend-expect';
import '@testing-library/jest-dom/extend-expect';
// Mocked for animation links https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/161#issuecomment-575869339
window.matchMedia = jest.fn(() => true);
