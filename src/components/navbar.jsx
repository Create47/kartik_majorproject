import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
export default function Flownavbar(){
    return(
    <>
   <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="kar.jpeg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    <Button gradientDuoTone="tealToLime">
      kartik project
    </Button>
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
<Button gradientMonochrome="info">
     home
    </Button>

    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Button gradientMonochrome="info">
     about
    </Button>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Button gradientMonochrome="success">
      services
    </Button>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Button gradientMonochrome="success">
      pricing
    </Button>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Button gradientMonochrome="failure">
      contact
    </Button>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</>
)}