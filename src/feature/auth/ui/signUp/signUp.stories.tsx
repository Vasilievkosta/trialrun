import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { SignUp } from '@/feature/auth/ui/signUp/SignUp'

const meta = {
  component: SignUp,
  parameters: {},
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpStory: Story = {
  args: {},
  decorators: [
    StoryComponent => (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    ),
  ],
}
