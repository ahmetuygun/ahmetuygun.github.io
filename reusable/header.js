class Header extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
  

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
<header>
<nav id="navbar" class="border-gray-200 bg-w md:px-4 lg:px-6 py-2.5 fixed w-full top-0 z-50 bg-[#15192c] text-white">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/index.html" class="flex items-center">
            <img src="images/logo-white.png" class="h-20"/>
        </a>
        <div class="flex items-start lg:order-2 pr-6">
            <a  href="/contact.html"  class="hidden sm:block bg-[#5152fb] hover:bg-[#3031f7] focus:ring-4 focus:ring-primary-300 text-lg font-sans rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
            <button data-collapse-toggle="mobile-menu-2"  type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div class="hidden mr-3 justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex ml-5 flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-lg font-sans">
                <li>
                    <a href="/index.html" class="block py-2 pr-4 pl-3 lg:bg-transparent lg:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/services.html" class="block py-2 pr-4 pl-3 lg:bg-transparent lg:p-0" aria-current="page">Services</a>
                </li>
                <li>
                    <a href="/industries.html" class="block py-2 pr-4 pl-3  lg:bg-transparent lg:p-0" aria-current="page">Industries</a>
                </li>
                <li>
                    <a href="/knowledge-center.html" class="block py-2 pr-4 pl-3 lg:bg-transparent lg:p-0" aria-current="page">Knowledge Center</a>
                </li>
             
                <li>
                    <a href="/career.html" class="block py-2 pr-4 pl-3 lg:bg-transparent lg:p-0" aria-current="page">Career</a>
                </li>
                <li>
                    <a href="/contact.html" class="block py-2 pr-4 pl-3 lg:bg-transparent lg:p-0" aria-current="page">Contact</a>
                </li>
           
      
            </ul>
        </div>
    </div>
</nav>
</header>

      `
  }
}

customElements.define('header-component', Header)
