import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="bg-white md:bg-opacity-90  md:px-10 py-1">
        <Navbar fluid={true} rounded={true} className="max-w-6xl">
          <Navbar.Brand href="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              EasyBlurb
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 space-x-1 ">
            <Link href="/signin">
              <Button color="gray">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button
                color="dark"
                className=" text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
              >
                <span>Sign up</span>
                <svg
                  className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Button>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/navbars">
              <span className="font-medium">Reasons to Join</span>{" "}
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <span className="font-medium">App (coming Soon)</span>{" "}
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <span className="font-medium">How it Works</span>{" "}
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <span className="font-medium">Testimonials</span>{" "}
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <span className="font-medium">Contact</span>{" "}
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
