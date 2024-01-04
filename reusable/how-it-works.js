class HowItWorks extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
  

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />

<section>
<div class="custom-wrapper">
    <div class="white-box mb-[20px] mb:mb-[30px]" data-aos="fade-up" data-aos-duration="1500">
        <p class="heading-2 text-center mb-[15px] max-w-[597px] md:mx-auto text-white">How it  <span
                class="heading-2 text-[#FDBC42]">Works? </span></p>

        <p class="body-text text-center text-[#CDD0D2] mb-[20px] lg:max-w-[806px] md:mx-auto">
        We adhere to established standards, proven practices, and transparent Software Development Life Cycle (SDLC) processes. Every project undergoes distinct stages, including initiation, discovery, design, engineering, testing, deployment, and closure. Each stage is crucial and requires meticulous coordination from both parties. Additionally, ongoing technical support and maintenance services are available upon request, and the essential steps are outlined below.
        </p>



        <a href="/contact.html"
            class="button-purple-bg-white mb-[20px] md:mb-[65px] lg:mb-[63px]">Learn more</a>
        <div class="pb-4">
        <picture>
        <!-- Small screen image -->
        <source media="(max-width: 767px)" srcset="images/how-it-works-s.svg" >
      
        <!-- Medium screen image -->
        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="images/how-it-works-m.png" >
      
        <!-- Large screen image -->
        <source media="(min-width: 1024px)" srcset="images/how-it-works-l.png" >
      
        <!-- Default fallback image for browsers that do not support srcset -->
        <img src="mages/how-it-works-m.png" alt="Description of the image" class="mx-auto">
      </picture>

        </div>

    </div>

</div>
</section>
      `
  }
}

customElements.define('how-it-works-component', HowItWorks)
