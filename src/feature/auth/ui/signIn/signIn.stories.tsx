import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { SignIn } from '@/feature/auth/ui/signIn/SignIn'

const meta = {
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInStory: Story = {
  args: {},
  decorators: [
    StoryComponent => (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    ),
  ],
}
