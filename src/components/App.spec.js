import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { App } from './App';
import posts from '../fixtures'

describe('<App />', () => {
    const props = {
        loadPosts() {},
        posts,
        loaded: false,
        loading: false,
        sortPosts() {},
    };

    it('should render posts table', () => {
        const wrapper = mount(<App { ...props }/>);

        expect(wrapper.find('#posts-table').exists()).toBe(true);
    });

    it('should render Loader', () => {
        const mocProps = { ...props, loading: true };
        const wrapper = mount(<App { ...mocProps }/>);

        expect(wrapper.find('.loader').exists()).toBe(true);
    });

    it('should call loadPosts once', () => {
        const mocProps = { ...props, loadPosts: sinon.spy() };

        mount(<App { ...mocProps }/>);
        expect(mocProps.loadPosts.calledOnce).toBe(true)
    });

    it('should call sortPosts', () => {
        const mocProps = { ...props, sortPosts: sinon.spy() };
        const wrapper = mount(<App { ...mocProps }/>);
        const columns = wrapper.find('.table-head')

        columns.children().forEach(node => {
            node.simulate('click');
            expect(mocProps.sortPosts.called).toBe(true);
        });
    })
})
