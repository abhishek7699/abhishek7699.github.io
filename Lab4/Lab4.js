// Sai Abhishek Yeluri

//TMD 541-01 Graduate Student



(function Hero1() {

    //headline change
    document.querySelector(".text-4xl.font-bold.mb-4.text-white.relative.z-20").innerText="Uplift Your Brand with Stellar Marketing"
})();
(function Hero2() {

    //headline quote change
    document.querySelector(".text-xl.mb-6.text-white.relative.z-20").innerText="Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel."
})();

(function GetstartedButton() {

    //Get started button remove
    const getStarted =document.querySelector(".relative.bg-blue-600.text-white.px-6.py-2.rounded.hover\\:bg-blue-700.z-20");
    getStarted.remove();
})();

(function backGroundImage() { 
    // Background Image change
    const element = document.getElementById("hero");
    element.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
})();
    
(function NavBarcolor() {  
    // nav colour change
    const header = document.querySelector("header");
    header.style.backgroundColor = "#1F2937";
})();
(function CenterAlign() {  
    //center align 
    const sectionHeadings = document.querySelectorAll("main section h2");
    sectionHeadings.forEach(function (heading) {
      heading.classList.add("text-center");
    });
})();
  
(function iconColor() {  
    // icon colour change
    const servicesIcons = document.querySelectorAll("#services span.material-symbols-outlined");
    servicesIcons.forEach(function (icon) {
      icon.style.color = "#47C714";
    });
})();

    
(function iconChange() {  
    // icon change
    const digitalIcon = document.querySelector('span[data-icon="digital"]');
    digitalIcon.innerText = "ads_click";
})();
(function gridformat() {    
    // grid format change
    const solutionsGrid = document.querySelector("section#solutions div[data-section='product_cards']");
  
    solutionsGrid.classList.add("lg:grid-cols-4");
})();

(function musicianImage() {  

    // musician image change
    const musiciansImage = document.querySelector('img[alt="Musicians"]');
    musiciansImage.src = "https://picsum.photos/id/453/400/300";
    
})();

(function contactform() {  
    // form alert included
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
  
      
      if (name && email) {
        alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
      } else {
        alert("Please provide a name and email.");
      }
    });
    
  
    console.log("WebPageChange executed successfully!");
})();
    
  //})();
  