import React from 'react';

interface HeaderProps {
  HeaderTitle: string

}

export default function Header({ HeaderTitle }: HeaderProps) {
  return (
    <nav>
      <div>
        <a href="#">{HeaderTitle}</a>
      </div>
    </nav>
  )
}
