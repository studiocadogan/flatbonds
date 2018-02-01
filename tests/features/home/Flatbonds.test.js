import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Flatbonds } from 'src/features/home/Flatbonds';

describe('home/Flatbonds', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Flatbonds {...props} />
    );

    expect(
      renderedComponent.find('.home-flatbonds').getElement()
    ).to.exist;
  });
});
