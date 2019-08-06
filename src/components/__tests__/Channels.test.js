import React from 'react';
import { shallow } from '../../enzyme';

import Channels from '../Channels/Channels';

describe('Channel tests', () => {

	// expects wrapper to be defined and channels to be rendered
  it('renders channels', () => {
    const channels = ['one', 'two', 'three', 'three'];
    const wrapper = shallow(<Channels channels={channels} />);
    expect(wrapper.find('.channels--list')).toBeDefined();
    expect(wrapper.find('.channels--portal')).toHaveLength(channels.length);
	});

});