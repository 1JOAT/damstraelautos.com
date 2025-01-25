const cars = [
    {
        name: 'Lexus',
        image: 'statics/cars/is250.jpg',
        link: 'https://www.instagram.com/p/DFOGNGwN9J8',
        description: '💥💥LATEST DEAL💥💥 REGISTERED LEXUS IS250 2008',
    },
    {
        name: 'Kia',
        image: 'statics/cars/kiaoptima.jpg',
        link: 'https://www.instagram.com/p/DCmEub7tUXw',
        description: '💥💥LATEST DEAL💥💥 REGISTERED KIA OPIMA 2015',
    },
    {
        name: 'Benz',
        image: 'statics/cars/gle43benz.jpg',
        link: 'https://www.instagram.com/p/DFOHi0jtWgG',
        description: '💥💥LATEST DEAL💥💥 FOREIGN  MERCEDEZ-BENZ GLE43 2019',
    },
    {
        name: 'Benz',
        image: 'statics/cars/C3002012.jpg',
        link: 'https://www.instagram.com/p/DFOG9pDN_vm',
        description: '💥💥LATEST DEAL💥💥 REGISTERED MERCEDEZ-BENZ C300 2012',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/COROLLASE2012.jpg',
        link: 'https://www.instagram.com/p/DFOGiX-twgl',
        description: '💥💥LATEST DEAL💥💥 REGISTERED TOYOTA COROLA SE 2012',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/CAMRYSE2013.jpg',
        link: 'https://www.instagram.com/p/DFOFgLjtA7_',
        description: '💥💥LATEST DEAL💥💥 REGISTERED TOYOTA CAMRY SE 2013',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/RX3502013.jpg',
        link: 'https://www.instagram.com/p/DFOFLNjt6sJ',
        description: '💥💥LATEST DEAL💥💥 REGISTERED LEXUS RX350 2013',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/RX3502010.jpg',
        link: 'https://www.instagram.com/p/DFOE8cjtPHk',
        description: '💥💥LATEST DEAL💥💥 REGISTERED LEXUS RX350 2010',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/2010AVALON.jpg',
        link: 'https://www.instagram.com/p/DEzwDW_NKGe',
        description: '💥💥LATEST DEAL💥💥 REGISTERED TOYOTA AVALON 2006',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/CAMRY2007.jpg',
        link: 'https://www.instagram.com/p/DEzcbNSNQd2',
        description: '💥💥LATEST DEAL💥💥 REGISTERED TOYOTA CAMRY 2007',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/HIGHLANDER2013.jpg',
        link: 'https://www.instagram.com/p/DD9sp2vtE8t',
        description: '💥💥LATEST DEAL💥💥 REGISTERED TOYOTA HIGHLANDER 2013',
    },
    {
        name: 'Benz',
        image: 'statics/cars/C3002016.jpg',
        link: 'https://www.instagram.com/p/DEVonR6N6uT',
        description: '💥💥LATEST DEAL💥💥 FOREIGN USED MERCEDEZ-BENZ C300 2016',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/ES3502008.jpg',
        link: 'https://www.instagram.com/p/DDOg0rMtdK_',
        description: '💥💥LATEST DEAL💥💥 REGISTERED LEXUS ES350 2008',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/RX3502012.jpg',
        link: 'https://www.instagram.com/p/DDOg0rMtdK_',
        description: '💥💥LATEST DEAL💥💥 REGISTERED LEXUS RX2012 ⬆️ 2015',
    },
    {
        name: 'Benz',
        image: 'statics/cars/ML3502012.jpg',
        link: 'https://www.instagram.com/p/DDXvnJzNu35',
        description: '💥💥LATEST DEAL💥💥 FOREIGN USED MERCEDEZ-BENZ ML350 2012',
    },
    {
        name: 'Hyundai',
        image: 'statics/cars/SONATA2015.jpg',
        link: 'https://www.instagram.com/p/DDNc3YCtpHm',
        description: '💥💥LATEST DEAL💥💥 FOREIGN USED HYUNDAI SONATA 2015',
    },
    {
        name: 'Benz',
        image: 'statics/cars/GLK3502010.jpg',
        link: 'https://www.instagram.com/p/DCzr9_qNZAc',
        description: '💥💥LATEST DEAL💥💥 REGISTERED MERCEDEZ-BENZ GLK350 2010 ⬆️ 2015',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/CAMRYSE2018.jpg',
        link: 'https://www.instagram.com/p/DC4R54Qtnva',
        description: '💥💥LATEST DEAL💥💥 FOREIGN USED TOYOTA CAMRY SE 2018',
    },
];

let currentIndex = 0;
const container = document.querySelector('.grid');
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function updateHero() {
  const hero = document.getElementById("hero");
  const carName = document.getElementById("car-name");
  const carDescription = document.getElementById("car-description");

  hero.style.backgroundImage = `url('${cars[currentIndex].image}')`;
  carName.textContent = cars[currentIndex].name;
  carDescription.textContent = cars[currentIndex].description;

  currentIndex = (currentIndex + 1) % cars.length;
}

function loadCars(){
    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card', 'bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'relative');
        
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('w-full', 'h-120', 'bg-cover', 'bg-center');
        imageDiv.style.backgroundImage = `url('${car.image}')`;
    
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('p-2', 'bg-gray-800', 'bg-opacity-90');
    
        const description = document.createElement('p');
        description.classList.add('text-white', 'mt-4');
        description.textContent = car.description;
    
        descriptionDiv.appendChild(description);
        card.appendChild(imageDiv);
        card.appendChild(descriptionDiv);
    
        const link = document.createElement('a');
        link.href = car.link;
        link.classList.add('block');
    
        link.appendChild(card);
        container.appendChild(link);
    });
}

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

if (window.location.pathname.includes("cars")) {
    loadCars();
} else {
    setInterval(updateHero, 3000);
}

