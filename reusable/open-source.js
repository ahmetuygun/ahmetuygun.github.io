class OpenSource extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `

<section>
<div class="custom-wrapper">
    <div class="white-box mb-[20px] mb:mb-[30px]" data-aos="fade-up" data-aos-duration="1500">
        <p class="heading-2 text-center mb-[15px] max-w-[597px] md:mx-auto text-white">We ❤️ <span
                class="heading-2 text-[#FDBC42]">Open Source</span></p>

        <p class="body-text text-center text-[#CDD0D2] mb-[20px] lg:max-w-[806px] md:mx-auto">
            At OriginMaster, we love open source! We support and use cool tech like Java and JavaScript,
            plus other open-source tools. This teamwork approach helps us create awesome solutions that stay
            up-to-date. Embracing open source means our clients get the best in tech innovation.
        </p>



        <a  href="/contact.html"
            class="button-purple-bg-white mb-[20px] md:mb-[30px] lg:mb-[40px]">Learn more</a>
            <div>
            <div class="grid calculated-grid gap-1">
            
            <img src="images/tech-stack/fr2.png"  alt="Frame 2" loading="lazy">
            <img src="images/tech-stack/fr3.png"  alt="Frame 3" loading="lazy">
            <img src="images/tech-stack/fr4.png"  alt="Frame 4" loading="lazy">
            <img src="images/tech-stack/fr5.png"  alt="Frame 5" loading="lazy">
           
            <img src="images/tech-stack/fr6.png"  alt="Frame 6" loading="lazy">
            <img src="images/tech-stack/fr1.png"  alt="Frame 1" loading="lazy">
            <img src="images/tech-stack/fr7.png"  alt="Frame 7" loading="lazy">
            <img src="images/tech-stack/fr8.png"  alt="Frame 8" loading="lazy">
            <img src="images/tech-stack/fr9.png"  alt="Frame 9" loading="lazy">
            <img src="images/tech-stack/fr10.png"  alt="Frame 10" loading="lazy">
      
            </div>
        </div>

    </div>

</div>
</section>
      `
    }
}

customElements.define('opensource-component', OpenSource)
