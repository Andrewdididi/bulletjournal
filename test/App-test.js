import React from 'react';

import App from '../src/components/App/App';

describe('<App />', () => {
  it('contains title', ()=> {
    let wrapper = shallow( <App />)
    expect(wrapper.find('.app-container')).to.exist;
  });
});
