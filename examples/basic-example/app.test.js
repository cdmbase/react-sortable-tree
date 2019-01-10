import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App/>',  ()=> {

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<App/>);
    });

    it('Check length',()=>{
        expect(wrapper).toHaveLength(1);
    });

    it('onClick next', ()=>{

        let nextBtn = wrapper.find('#btnNext');
        expect(nextBtn).toHaveLength(1);
        expect(wrapper.instance().state.scrollToIndex).toEqual(0);
        nextBtn.simulate('click');
        expect(wrapper.instance().state.scrollToIndex).toEqual(1);
        wrapper.update();
        nextBtn = wrapper.find('#btnNext');
        expect(nextBtn.text()).toEqual(`next to ${wrapper.instance().state.scrollToIndex + 1}`);
        nextBtn.simulate('click');
        expect(wrapper.instance().state.scrollToIndex).toEqual(2);
        wrapper.update();
        nextBtn = wrapper.find('#btnNext');
        expect(nextBtn.text()).toEqual(`next to ${wrapper.instance().state.scrollToIndex + 1}`);

    });





});