import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { ForgotPassword } from '@/feature/auth/ui/forgotPassword/ForgotPassword'

const meta = {
  component: ForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = {
  args: {},
  decorators: [
    StoryComponent => (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    ),
  ],
}
