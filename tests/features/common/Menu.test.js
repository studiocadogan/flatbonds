import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Menu } from 'src/features/common';

describe('common/Menu', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Menu />
    );

    expect(
      renderedComponent.find('.common-menu').getElement()
    ).to.exist;
  });
});
