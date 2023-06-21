import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { MyComponent } from '..';

describe('Test MyComponent component', () => {

  test('Should be render MyComponent correctly', () => {

    const { container } = render(<MyComponent/>);

    expect(container.firstChild).toBeInTheDocument()
  });
})