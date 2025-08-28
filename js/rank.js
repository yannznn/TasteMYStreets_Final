// === MENU (match discover.html) ===
function openNav() {
  const nav = document.getElementById('myNav');
  if (!nav) return;
  nav.classList.add('menu_width');     // show overlay
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  const nav = document.getElementById('myNav');
  if (!nav) return;
  nav.classList.remove('menu_width');  // hide overlay
  document.body.style.overflow = '';
}

// Close when a menu item is clicked
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('#myNav .overlay-content a:not(.closebtn)')
    .forEach(a => a.addEventListener('click', closeNav));
});

    // Spot details data
    const spotDetails = {
      'gurney-drive': {
        name: 'Gurney Drive Food Court',
        location: 'George Town, Penang',
        image: 'https://www.tripsavvy.com/thmb/9Jzh2oEw1s_agOXhvKH-SXEOX34=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gurney-drive-street-food-penang-59e9aa52d088c00011c80b3e.jpg',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7943.708698659221!2d100.3065705!3d5.4390785!3m2!1i1024!2i768!4f13.1!2m1!1sgurney%20drive%20food%20court!5e0!3m2!1sen!2smy!4v1756274646883!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'The crown jewel of Malaysian street food destinations, Gurney Drive Food Court sits majestically along Penang\'s beautiful coastline. This iconic food haven has been serving locals and tourists since the 1970s, offering an unparalleled variety of authentic Penang street food with stunning sea views. The combination of delicious food and scenic beauty makes this a must-visit destination for any food lover.',
        dishes: [
          { name: 'Char Koay Teow', price: 'RM 6-8' },
          { name: 'Assam Laksa', price: 'RM 5-7' },
          { name: 'Cendol', price: 'RM 3-4' },
          { name: 'Oyster Omelette', price: 'RM 8-10' },
          { name: 'Rojak', price: 'RM 4-6' },
          { name: 'Penang Prawn Noodles', price: 'RM 7-9' }
        ],
        hours: 'Daily: 6:00 PM - 2:00 AM (Peak hours: 7:00 PM - 11:00 PM)',
        tips: 'Visit during weekdays to avoid crowds. Try the famous Char Koay Teow from stall #7. Don\'t miss the sunset while dining. Bring cash as most stalls don\'t accept cards. The sea breeze can get strong, so bring a light jacket.',
        gettingThere: 'Take Rapid Penang bus 101, 102, or 103. If driving, parking can be challenging during peak hours. Grab/taxi is convenient from George Town city center (15-minute ride). Walking distance from many Gurney area hotels.'
      },
      
      'jalan-alor': {
        name: 'Jalan Alor',
        location: 'Bukit Bintang, Kuala Lumpur',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/dd/72/22/jalan-alor.jpg?w=900&h=500&s=1',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.805673628742!2d101.70639817598361!3d3.1459257531703897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362993b6bbf9%3A0xb51e49d2f36c3d3f!2sJln%20Alor%2C%20Bukit%20Bintang%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1756275088382!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Kuala Lumpur\'s most famous food street transforms into a vibrant culinary carnival every night. This bustling pedestrian street in the heart of Bukit Bintang has been feeding hungry souls since the 1960s. With over 50 food stalls and restaurants lining both sides of the street, Jalan Alor offers everything from traditional Chinese dishes to modern fusion cuisine, making it a true melting pot of flavors.',
        dishes: [
          { name: 'BBQ Seafood', price: 'RM 15-25' },
          { name: 'Hokkien Mee', price: 'RM 8-12' },
          { name: 'Satay', price: 'RM 0.80-1.20 per stick' },
          { name: 'Grilled Stingray', price: 'RM 18-22' },
          { name: 'Wong Ah Wah Chicken Wings', price: 'RM 1.50 per wing' },
          { name: 'Durian', price: 'RM 20-40 per kg' }
        ],
        hours: 'Daily: 6:00 PM - 4:00 AM (Some stalls open 24/7)',
        tips: 'Peak hours are 8:00 PM - 12:00 AM, expect crowds. Haggle prices at seafood stalls. Try Wong Ah Wah\'s famous chicken wings. Most stalls accept cards now. Street can get very crowded on weekends.',
        gettingThere: 'Bukit Bintang MRT/Monorail station (5-minute walk). Multiple bus routes stop at Bukit Bintang. Ample paid parking in nearby shopping malls. Central location makes it easily accessible from anywhere in KL.'
      },

      'ipoh-old-town': {
        name: 'Ipoh Old Town',
        location: 'Ipoh, Perak',
        image: 'https://sethlui.com/wp-content/uploads/2023/02/Ong-Kee-800x600.jpg',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9928705974467!2d101.07596467598317!3d4.595299042560217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec7c6bf9ecc9%3A0x30b5a98f71fff4d1!2sIpoh%20Mural!5e0!3m2!1sen!2smy!4v1756275198951!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Step back in time in Ipoh\'s charming Old Town, where traditional kopitiams (coffee shops) housed in colonial-era buildings serve some of Malaysia\'s most beloved comfort foods. Famous worldwide for its bean sprouts grown in limestone-filtered water and the original white coffee, this historic district offers an authentic taste of old Malaysia with its unhurried pace and friendly proprietors.',
        dishes: [
          { name: 'Ipoh Hor Fun', price: 'RM 4-6' },
          { name: 'Bean Sprout Chicken', price: 'RM 8-12' },
          { name: 'White Coffee', price: 'RM 2-3' },
          { name: 'Tau Fu Fah', price: 'RM 1.50-2.50' },
          { name: 'Kai See Hor Fun', price: 'RM 5-7' },
          { name: 'Hakka Mee', price: 'RM 4-6' }
        ],
        hours: 'Most kopitiams: 7:00 AM - 6:00 PM (Closed Mondays for some)',
        tips: 'Visit early morning for the freshest tau fu fah. Lou Wong and Onn Kee are famous for bean sprout chicken. Try white coffee at multiple places to compare. Many shops close early, so plan accordingly.',
        gettingThere: 'Ipoh KTM station is walking distance. Plenty of street parking available. About 2 hours drive from KL. Local buses connect to other parts of Ipoh city.'
      },

      'kuching-waterfront': {
        name: 'Kuching Waterfront Bazaar',
        location: 'Kuching, Sarawak',
        image: 'https://d34vm3j4h7f97z.cloudfront.net/optimized/3X/a/6/a66a9d8831a72be72944cabe6e4f06a3ab11953f_2_666x500.jpeg',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.3411839548203!2d110.34528052598637!3d1.55913876086528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKuching%20Waterfront%20Bazaar!5e0!3m2!1sen!2smy!4v1756275354021!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Overlooking the scenic Sarawak River, Kuching Waterfront Bazaar offers a unique dining experience where you can savor authentic Sarawakian cuisine while enjoying beautiful river views. This food court showcases the diverse culinary heritage of Borneo, featuring dishes you won\'t find anywhere else in Malaysia, making it a must-visit for adventurous food lovers.',
        dishes: [
          { name: 'Sarawak Laksa', price: 'RM 4-6' },
          { name: 'Kolo Mee', price: 'RM 3-5' },
          { name: 'Manok Pansoh', price: 'RM 15-20' },
          { name: 'Midin Belacan', price: 'RM 8-12' },
          { name: 'Ayam Pansoh', price: 'RM 18-25' },
          { name: 'Umai', price: 'RM 8-12' }
        ],
        hours: 'Daily: 11:00 AM - 10:00 PM (Extended hours on weekends)',
        tips: 'Try the authentic Sarawak Laksa - it\'s different from other Malaysian laksas. River views are best during sunset. Some dishes are seasonal based on ingredient availability. Friendly vendors often explain the dishes.',
        gettingThere: 'Walking distance from Kuching city center and major hotels. Kuching airport is 30 minutes by taxi. River taxi available from other side of Sarawak River. Limited parking, walking recommended.'
      },

      'jonker-street': {
        name: 'Jonker Street Night Market',
        location: 'Melaka Historic City',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/43/21/a1/the-jonker-street-night.jpg?w=900&h=500&s=1',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.4410373707524!2d102.24225939839475!3d2.1982845000000264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f19e716f77ad%3A0x2e916c50477487b4!2sJonker%20Walk%20Night%20Market!5e0!3m2!1sen!2smy!4v1756275422938!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Every Friday, Saturday, and Sunday night, the UNESCO World Heritage site of Jonker Street transforms into a vibrant night market filled with the aromas of Peranakan and Portuguese-influenced cuisine. This historic street, lined with centuries-old shophouses, offers a unique blend of cultural flavors that reflect Melaka\'s rich multicultural heritage.',
        dishes: [
          { name: 'Chicken Rice Balls', price: 'RM 6-8' },
          { name: 'Cendol', price: 'RM 2-3' },
          { name: 'Satay Celup', price: 'RM 0.70-1 per stick' },
          { name: 'Nyonya Laksa', price: 'RM 5-7' },
          { name: 'Onde-onde', price: 'RM 1-2 per piece' },
          { name: 'Portuguese Grilled Fish', price: 'RM 12-18' }
        ],
        hours: 'Friday - Sunday: 6:00 PM - 12:00 AM (Night market only)',
        tips: 'Only operates Friday-Sunday nights. Arrive early to avoid crowds. Try multiple cendol stalls to compare. Heritage buildings provide great photo opportunities. Cash only for most vendors.',
        gettingThere: 'Melaka Sentral bus terminal is 20 minutes away. Plenty of parking in nearby areas. Walking distance from most Melaka hotels. Trishaw rides available for a cultural experience.'
      },

      'kk-waterfront': {
        name: 'KK Waterfront Night Market',
        location: 'Kota Kinabalu, Sabah',
        image: 'https://c8.alamy.com/comp/2HNBNA8/night-market-kota-kinabalu-sabah-borneo-malaysia-during-chinese-new-year-celebrations-before-pandemic-2HNBNA8.jpg',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.078301195989!2d116.07042357598499!3d5.983956529195989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b698efbfa4e37%3A0xefe7061f70f8ceb4!2sWaterfront%20Seafood%20Night%20Market!5e0!3m2!1sen!2smy!4v1756275508460!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Set against the backdrop of stunning South China Sea sunsets, KK Waterfront Night Market is a seafood lover\'s paradise. This coastal night market offers the freshest catch of the day alongside unique Sabahan delicacies, providing visitors with an authentic taste of Borneo\'s diverse culinary traditions in a picturesque waterfront setting.',
        dishes: [
          { name: 'BBQ Seafood Platter', price: 'RM 25-40' },
          { name: 'Hinava (Raw Fish)', price: 'RM 12-15' },
          { name: 'Grilled Fish', price: 'RM 15-25' },
          { name: 'Sabah Vegetable', price: 'RM 6-10' },
          { name: 'Teh Tarik', price: 'RM 2-3' },
          { name: 'Local Fruits', price: 'RM 5-15' }
        ],
        hours: 'Daily: 5:00 PM - 11:00 PM (Best sunset viewing: 6:00-7:00 PM)',
        tips: 'Arrive by 6 PM for best sunset views. Seafood is sold by weight - ask for prices first. Try Hinava, it\'s a local delicacy. Sunset timing varies by season. Mosquito repellent recommended.',
        gettingThere: 'Central location in KK city. Walking distance from major hotels. Taxi/Grab readily available. KK airport is 30 minutes away. Limited parking, early arrival recommended.'
      },

      'ss2-wai-sek-kai': {
        name: 'SS2 Wai Sek Kai',
        location: 'Petaling Jaya, Selangor',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3j5NlVHULivS7GWBMJF9MpI-uPjju7LDGSBj3MR8_nvib7H_ycrkkYU5jRgKwKBx7iDueCAbSOLR5bhPWQMpQqE11VJA6n8F_Uzq_0-8-6aIeeBGcf4LRcoBPeWM0dc8hZWhssbYVvk/w1200-h630-p-k-no-nu/DSCF4323.JPG',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9116953388507!2d101.61629738573367!3d3.1180592452560507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c8e5aaebaf%3A0x1686b7e68951e9f2!2sSS2%20Selera%20Malam!5e0!3m2!1sen!2smy!4v1756275623263!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'A well-kept secret among locals, SS2 Wai Sek Kai (Food Street) is a no-frills food court that serves some of the most authentic and affordable Malaysian Chinese cuisine in the Klang Valley. This unpretentious spot proves that the best food often comes from the most unassuming places, with recipes perfected over decades by passionate vendors.',
        dishes: [
          { name: 'Pan Mee', price: 'RM 4-6' },
          { name: 'Wonton Mee', price: 'RM 4-6' },
          { name: 'Economy Rice', price: 'RM 5-8' },
          { name: 'Fish Ball Noodles', price: 'RM 4-6' },
          { name: 'Curry Noodles', price: 'RM 4-7' },
          { name: 'Herbal Tea', price: 'RM 1.50-2.50' }
        ],
        hours: 'Daily: 6:30 AM - 2:30 PM, 5:30 PM - 9:30 PM',
        tips: 'Popular with office workers during lunch. Very affordable prices. Most vendors speak Cantonese/Hokkien. Limited English menus. Cash only. Gets crowded during meal times.',
        gettingThere: 'Taman Bahagia LRT station (10-minute walk). Multiple bus routes serve SS2 area. Ample street parking available. About 20 minutes from KL city center.'
      },

      'pasar-payang': {
        name: 'Pasar Payang',
        location: 'Kuala Terengganu, Terengganu',
        image: 'https://cdn4.premiumread.com/?url=https://malaymail.com/malaymail/uploads/images/2023/11/01/159887.JPG&w=1000&q=100&f=jpg&t=6',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.519711964717!2d103.13353967598377!3d5.337325535807814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7be79ae171233%3A0x81078a59d7270577!2sPasar%20Payang!5e0!3m2!1sen!2smy!4v1756275666065!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        description: 'Located in the heart of Kuala Terengganu, Pasar Payang is a traditional wet market that transforms into a food lover\'s paradise. This authentic east coast market showcases the best of Terengganu cuisine, from the famous Nasi Dagang to various keropok varieties, all prepared using traditional recipes passed down through generations.',
        dishes: [
          { name: 'Nasi Dagang', price: 'RM 4-6' },
          { name: 'Keropok Lekor', price: 'RM 3-5' },
          { name: 'Satar', price: 'RM 2-3 per piece' },
          { name: 'Nasi Minyak', price: 'RM 5-7' },
          { name: 'Ikan Bakar', price: 'RM 8-12' },
          { name: 'Akok', price: 'RM 1-2 per piece' }
        ],
        hours: 'Daily: 6:00 AM - 6:00 PM (Best variety: 7:00 AM - 12:00 PM)',
        tips: 'Early morning has the best selection. Try different types of keropok. Nasi Dagang is usually sold out by noon. Bring cash, bargaining is acceptable. Traditional market atmosphere.',
        gettingThere: 'Central location in Kuala Terengganu city. Walking distance from Sultan Mahmud Airport (15 minutes). Local bus services available. Limited parking, arrive early.'
      },

      'kelantan-night-market': {
        name: 'Kota Bharu Night Market',
        location: 'Kota Bharu, Kelantan',
        image: 'https://media.gettyimages.com/id/487312461/photo/night-market-in-kota-bharu.jpg?s=1024x1024&w=gi&k=20&c=KEu8Un1U_IhO_TeV-v8d4FBedLYSwmLIzpEXI6owazg=',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.98443958034!2d102.2092111693077!3d6.114131629507272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6afcfabef489d%3A0xbbd44b994b74a41b!2sNight%20Market!5e0!3m2!1sen!2smy!4v1756275727827!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' ,
        description: 'Immerse yourself in the cultural heartland of Malaysia at Kota Bharu\'s night market, where traditional Kelantanese cuisine takes center stage. This authentic market offers dishes that are unique to the region, prepared using age-old recipes and techniques that reflect the rich cultural heritage of the east coast.',
        dishes: [
          { name: 'Nasi Kerabu', price: 'RM 4-6' },
          { name: 'Ayam Percik', price: 'RM 6-8' },
          { name: 'Solok Lada', price: 'RM 3-5' },
          { name: 'Laksam', price: 'RM 3-4' },
          { name: 'Akok', price: 'RM 1.50-2.50' },
          { name: 'Air Mata Kucing', price: 'RM 2-3' }
        ],
        hours: 'Daily: 6:00 PM - 11:00 PM (Peak: 7:00 PM - 9:00 PM)',
        tips: 'Try the blue Nasi Kerabu - it\'s made with butterfly pea flowers. Most dishes are halal. Limited English spoken. Very authentic local experience. Traditional preparation methods used.',
        gettingThere: 'Central Market area in Kota Bharu. Sultan Ismail Petra Airport is 20 minutes away. Local bus connections available. Street parking usually available.'
      },

      'taiping-market': {
        name: 'Taiping Larut Market',
        location: 'Taiping, Perak',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/80/e1/cf/larut-matang-hawker-centre.jpg?w=900&h=500&s=1',
        mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.969330168705!2d100.73035014523842!3d4.858135820790114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caaef62de13bdd%3A0x39fb2dc526538110!2sLarut%20Matang%20Hawker%20Center%20%E2%80%A2%20Food%20Court!5e0!3m2!1sen!2smy!4v1756275768756!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' ,
        description: 'Discover the old-world charm of Taiping\'s historic market, where time seems to have stood still. This charming market town, with its traditional coffee shops and local eateries, offers visitors a glimpse into authentic Malaysian small-town life while serving delicious, no-frills local cuisine at incredibly affordable prices.',
        dishes: [
          { name: 'Taiping Hor Fun', price: 'RM 3-5' },
          { name: 'Traditional Coffee', price: 'RM 1.50-2' },
          { name: 'Chee Cheong Fun', price: 'RM 2-4' },
          { name: 'Curry Noodles', price: 'RM 3-5' },
          { name: 'Local Kuih', price: 'RM 1-2 per piece' },
          { name: 'Teh Tarik', price: 'RM 1.50-2' }
        ],
        hours: 'Daily: 6:00 AM - 6:00 PM (Coffee shops: 6:00 AM - 12:00 PM)',
        tips: 'Very affordable prices. Traditional kopitiam culture. English may be limited. Cash only. Peaceful, unhurried atmosphere. Great for experiencing local life.',
        gettingThere: 'Taiping KTM station nearby. About 1 hour drive from Ipoh. Local bus services available. Ample street parking. Close to Taiping Lake Gardens.'
      }
    };

    // Show spot details modal
    function showSpotDetails(spotId) {
  const spot = spotDetails[spotId];
  if (!spot) return;

  document.getElementById('modalSpotName').textContent = spot.name;
  document.getElementById('modalSpotLocation').textContent = spot.location;
  document.getElementById('modalSpotImage').src = spot.image;
  document.getElementById('modalSpotDescription').textContent = spot.description;
  document.getElementById('modalOperatingHours').textContent = spot.hours;
  document.getElementById('modalTips').textContent = spot.tips;
  document.getElementById('modalGettingThere').textContent = spot.gettingThere;

  // ✅ Load Google Map embed
  document.getElementById('modalSpotMap').src = spot.mapEmbed;

  // Populate dishes
  const dishesContainer = document.getElementById('modalDishesList');
  dishesContainer.innerHTML = '';
  spot.dishes.forEach(dish => {
    const dishElement = document.createElement('div');
    dishElement.className = 'dish-item';
    dishElement.innerHTML = `
      <div class="dish-name">${dish.name}</div>
      <div class="dish-price">${dish.price}</div>
    `;
    dishesContainer.appendChild(dishElement);
  });

  document.getElementById('spotModal').style.display = 'block';
}

    // Close spot modal
    function closeSpotModal() {
      document.getElementById('spotModal').style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('spotModal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }

    // Add smooth scroll behavior
    document.addEventListener('DOMContentLoaded', function() {
      // Add scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe spot cards
      document.querySelectorAll('.spot-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });
    }); 
    
    /* =======================
    AUTH + COOKIES (header)
    ======================= */

    // Cookie helpers (SameSite=Lax; path=/)
    function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Lax`;
    }
    function getCookie(name) {
      const pair = document.cookie.split('; ').find(row => row.startsWith(name + '='));
      return pair ? decodeURIComponent(pair.split('=')[1]) : null;
    }
    function eraseCookie(name) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }

    // Serialize user into a single cookie
    const COOKIE_KEY = 'tmys_user';

    function getUser() {
      try { return JSON.parse(getCookie(COOKIE_KEY) || 'null'); }
      catch { return null; }
    }
    function setUser(user, days) {
      setCookie(COOKIE_KEY, JSON.stringify(user), days);
    }

    function openLoginModal() {
      const modal = document.getElementById('loginModal');
      if (!modal) return;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // focus first field
      const first = modal.querySelector('#loginName');
      if (first) setTimeout(() => first.focus(), 50);
    }
    function closeLoginModal() {
      const modal = document.getElementById('loginModal');
      if (!modal) return;
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function updateAuthUI() {
      const user = getUser();
      const authLabel = document.getElementById('authLabel');
      const authBtn   = document.getElementById('authBtn');
      const userMenu  = document.getElementById('userMenu');
      const userGreeting = document.getElementById('userGreeting');
      
      if (!authLabel || !authBtn || !userMenu) return;

      if (user) {
        authLabel.textContent = user.name || 'Account';
        if (userGreeting) userGreeting.textContent = `Hi, ${user.name || 'there'}!`;
        userMenu.classList.remove('open');
        authBtn.setAttribute('aria-expanded', 'false');
        // Clicking the button toggles the dropdown when logged in
        authBtn.onclick = (e) => {
          e.stopPropagation();
          const open = userMenu.classList.toggle('open');
          authBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        };
      } else {
        authLabel.textContent = 'Login';
        userMenu.classList.remove('open');
        authBtn.setAttribute('aria-expanded', 'false');
        // Clicking the button opens the modal when logged out
        authBtn.onclick = () => openLoginModal();
      }
    }
    
    // Global click to close the dropdown if open
    document.addEventListener('click', () => {
      const userMenu = document.getElementById('userMenu');
      if (userMenu) userMenu.classList.remove('open');
    });

    // Wire up modal + form once DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      updateAuthUI();

    
    // Close login modal by clicking backdrop
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) closeLoginModal();
      });
    }  
    
    // Handle login submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
    
    loginForm.addEventListener('submit', (e) => {  
    e.preventDefault();
    const name = (document.getElementById('loginName').value || '').trim();
      const email = (document.getElementById('loginEmail').value || '').trim();
      const remember = document.getElementById('rememberMe').checked;

      if (!name || !email) return; // basic guard

      // In real apps, call your backend then set a secure HttpOnly cookie server-side
      setUser({ name, email }, remember ? 30 : 7);
      closeLoginModal();
      updateAuthUI();
    });
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      eraseCookie(COOKIE_KEY);
      updateAuthUI();
    });
  }
});
