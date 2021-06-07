import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';

test('renders Tooltip', () => {
  const hiddenText = 'Hidden tooltip';
  const shownText = 'Shown tooltip';
  render(<Tooltip hidden={true} text={hiddenText} top="0px" left="0px" />);
  render(<Tooltip hidden={false} text={shownText} top="0px" left="0px" />);

  const hiddenTooltipElement = screen.getByText(hiddenText);
  const shownTooltipElement = screen.getByText(shownText);

  expect(shownTooltipElement).toBeInTheDocument();
  expect(hiddenTooltipElement).toBeInTheDocument();
  expect(shownTooltipElement).toBeVisible();
  // expect(hiddenTooltipElement).not.toBeVisible(); // Doesn't work. See https://github.com/testing-library/jest-dom/issues/209
});
