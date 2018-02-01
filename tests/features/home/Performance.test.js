import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Performance } from 'src/features/home/Performance';

describe('home/Performance', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Performance {...props} />
    );

    expect(
      renderedComponent.find('.home-performance').getElement()
    ).to.exist;
  });
});
