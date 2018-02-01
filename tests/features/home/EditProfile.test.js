import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { EditProfile } from 'src/features/home/EditProfile';

describe('home/EditProfile', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <EditProfile {...props} />
    );

    expect(
      renderedComponent.find('.home-edit-profile').getElement()
    ).to.exist;
  });
});
