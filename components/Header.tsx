import React from 'react';

interface HeaderProps {
  HeaderTitle: string
}

export default function Header({ HeaderTitle }: HeaderProps) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
          <a href="#!" className="brand-logo">{HeaderTitle}</a>
      </div>
    </nav>
  )
}
