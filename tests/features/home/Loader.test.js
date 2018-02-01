import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Loader } from 'src/features/home';

describe('home/Loader', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Loader />
    );

    expect(
      renderedComponent.find('.home-loader').getElement()
    ).to.exist;
  });
});
