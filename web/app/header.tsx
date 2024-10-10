'use client'

import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleRight, faAngleUp, faBars, faEnvelope, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showAltPhone, setShowAltPhone] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [showTopBarMenu, setShowTopBarMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const contacts = [
    {
      icon: faPhoneSquareAlt,
      display: '844-PCS-VOIP',
      altDisplay: '844-727-8647',
      href: 'tel:8776083536'
    },
    {
      icon: faMapMarkerAlt,
      display: 'Olathe, KS 66062',
      href: '#'
    },
    {
      icon: faEnvelope,
      display: 'info@pcsusa.com',
      href: 'mailto:info@pcsusa.com'
    }
  ]

  const socialMedia = [
    {
      icon: faFacebook,
      href: '#',
      color: '#4a5c90'
    },
    {
      icon: faLinkedin,
      href: '#',
      color: '#4876aa'
    },
    {
      icon: faInstagram,
      href: '#',
      color: '#2b2f2d'
    },
    {
      icon: faTwitter,
      href: '#',
      color: '#649ddf'
    },
    {
      icon: faYoutube,
      href: '#',
      color: '#a73a30'
    }
  ]

  const loginMenu = [
    {
      title: 'PREMIER',
      href: '#'
    },
    {
      title: 'ELITE - API INTEGRATION',
      href: '#'
    }
  ]

  const links = [
    {
      title: 'Products',
    },
    {
      title: 'Api Integration',
    },
    {
      title: 'Services',
    },
    {
      title: 'About Us',
    },
    {
      title: 'Support',
    },
    {
      title: 'Resources',
    },
    {
      title: 'Contact Us',
      href: '#'
    }
  ]

  return (
    <div>
      <div className="bg-gradient-to-r from-[#047cbf] from-0% to-[#53b94f] h-12 flex items-center">
        <nav className="text-white container mx-auto flex flex-row justify-between items-center h-full px-4">
          <div className="relative md:hidden">
            <button onClick={() => setShowTopBarMenu(!showTopBarMenu)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {
              showTopBarMenu &&
              <div className="absolute text-black bg-white top-8 -left-4">
                <div className="flex flex-col gap-2 divide-y shadow">
                  {
                    contacts.map((c, i) => (
                      <Link key={`c-${i}`} href={c.href} 
                        onMouseEnter={() => {if (i == 0) {setShowAltPhone(true)}}}
                        onMouseLeave={() => {if (i == 0) {setShowAltPhone(false)}}}
                        className="flex flex-row gap-2 items-center px-4 py-2">
                        <FontAwesomeIcon icon={c.icon} className="size-4"/>
                        <label className="text-xs">{i == 0 && showAltPhone ? c.altDisplay : c.display}</label>                 
                      </Link>
                    ))
                  }
                  <div className="flex flex-row gap-2 px-4 py-2 justify-between">
                    {
                      socialMedia.map((m, i) => (
                        <Link key={`m-${i}`} href={m.href} className={`bg-[${m.color}]`}>
                          <FontAwesomeIcon icon={m.icon} className="size-4"/>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            }            
          </div>
          <div className="hidden md:flex flex-row gap-4">
          {
            contacts.map((c, i) => (
              <Link key={`c-${i}`} href={c.href} 
                onMouseEnter={() => {if (i == 0) {setShowAltPhone(true)}}}
                onMouseLeave={() => {if (i == 0) {setShowAltPhone(false)}}}
                className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={c.icon} className="size-4"/>
                <label className="text-xs hidden lg:inline">{i == 0 && showAltPhone ? c.altDisplay : c.display}</label>                 
              </Link>
            ))
          }
          </div>
          <div className="hidden md:flex flex-row gap-2">
          {
            socialMedia.map((m, i) => (
              <Link key={`m-${i}`} href={m.href} className={`bg-[${m.color}]`}>
                <FontAwesomeIcon icon={m.icon} className="size-6"/>
              </Link>
            ))
          }
          </div>
          <div className="hidden md:flex items-center text-sm h-full relative"
            onMouseEnter={() => setShowLoginMenu(true) }
            onMouseLeave={() => setShowLoginMenu(false) }>
            <button className="flex flex-row gap-2 items-center"
              onClick={() => setShowLoginMenu(!showLoginMenu)}>
              LOGIN
              <FontAwesomeIcon icon={showLoginMenu ? faAngleUp : faAngleDown} />
            </button>
            {
              showLoginMenu &&
              <div className="absolute top-12 -left-4 text-black w-52 shadow bg-white">
                <ul className="divide-y">
                  {
                    loginMenu.map((l, i) => (
                      <li className="py-2 px-4"><Link href={l.href}>{l.title}</Link></li>
                    ))
                  }
                </ul>
              </div>
            }        
          </div>
          <div>
            <button className="bg-[#3a3a3a] px-4 py-1 text-sm rounded-md border-white border-[1px]">GET A FREE QUOTE</button>
          </div>
        </nav>
      </div>
      <div className="container mx-auto text-sm flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 my-4">
        <div>
          <img src="PCSlogo_color_right-300x127.png" alt="PCSVoIP logo" className="h-24" />
        </div>
        <div className="flex flex-col lg:hidden items-center relative gap-2 w-full">
          <button className="flex flex-row gap-2 items-center font-bold"
            onClick={() => setShowMenu(!showMenu)}>
            MENU
            <FontAwesomeIcon icon={faBars} />
          </button>          
          {
            showMenu &&
            <div className="text-left divide-y border-[1px] relative w-full">
              {
                links.map((l, i) => (
                  <div key={`l-${i}`} className="px-4 py-2">
                    {
                      l.href ?
                      <Link href={l.href}>{l.title}</Link> :
                      <button className="flex flex-row gap-2 items-center">
                        {l.title}
                        <FontAwesomeIcon icon={faAngleRight}/>
                      </button>
                    }                
                  </div>
                ))
              }
            </div>
          }
        </div>
        <div className="hidden lg:flex flex-row gap-8">
          {
            links.map((l, i) => (
              <div key={`l-${i}`}>
                {
                  l.href ?
                  <Link href={l.href}>{l.title}</Link> :
                  <button className="flex flex-row gap-2 items-center">
                    {l.title}
                    <FontAwesomeIcon icon={faAngleDown}/>
                  </button>
                }                
              </div>
            ))
          }
        </div>        
      </div>
    </div>
  )
}