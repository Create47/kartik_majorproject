import { Navbar } from "flowbite-react"
export default function Flownavbar(){
    return(
    <>
    <Navbar
  fluid={true}
  rounded={true}
  classname =" bg-dark"
>
  <Navbar.Brand
   
    
  >
    <img
      src="img1.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      PRINTEREST CLONE
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      
    >
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </>)
}