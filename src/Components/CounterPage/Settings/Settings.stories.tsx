import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import {Settings} from "./Settings";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Settings',
    component: Settings,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Settings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Settings> = (args) => <Settings {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    setPage: action('page changed'),
    setMaxValue: action('maxV changed'),
    setStartValue: action('startV changed'),
    setCounter: action('counter changed'),

};

