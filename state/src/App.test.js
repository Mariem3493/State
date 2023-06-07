/*importation des fonctionnalités render et screen*/
import { render, screen } from '@testing-library/react';
/*importation du composant App*/
import App from './App';
/*Fonction pour rendre le composant App*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
