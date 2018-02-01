import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FilterRow } from 'src/features/home';

describe('home/FilterRow', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <FilterRow />
    );

    expect(
      renderedComponent.find('.home-filter-row').getElement()
    ).to.exist;
  });
});
