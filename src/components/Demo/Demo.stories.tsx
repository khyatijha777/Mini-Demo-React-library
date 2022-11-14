import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Demo from "./Demo";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Demo',
    component: Demo,
  } as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const DefaultDemo = Template.bind({});

DefaultDemo.args = {
  /*👇 The args you need here will depend on your component */
  name : "Khyati"
};