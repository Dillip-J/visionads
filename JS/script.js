// Data for the Services Tabs (Derived from your PDF)
const servicesData = {
    strategic: {
        title: "Strategic Solution",
        desc: "We don't just print; we plan. From B2B/B2C branding strategies to market positioning, our insights ensure your brand is seen by the right eyes.",
        list: ["Brand Identity", "Consulting", "Market Research"]
    },
    signage: {
        title: "Signage & Build",
        desc: "Our core strength. Featuring Unipoles, Glow Sign Boards, LED Boards, and CNC Routing. We dominate outdoor visibility.",
        list: ["LED & Glow Signs", "ACP Elevation", "Steel Fabrication"]
    },
    digital: {
        title: "Digital Marketing",
        desc: "The new frontier. We now offer comprehensive digital performance marketing, SEO, and Social Media management to complement your physical presence.",
        list: ["Social Media", "SEO & SEM", "Lead Gen"]
    },
    print: {
        title: "Print Production",
        desc: "Powered by HP Latex and Roland machinery. We deliver eco-friendly, high-resolution printing for indoors and outdoors.",
        list: ["Eco Solvent", "One Way Vision", "Vehicle Graphics"]
    }
};

// Function to handle tab switching
function showService(key) {
    // 1. Update Tab Styles
    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
    });
    // This assumes the click event is attached to the div
    event.currentTarget.classList.add('active');

    // 2. Update Content with Fade Effect
    const contentBox = document.getElementById('content-display');
    contentBox.style.opacity = '0';

    setTimeout(() => {
        const data = servicesData[key];
        document.getElementById('svc-title').innerText = data.title;
        document.getElementById('svc-desc').innerText = data.desc;
        
        // Rebuild list
        const listContainer = document.getElementById('svc-list');
        listContainer.innerHTML = '';
        data.list.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            listContainer.appendChild(li);
        });

        contentBox.style.opacity = '1';
    }, 200);
}

// Function to toggle the Contact Modal
function toggleContact() {
    const modal = document.getElementById('contact-modal');
    const body = document.body;
    
    // Toggle the active class
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = 'auto'; // Re-enable background scrolling
    } else {
        modal.classList.add('active');
        body.style.overflow = 'hidden'; // Disable background scrolling
    }
}

// Close modal if clicking outside content (Optional UX improvement)
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        const modal = document.getElementById('contact-modal');
        if (modal.classList.contains('active')) {
            toggleContact();
        }
    }
});