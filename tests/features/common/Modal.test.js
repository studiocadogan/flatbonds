import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Modal } from 'src/features/common/Modal';

describe('common/Modal', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Modal {...props} />
    );

    expect(
      renderedComponent.find('.common-modal').getElement()
    ).to.exist;
  });
});
