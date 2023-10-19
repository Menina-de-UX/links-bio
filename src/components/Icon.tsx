import React from 'react'
import Link from 'next/link'
import { ISocialIcon } from '@/interfaces/components'
import { FaInstagram, FaLinkedin, FaMedium, FaDiscord } from 'react-icons/fa'

const socialIcons: ISocialIcon[] = [
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/meninadeux',
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/company/meninadeux/?originalSubdomain=br',
  },
  {
    icon: FaMedium,
    link: 'https://medium.com/@meninadeux',
  },
  {
    icon: FaDiscord,
    link: 'https://discord.com/invite/X5KgNu6Su8',
  },
]

export function SocialMediaIcon() {
  return (
    <div className="flex gap-5 justify-center">
      {socialIcons.map((socialIcon, index) => (
        <Link
          href={socialIcon.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.createElement(socialIcon.icon, {
            size: 24,
            className: 'text-white hover:text-pink-300',
          })}
        </Link>
      ))}
    </div>
  )
}
