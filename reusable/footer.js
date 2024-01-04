class Footer extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
  

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />

<footer class="bg-[#5152fb] rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="images/logo-white.png" class="mr-3 h-20"/>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                <li> 
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="/contact.html" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  href="/contact.html" class="hover:underline">OriginMaster</a>. All Rights Reserved.</span>
    </div>
</footer>

      `
  }
}

customElements.define('footer-component', Footer)
