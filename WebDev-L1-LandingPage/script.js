const areaSelect = document.getElementById('area-select');
const placeResults = document.getElementById('destination-container');

const regions ={
    "vizag": [
    {
        name: "RK Beach",
        image:"images/RK beach.jpg",
        description:"RK Beach is a popular beach located in Visakhapatnam, Andhra Pradesh, India. It is known for its scenic beauty, golden sands, and vibrant atmosphere. The beach is a favorite spot for locals and tourists alike, offering opportunities for relaxation, beach activities, and enjoying the stunning sunset views over the Bay of Bengal."
    },
   {
        name: "Rushikonda Beach",
        image:"images/Rushikonda beach.jpg",
        description:"Rushikonda Beach is a beautiful beach located in Visakhapatnam, Andhra Pradesh, India. It is known for its pristine golden sands, clear blue waters, and scenic surroundings. The beach is a popular destination for tourists and locals alike, offering opportunities for swimming, sunbathing, and water sports activities. Rushikonda Beach is also famous for its picturesque sunsets and is a great place to relax and enjoy the coastal beauty of the region."
    },
    {
        name: "Kailasagiri",
        image:"images/Kailasagiri.jpg",
        description:"Kailasagiri is a hilltop park located in Visakhapatnam, Andhra Pradesh, India. It is known for its panoramic views of the city, the Bay of Bengal, and the surrounding hills. The park features beautifully landscaped gardens, walking trails, and a giant statue of Lord Shiva and Parvati. Visitors can enjoy cable car rides to reach the top of the hill, where they can take in the breathtaking vistas and explore various attractions within the park."
    },
    {
        name: "Thotlakonda Buddist Complex",
        image:"images/Thotlakonda-Monastery.jpg",
        description:"Thotlakonda is a historic Buddhist monastery located in Visakhapatnam, Andhra Pradesh, India. It is known for its ancient stupas, rock-cut caves, and serene atmosphere. The site is a significant pilgrimage destination for Buddhist devotees and a popular spot for cultural and historical tourism. Visitors can explore the well-preserved ruins and learn about the rich Buddhist heritage of the region."
    },
    {
        name: "Simhachalam Temple",
        image:"images/Simhachalam-Temple.jpg",
        description:"Simhachalam Temple is a famous Hindu temple located in Visakhapatnam, Andhra Pradesh, India. It is dedicated to Lord Narasimha, an incarnation of Lord Vishnu. The temple is known for its unique architecture, intricate carvings, and spiritual significance. Devotees and tourists visit the temple to seek blessings and experience the rich cultural and religious heritage of the region."
    }
],
"bheemili": [
    {
        name: "Bheemili Beach",
        image: "images/Bheemili-beach.jpg",
        description: "Bheemili Beach is a serene coastal destination located in the Visakhapatnam district of Andhra Pradesh, India. Known for its clean sands and tranquil atmosphere, it offers a peaceful retreat away from the hustle and bustle of city life. The beach is perfect for relaxation, with opportunities for swimming and water sports."
    },
    {
        name: "Dutch Cemetery",
        image: "images/Dutch-cemetery.jpg",
        description: "The Dutch Cemetery in Bheemili is a historical site that reflects the colonial past of the region. It is a resting place for Dutch settlers and features well-preserved tombstones and monuments. The cemetery offers a glimpse into the history and heritage of Bheemili, making it an interesting spot for history enthusiasts."
    },
    {
        name: "St. Peter's Church",
        image: "images/St-Peters-Church.jpg",
        description: "St. Peter's Church in Bheemili is a beautiful example of colonial architecture. The church features stunning stained glass windows and a peaceful ambiance, making it a popular spot for both worship and tourism."
    },
    {
        name: "Pavuralakonda",
        image: "images/Pavuralakonda.jpg",
        description: "Pavuralakonda is an ancient Buddhist site located near Bheemili. It is known for its rock-cut caves and historical significance. The site offers a unique opportunity to explore the rich cultural heritage of the region and learn about the Buddhist influence in Andhra Pradesh."
    }
],
"anakapalli": [
    {
        name: "Bojjana Konda",
        image: "images/Bojjana-Konda.jpg",
        description: "Bojjana Konda is an ancient Buddhist site located near Anakapalli. It features rock-cut caves and stupas, offering a glimpse into the region's historical and religious significance. The site is a popular destination for history enthusiasts and those interested in Buddhist architecture."
    },
    {
        name: "Kondakarla Ava Lake",
        image: "images/kondakarla ava Lake.jpg",
        description: "Kondakarla Ava is a tranquil freshwater lake and bird sanctuary surrounded by coconut groves and Eastern Ghats. It is a haven for birdwatchers and nature lovers, providing opportunities to observe various species of birds in their natural habitat. The serene environment and scenic beauty make it an ideal spot for photography and relaxation."
        
    },
    {
        name: "devipuram Temple",
        image: "images/devipuram temple.jpg",
        description: "Devipuram is a unique spiritual destination located near Anakapalli. It is known for its distinctive architecture and the presence of the Goddess Sri Vidya. The temple complex features intricate carvings and sculptures, attracting devotees and tourists alike. Devipuram offers a serene environment for meditation and spiritual exploration."
    },
    {
        name: "pudimadaka lighthouse",
        image: "images/pudimadaka lighthouse.jpg",
        description: "Visiting Pudimadaka Lighthouse Anakapalli offers travelers a rare behind-the-scenes glimpse into heritage maritime technology. The historical origins of Pudimadaka Lighthouse Anakapalli trace back to the era of expanding global ocean trade. Pudimadaka Lighthouse Anakapalli stands as a commanding sentinel of maritime navigation along the Maritime Coastal Seaboard of India."
    }
],
"araku": [
    {
        name: "Araku Valley",
        image: "images/araku valley.jpg",
        description: "Araku Valley is a scenic hill station located in the Visakhapatnam district of Andhra Pradesh. Known for its lush greenery, waterfalls, and coffee plantations, it offers a peaceful retreat from the hustle and bustle of city life."
    },
    {
        name: "Tribal Museum",
        image: "images/tribal-museum.jpg",
        description: "The Tribal Museum in Araku Valley showcases the rich cultural heritage and traditional lifestyle of the indigenous tribes of the region. Visitors can explore exhibits featuring artifacts, clothing, and handicrafts that reflect the unique identity and customs of the local communities."
    },
    {
    name: "Borra Caves",
    image: "images/borra-caves.jpg",
    description: "Borra Caves are limestone caves located near Araku Valley, known for their stunning stalactites and stalagmites formations. The caves are a popular tourist attraction, offering guided tours that provide insights into the geological history and natural beauty of the area."
    },
    {
        name: "Chaparai Waterfalls",
        image: "images/chaparai-waterfalls.jpg",
        description: "Chaparai Waterfalls is a picturesque cascade located in the Araku Valley, known for its scenic beauty and tranquil surroundings. The falls are a popular spot for nature lovers and photographers, offering a serene environment to enjoy the natural landscape."
    },
    {
        name: "Coffee Plantations",
        image: "images/coffee-plantation.jpg",
        description: "Araku Valley is renowned for its coffee plantations, which produce high-quality Arabica coffee. Visitors can tour the plantations to learn about the coffee cultivation process, from planting to harvesting, and even sample freshly brewed coffee. The plantations offer a unique opportunity to experience the agricultural heritage of the region."
    },
    {
        name: "Padmapuram Gardens",
        image: "images/padmapuram-gardens.jpg",
        description: "Padmapuram Gardens is a beautifully landscaped garden located in Araku Valley, featuring a variety of plants, flowers, and trees. The gardens offer a peaceful environment for relaxation and leisurely walks, with well-maintained pathways and scenic viewpoints."
    },
    {
        name: "Coffee Museum",
        image: "images/coffee-museum.jpg",
        description: "The Coffee Museum in Araku Valley provides an immersive experience into the history and culture of coffee cultivation in the region. Visitors can learn about the journey of coffee from bean to cup, explore interactive exhibits, and enjoy tastings of locally grown coffee varieties."
    },
    {
        name: "Ananthagiri Hills",
        image: "images/ananthagiri-hills.jpg",
        description: "Ananthagiri Hills is a scenic hill range located near Araku Valley, offering panoramic views of the surrounding landscape. The hills are ideal for trekking and nature walks, providing opportunities to explore the diverse flora and fauna of the region."
    }
],
"madugula": [
    {
        name: "vanjangi Hills",
        image: "images/vanjangi-hills.jpg",
        description: "vanjangi Hills is a scenic hill range located near Madugula, offering panoramic views of the surrounding landscape. The hills are ideal for trekking and nature walks, providing opportunities to explore the diverse flora and fauna of the region."
    },
    {
        name: "Modakondamma temple",
        image: "images/modakondamma-temple.jpg",
        description: "Modakondamma temple is a historic temple located in Madugula, known for its architectural beauty and spiritual significance. The temple is a popular destination for devotees and tourists, offering a glimpse into the rich cultural heritage of the region."
    },
    {
        name: "Paderu",
        image: "images/paderu.jpg",
        description: "Paderu is a picturesque town located in the Visakhapatnam district of Andhra Pradesh, surrounded by lush greenery and hills. It serves as a gateway to the Araku Valley and is known for its pleasant climate and natural beauty."
    },
    {
        name: "matsyagundam Waterfalls",
        image: "images/matsyagundam-waterfalls.jpg",
        description: "matsyagundam Waterfalls is a stunning cascade of waterfalls located in Madugula, surrounded by lush greenery and scenic beauty. The waterfalls are a popular destination for nature lovers and photographers, offering a refreshing escape from the hustle and bustle of city life."
    },
    {
        name: "lambasingi",
        image: "images/lambasingi.jpg",
        description: "lambasingi is a serene location located in Madugula, known for its tranquil environment and natural beauty. It offers a peaceful retreat for those seeking to connect with nature and unwind from the stresses of daily life."
    }
],
"vizianagaram": [
    {
        name: "Ramanarayanam",
        image: "images/ramanarayanam.jpg",
        description: "Ramanarayanam is a sacred site located in vizianagaram, known for its spiritual significance and beautiful surroundings. It is a popular destination for pilgrims and nature enthusiasts alike."
    },
    {
        name: "Vizianagaram Fort",
        image: "images/fort vizianagaram.jpg",
        description: "Vizianagaram Fort is a historic fort located in vizianagaram, known for its architectural grandeur and historical importance. The fort offers a glimpse into the rich cultural heritage of the region and is a popular tourist attraction."
    },
    {
        name: "ramateertham temple",
        image: "images/ramateertham-temple.jpg",
        description: "ramateertham temple is a historic temple located in vizianagaram, known for its architectural beauty and spiritual significance. The temple is a popular destination for devotees and tourists, offering a glimpse into the rich cultural heritage of the region."
    },
    {
        name: "Tatipudi Reservoir",
        image: "images/tatipudi-reservoir.jpg",
        description: "Tatipudi Reservoir is a scenic spot located in vizianagaram, known for its natural beauty and recreational opportunities. The reservoir offers a peaceful retreat for those seeking to enjoy the outdoors and connect with nature."
    },
    {
        name: "punyagiri",
        image: "images/punyagiri.jpg",
        description: "Punyagiri Temple is more than just a religious site ,its a peaceful retreat for the soul. Surrounded by lush greenery and nestled in the Eastern Ghats."
    },
    {
        name: "thotapalli barrage",
        image: "images/thotapalli-barrage.jpg",
        description: "Thotapalli Barrage is a significant water resource located in vizianagaram, known for its role in irrigation and water management. The barrage provides a vital source of water for agriculture and supports the local ecosystem."
    },
    {
        name: "pydithalli ammavari temple",
        image: "images/pydithalli-ammavari-temple.jpg",
        description: "Pydithalli Ammavari Temple is a revered religious site located in vizianagaram, known for its spiritual significance and architectural beauty. The temple is a popular destination for devotees and tourists, offering a serene environment for reflection and worship."
    },
   
],
};

areaSelect.addEventListener('change', function() {
    const selectedRegion = regions[areaSelect.value];
    
    if(!selectedRegion) {
        placeResults.innerHTML = 
        "<p>Select a region to discover it's attractions.</p>";
        return;
    }
    
        placeResults.innerHTML = selectedRegion.map(function(place){
          return`
        <article class="destination-card">
            <img
                class="destination-image"
                src="${place.image}"
                alt="${place.name}"
            >

            <div class="destination-info">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        </article>
        `;
        }).join('');
});