/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { mount } from '@vue/test-utils';
import Calculator from '../components/Calculator3.vue';

describe('Calculator testing', () => {
  it('Test operand1', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue(3);
    expect(wrapper.vm.operand1Input).toBe(3);
  });
  it('Test operand2', () => {
    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name=operand1]');
    operand2Input.setValue(5);
    expect(wrapper.vm.operand1Input).toBe(5);
  });

  it('Test sum method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const sumButton = wrapper.find('button[name="+"]');

    operand1Input.setValue(6);
    operand2Input.setValue(2);
    sumButton.trigger('click');

    expect(wrapper.vm.result).toBe(8);
  });

  it('Test sub method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const SubtractionButton = wrapper.find('button[name="-"]');

    operand1Input.setValue(5);
    operand2Input.setValue(2);
    SubtractionButton.trigger('click');

    expect(wrapper.vm.result).toBe(3);
  });

  it('Test div method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const DivisionButton = wrapper.find('button[name="/"]');
    operand1Input.setValue(4);
    operand2Input.setValue(2);
    DivisionButton.trigger('click');
    expect(wrapper.vm.result).toBe(2);
  });

  test('Test mult method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const MultiplicationButton = wrapper.find('button[name="*"]');
    operand1Input.setValue(5);
    operand2Input.setValue(5);
    MultiplicationButton.trigger('click');
    expect(wrapper.vm.result).toBe(25);
  });

  test('Test pow method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const powButton = wrapper.find('button[name="**"]');
    operand1Input.setValue(4);
    operand2Input.setValue(2);
    powButton.trigger('click');

    expect(wrapper.vm.result).toBe(16);
  });

  test('Test numberDel method', () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    const operand2Input = wrapper.find('input[name=operand2]');
    const integerButton = wrapper.find('button[name="//"]');
    operand1Input.setValue(5);
    operand2Input.setValue(2);
    integerButton.trigger('click');

    expect(wrapper.vm.result).toBe(2);
  });
});
