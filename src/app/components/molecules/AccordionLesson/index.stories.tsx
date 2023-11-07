import type { Meta, StoryObj } from '@storybook/react';

import { AccordionLesson } from './index';

const meta: Meta<typeof AccordionLesson> = {
  component: AccordionLesson,
  title: 'Atoms/Accordion',
};

export default meta;
type Story = StoryObj<typeof AccordionLesson>;

export const Primary: Story = {
  render: () => (
    <AccordionLesson
      status={'booked'}
      title={'English Lesson 2'}
      date={'Monday, August 21'}
      hour={'09:45 a.m'}
    />
  )
};