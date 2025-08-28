
    // Food data - in a real application, this would come from a database
    const foodData = {
      'laksa-johor': {
        name: 'Laksa Johor',
        origin: 'Johor',
        image: 'https://resepichenom.com/images/recipes/5f8e4ed20350bffb0a51f2b2c870b9a2aabf3da8.jpeg',
        description: 'A unique variation of laksa from Johor, made with spaghetti-shaped rice noodles in a rich, spicy gravy based on fish and coconut milk. It\'s traditionally eaten with the hands and is a favorite during festive occasions.',
        history: 'Laksa Johor has royal connections, said to have been created by Sultan Abu Bakar of Johor in the 19th century after his exposure to Western cuisine. He requested his chefs to create a local dish using spaghetti, resulting in this unique fusion food that remains popular today.',
        ingredients: [
          'Mackerel fish',
          'Coconut milk',
          'Rice noodles (laksa noodles)',
          'Shallots',
          'Galangal',
          'Lemongrass',
          'Chilies',
          'Turmeric',
          'Shrimp paste',
          'Cucumber',
          'Bean sprouts',
          'Long beans',
          'Torch ginger flower',
          'Mint leaves',
          'Lime'
        ]
      },
      'otak-otak': {
        name: 'Otak-Otak',
        origin: 'Johor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAvWRi8RLF74UfbOppQSV0EZ_KyMVtSENJg&s',
        description: 'A delicious fish cake made from ground fish meat mixed with spices, wrapped in banana or coconut leaves, and grilled to perfection. It has a soft, almost mousse-like texture with a smoky, spicy flavor.',
        history: 'Otak-Otak originated in the Malay Archipelago and is popular in Malaysia, Indonesia, and Singapore. The Johor version is distinct for its smooth texture and rich spice mixture, reflecting the state\'s cultural diversity with influences from Malay, Chinese, and Indonesian cuisines.',
        ingredients: [
          'Mackerel or Spanish mackerel',
          'Coconut milk',
          'Egg',
          'Rice flour',
          'Shallots',
          'Garlic',
          'Galangal',
          'Turmeric',
          'Lemongrass',
          'Chilies',
          'Candlenuts',
          'Kaffir lime leaves',
          'Sugar',
          'Salt',
          'Banana leaves for wrapping'
        ]
      },
      'mee-rebus-johor': {
        name: 'Mee Rebus Johor',
        origin: 'Johor',
        image: 'https://resepichenom.com/images/recipes/0785eba82048d256de78dfb6f4964c79b283a8c9.jpeg',
        description: 'A hearty noodle dish featuring yellow egg noodles served in a thick, slightly sweet gravy made from sweet potatoes, spices, and beef broth. Topped with boiled egg, fried tofu, green chilies, and lime.',
        history: 'Mee Rebus has its roots in Indian Muslim cuisine but was adapted by the Malay community in Johor. The Johor version is distinguished by its use of sweet potato in the gravy, giving it a unique sweetness and thickness that sets it apart from other regional variations.',
        ingredients: [
          'Yellow egg noodles',
          'Sweet potatoes',
          'Beef or chicken broth',
          'Shallots',
          'Garlic',
          'Ginger',
          'Dried shrimp',
          'Curry powder',
          'Tamarind paste',
          'Bay leaves',
          'Hard-boiled egg',
          'Fried tofu',
          'Bean sprouts',
          'Green chili',
          'Lime',
          'Spring onions'
        ]
      },
      'laksa-kedah': {
        name: 'Laksa Kedah',
        origin: 'Kedah',
        image: 'https://images.deliveryhero.io/image/fd-my/LH/hb1w-listing.jpg',
        description: 'A tangy and spicy rice noodle soup from Kedah, featuring a fish-based broth with a prominent tamarind flavor. Served with herbs, vegetables, and a spicy sambal on the side.',
        history: 'Laksa Kedah reflects the agricultural heartland of Kedah, known as Malaysia\'s "rice bowl." The dish has been a staple for generations, with each family having their own variation. Its sour profile comes from the abundant tamarind grown in the region, making it distinct from coconut-based laksas found elsewhere.',
        ingredients: [
          'Mackerel or sardines',
          'Rice noodles (laksa noodles)',
          'Tamarind pulp',
          'Shallots',
          'Garlic',
          'Galangal',
          'Turmeric',
          'Lemongrass',
          'Chilies',
          'Shrimp paste',
          'Pineapple (optional)',
          'Cucumber',
          'Red onion',
          'Lettuce',
          'Mint leaves',
          'Torch ginger flower'
        ]
      },
      'nasi-ulam': {
        name: 'Nasi Ulam',
        origin: 'Kedah',
        image: 'https://jackiem.com.au/wpinstall/wp-content/uploads/2015/05/20141125_175812-e1430736211578.jpg',
        description: 'Nasi Ulam is a traditional Malaysian herb rice salad made with steamed rice mixed with a variety of finely chopped fresh herbs, vegetables, and aromatic ingredients. This fragrant dish is known for its refreshing taste and nutritional value, featuring a colorful medley of up to 20 different types of herbs and vegetables. It is typically served at room temperature with side dishes like fried fish, sambal belacan, and boiled eggs.',
        history: 'Nasi Ulam has its origins in Malay traditional cuisine, particularly from the northern states of Malaysia like Kedah. The dish reflects the Malay community\'s deep knowledge of local herbs and plants, many of which have medicinal properties. Historically, it was prepared as a way to utilize leftover rice and combine it with herbs gathered from around the village. Over generations, it evolved into a cherished traditional dish often served during special occasions, weddings, and religious festivals, showcasing the diversity of Malaysia\'s edible flora.',
        ingredients: [
          'Steamed rice (preferably cooled)',
          'Daun kesum (Vietnamese mint)',
          'Daun kaduk (wild pepper leaves)',
          'Daun cekur (sand ginger leaves)',
          'Daun kunyit (turmeric leaves)',
          'Daun selom (water dropwort)',
          'Daun pudina (mint leaves)',
          'Daun mangga (young mango leaves)',
          'Daun limau purut (kaffir lime leaves)',
          'Bunga kantan (torch ginger flower)',
          'Serai (lemongrass)',
          'Halia (ginger)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Kacang botol (winged beans)',
          'Timun (cucumber)',
          'Kangkung (water spinach)',
          'Pucuk betik (young papaya shoots)',
          'Kerisik (toasted coconut)',
          'Ikan bilis (anchovies)',
          'Kacang tanah (peanuts)',
          'Sambal belacan (shrimp paste chili)',
          'Garam (salt)',
          'Gula Melaka (palm sugar)',
          'Limau nipis (lime juice)'
        ]
      },
      'gulai-tempoyak': {
        name: 'Gulai Tempoyak',
        origin: 'Kedah',
        image: 'https://i.ytimg.com/vi/Q_TWMzXkbF4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDir7G1H0XyjaeWfqoZiV9kP12mEg',
        description: 'Gulai Tempoyak is a distinctive and flavorful Malaysian curry made with fermented durian paste (tempoyak) as its base. This rich and creamy curry has a complex flavor profile that combines the pungent, tangy taste of fermented durian with aromatic spices and coconut milk. It is typically cooked with fish, especially freshwater varieties like patin or catfish, and sometimes includes vegetables like eggplant or long beans. The dish has a thick, creamy consistency and is known for its unique aroma and taste that is both savory and slightly sour.',
        history: 'Gulai Tempoyak originates from the northern states of Malaysia, particularly Kedah and Perak, where durian trees are abundant. The dish was created as a preservation method for durians during peak season when there was a surplus. By fermenting the durian flesh with salt, communities could enjoy the fruit\'s flavor year-round. This culinary innovation reflects the resourcefulness of Malay communities in utilizing seasonal produce. The dish has been passed down through generations and remains a beloved traditional recipe, especially in rural areas where durian trees are common.',
        ingredients: [
          'Tempoyak (fermented durian paste)',
          'Ikan patin (silver catfish) or other firm fish',
          'Santan (coconut milk)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Kunyit hidup (fresh turmeric)',
          'Lengkuas (galangal)',
          'Serai (lemongrass)',
          'Cili padi (bird\'s eye chilies)',
          'Cili kering (dried chilies)',
          'Daun kunyit (turmeric leaves)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun kesum (Vietnamese mint)',
          'Terung (eggplant) or long beans',
          'Garam (salt)',
          'Gula Melaka (palm sugar)',
          'Asam keping (dried tamarind slices)',
          'Biji sawi (mustard seeds)',
          'Jintan putih (cumin seeds)',
          'Ketumbar (coriander seeds)'
        ]
      },
      'nasi-kerabu': {
        name:'Nasi Kerabu',
        origin:'Kelantan',
        image: 'https://www.justasdelish.com/wp-content/uploads/2013/04/NasiKerabu1.jpg',
        description: 'A traditional Malaysian dish featuring blue-colored rice served with an array of fresh herbs, vegetables, and flavorful accompaniments. The rice gets its distinctive blue color from the petals of the butterfly pea flower (bunga telang), which are soaked in water to extract the natural dye. This fragrant rice is typically served with fried fish, solok lada (stuffed chili peppers), kerisik (toasted coconut), pickled vegetables, and a variety of fresh local herbs.',
        history: 'Nasi Kerabu originates from the state of Kelantan in northeastern Malaysia, with influences from neighboring Thailand. The dish has been a staple of Kelantanese cuisine for centuries and is deeply rooted in the state\'s agricultural traditions. The blue coloring was traditionally believed to have mystical properties and was served during special occasions and festivals. Over time, it has become a popular everyday dish throughout Malaysia, with each region adding its own variations while maintaining the core elements that make Nasi Kerabu unique.',
        ingredients: [
          'Rice (soaked in butterfly pea flower extract for blue color)',
          'Fried fish (usually mackerel or catfish)',
          'Fresh herbs: mint leaves, basil, turmeric leaves, kesum (Vietnamese mint)',
          'Bean sprouts',
          'Long beans',
          'Cabbage',
          'Cucumber',
          'Kerisik (toasted grated coconut)',
          'Sambal (spicy chili paste)',
          'Budu (fermented fish sauce) or fish sauce',
          'Solok lada (chilies stuffed with fish paste)',
          'Fried grated coconut',
          'Shallots',
          'Garlic',
          'Ginger',
          'Galangal',
          'Turmeric',
          'Lemongrass',
          'Shrimp paste',
          'Lime'
        ]
      },
      'ayam-percik': {
        name: 'Ayam Percik',
        origin: 'Kelantan',
        image: 'https://resepichenom.com/images/recipes/7d3fcaf29b334b3aa47d2d27127297470fff0351.jpeg',
        description: 'Ayam Percik is a famous Malaysian grilled chicken dish where chicken is marinated in a rich, spicy coconut milk-based sauce and then grilled to perfection. The term "percik" refers to the method of repeatedly basting the chicken with the flavorful sauce during the grilling process. This results in incredibly tender, juicy chicken with a slightly charred exterior and a complex, aromatic flavor profile. The sauce caramelizes during grilling, creating a beautiful glaze that makes the dish visually appealing and delicious.',
        history: 'Ayam Percik originates from the state of Kelantan in northeastern Malaysia, where it is considered a signature dish. It has strong influences from Thai cuisine due to Kelantan\'s proximity to Thailand. Historically, it was prepared for special occasions and festivals, often cooked over charcoal fires during night markets and festive gatherings. The dish gained nationwide popularity and is now a staple at Malay wedding feasts, Ramadan bazaars, and cultural celebrations throughout Malaysia. Its preparation method reflects traditional Malay cooking techniques that emphasize slow grilling and frequent basting to build layers of flavor.',
        ingredients: [
          'Chicken (whole or cut into pieces)',
          'Santan (coconut milk)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Lengkuas (galangal)',
          'Kunyit (turmeric)',
          'Serai (lemongrass)',
          'Cili kering (dried chilies)',
          'Cili padi (bird\'s eye chilies)',
          'Biji ketumbar (coriander seeds)',
          'Jintan putih (cumin seeds)',
          'Biji sawi (mustard seeds)',
          'Asam keping (dried tamarind slices)',
          'Gula Melaka (palm sugar)',
          'Garam (salt)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun kunyit (turmeric leaves)',
          'Minyak masak (cooking oil)',
          'Air asam jawa (tamarind juice)'
        ]
      },
     'solok-lada': {
        name: 'Solok Lada',
        origin: 'Kelantan',
        image: 'https://cdn.rasa.my/rasa/20258109_1563858153647162_6876066516225051035_n.jpg',
        description: 'Solok Lada is a traditional Malaysian dish consisting of green chili peppers stuffed with a flavorful fish paste mixture, then steamed or boiled to perfection. The name "solok lada" literally translates to "stuffed chili" in Malay. The dish offers a delightful contrast between the spicy, slightly bitter green chili and the savory, sweet fish filling. It is typically served as a side dish with rice, often accompanied by other traditional Kelantanese dishes. The preparation requires skill to properly hollow out the chilies without breaking them and to create the perfect texture for the filling.',
        history: 'Solok Lada originates from the state of Kelantan in northeastern Malaysia, where it is considered a classic traditional dish. It reflects the resourcefulness of Malay cuisine in creating flavorful dishes using simple, locally available ingredients. The dish has been prepared for generations, particularly during special occasions, festivals, and family gatherings. It is especially popular during the Ramadan month, where it is served as one of the breaking-of-fast dishes. Solok Lada represents the delicate balance of flavors that characterizes Kelantanese cuisine, which often combines spicy, savory, and slightly sweet elements in harmonious ways.',
        ingredients: [
          'Cili hijau (green chili peppers)',
          'Ikan tenggiri (mackerel) or white fish fillet',
          'Kelapa parut (grated coconut)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Kunyit (turmeric)',
          'Serai (lemongrass)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun kesum (Vietnamese mint)',
          'Tepung beras (rice flour)',
          'Santan (coconut milk)',
          'Garam (salt)',
          'Gula (sugar)',
          'Lada hitam (black pepper)',
          'Air (water)',
          'Minyak masak (cooking oil)'
        ]
      },
      'chicken-rice-balls': {
        name: 'Chicken Rice Balls',
        origin: 'Malacca',
        image: 'https://images.getrecipekit.com/20210915163813-malaysian-chicken-rice-balls.jpg?aspect_ratio=4:3&quality=90&',
        description: 'Chicken Rice Balls are a unique Malaccan variation of the classic Hainanese chicken rice, where the fragrant rice is shaped into small, compact balls instead of being served loose. The rice is cooked with chicken stock, ginger, garlic, and pandan leaves, then hand-molded into delightful round shapes. It is served with tender poached chicken, flavorful dipping sauces, and a bowl of clear chicken soup. The rice balls have a slightly denser texture than regular chicken rice, allowing them to absorb the sauces beautifully while maintaining their shape.',
        history: 'Chicken Rice Balls originated in Malacca through the adaptation of Hainanese immigrants who settled in Malaysia generations ago. The dish was created by the Hainanese community as a convenient way to serve chicken rice to laborers and workers - the compact rice balls were easy to handle, transport, and eat without utensils. Over time, this practical innovation evolved into a beloved culinary tradition unique to Malacca. The most famous establishments have been serving this dish for decades, preserving the traditional methods of preparation that have been passed down through generations of Hainanese families.',
        ingredients: [
          'Chicken (whole or parts)',
          'Rice (preferably fragrant variety like Jasmine)',
          'Chicken stock',
          'Ginger',
          'Garlic',
          'Pandan leaves (screwpine leaves)',
          'Spring onions',
          'Cucumber slices',
          'Light soy sauce',
          'Dark soy sauce',
          'Sesame oil',
          'Chicken fat or vegetable oil',
          'Salt',
          'White pepper',
          'For chili sauce: Red chilies, ginger, garlic, vinegar, lime juice',
          'For ginger sauce: Fresh ginger, garlic, oil',
          'For soup: Chicken bones, garlic, white pepper'
        ]
      },
      'cendol': {
        name: 'Cendol',
        origin: 'Malacca',
        image: 'https://img.lazcdn.com/g/p/9960062f4d8e46930c387b5f069634ec.jpg_720x720q80.jpg',
        description: 'Cendol is a beloved Malaysian shaved ice dessert featuring green rice flour jelly noodles, coconut milk, and palm sugar syrup. The name "cendol" refers to the green worm-like jelly strips made from rice flour infused with pandan leaf extract, which gives them their distinctive color and fragrance. This refreshing dessert is served chilled with shaved ice, rich coconut milk, and thick, aromatic gula Melaka (palm sugar) syrup. Additional toppings often include red beans, sweet corn, glutinous rice, or even durian. Cendol provides a perfect balance of sweetness from the palm sugar, creaminess from the coconut milk, and refreshing coolness from the ice.',
        history: 'Cendol has ancient origins in Southeast Asia, with Malaysia and Indonesia both claiming the dessert. The Malaysian version, particularly from Malacca, has become iconic. The dessert dates back to the pre-colonial era when it was made with simple, locally available ingredients. The green jelly noodles were traditionally extruded through perforated containers into icy water to set their shape. Cendol gained popularity during the British colonial period and became a staple at Malaysian hawker stalls. Malacca\'s version is particularly famous due to the quality of its gula Melaka, which is produced in the region. The dessert has evolved from a simple street food to a nationally cherished treat, with many establishments in Malacca specializing in this refreshing delicacy.',
        ingredients: [
          'Cendol (green rice flour jelly noodles)',
          'Shaved ice',
          'Santan (coconut milk)',
          'Gula Melaka (palm sugar)',
          'Pandan leaves (screwpine leaves)',
          'Red beans (boiled and sweetened)',
          'Sweet corn kernels',
          'Glutinous rice (optional)',
          'Durian flesh (optional)',
          'Salt',
          'Water',
          'Rice flour',
          'Tapioca flour',
          'For cendol noodles: Rice flour, pandan juice, lime water',
          'For syrup: Palm sugar, water, pandan leaves'
        ]
      },
      'satay-celup': {
        name: 'Satay Celup',
        origin: 'Malacca',
        image: 'https://tourismmelaka.com/wp-content/uploads/2023/11/capitol-satay-celup2-1024x1024.jpg',
        description: 'Satay Celup is a unique Malaccan dining experience where various skewered ingredients are dipped into a boiling pot of rich, spicy peanut sauce at the table. Literally meaning "dipped satay," this communal meal features an array of skewered foods including meats, seafood, vegetables, and tofu that customers select from a display, then cook themselves in a shared pot of simmering sauce. The thick peanut sauce is the star of the dish - a fragrant, slightly sweet and spicy blend that continuously develops flavor as more ingredients are cooked in it. Unlike regular satay which is grilled, Satay Celup offers a interactive dining experience that combines elements of steamboat with traditional satay flavors.',
        history: 'Satay Celup originated in Malacca as a creative adaptation of traditional satay, combining Chinese steamboat concepts with Malay peanut sauce flavors. The dish emerged in the 1950s when local food vendors began offering a communal dipping experience using a shared pot of peanut sauce. It gained popularity particularly among the Peranakan community who appreciated its blend of Chinese cooking style with local spices. The most famous Satay Celup establishments in Malacca have been operating for generations, with some recipes for the peanut sauce being closely guarded family secrets. The dish has become synonymous with Malacca\'s culinary identity and is a must-try experience for visitors to the historical city.',
        ingredients: [
          'For the peanut sauce: Peanuts, dried chilies, shallots, garlic, galangal, lemongrass, tamarind paste, coconut milk, palm sugar, shrimp paste (belacan), oil, salt',
          'Skewered ingredients: Beef, chicken, pork, prawns, squid, fish balls, crab sticks, tofu, tofu puffs, fried bean curd, quail eggs, bitter gourd, okra, long beans, cabbage, lettuce, mushrooms, sausages',
          'For accompaniment: White rice, ketupat (compressed rice cakes), fresh cucumber slices, raw onions'
        ]
      },
      'rendang-daging': {
        name: 'Rendang Daging',
        origin: 'Negeri Sembilan',
        image: 'https://i.ytimg.com/vi/MNkyy5_WxqA/maxresdefault.jpg',
        description: 'Rendang Daging is a rich and flavorful Indonesian-Malaysian dry curry made from beef slowly cooked in coconut milk and a complex blend of spices until the liquid evaporates and the meat becomes tender and caramelized. Hailing from the Minangkabau culture of West Sumatra and Negeri Sembilan, this dish is characterized by its thick, dark gravy that coats each piece of meat. The slow cooking process allows the flavors to penetrate deeply into the beef, resulting in an incredibly aromatic and savory dish. Rendang is traditionally prepared for special occasions, festivals, and ceremonial events, and is considered a masterpiece of Malay cuisine.',
        history: 'Rendang Daging originated from the Minangkabau people of West Sumatra, Indonesia, and was brought to Malaysia by Minangkabau immigrants who settled in Negeri Sembilan. The dish dates back to the 16th century and was developed as a method of preserving meat in the tropical climate without refrigeration. The slow cooking process in coconut milk and spices acted as a natural preservative, allowing the dish to last for weeks. Rendang was traditionally prepared for long journeys and important ceremonies. In 2011, Rendang was ranked first in CNN\'s "World\'s 50 Most Delicious Foods" list, gaining international recognition. The Negeri Sembilan version is particularly famous for its authentic Minangkabau preparation methods and spice blends.',
        ingredients: [
          'Beef (preferably chuck or shank, cut into chunks)',
          'Coconut milk (from 2-3 mature coconuts)',
          'Shallots',
          'Garlic',
          'Ginger',
          'Galangal',
          'Turmeric',
          'Turmeric leaves (shredded)',
          'Kaffir lime leaves',
          'Lemongrass (bruised)',
          'Dried red chilies (soaked)',
          'Fresh red chilies',
          'Candlenuts',
          'Coriander seeds',
          'Cumin seeds',
          'Fennel seeds',
          'Cinnamon stick',
          'Star anise',
          'Cloves',
          'Cardamom pods',
          'Tamarind paste',
          'Palm sugar',
          'Salt',
          'Toasted grated coconut (kerisik)'
        ]
      },
      'masak-lemak-cili-api': {
        name: 'Masak Lemak Cili Api',
        origin: 'Negeri Sembilan',
        image: 'https://resepichenom.com/images/recipes/Ayam_Masak_Lemak_Cili_Api_Web.jpg',
        description: 'Masak Lemak Cili Api is a fiery and creamy Malaysian curry dish that combines rich coconut milk with the intense heat of bird\'s eye chilies (cili api). This Minangkabau-inspired dish features a vibrant yellow gravy from turmeric and typically includes meat or vegetables cooked in a fragrant coconut milk base. The name translates to "cooking with fat (coconut milk) and fire chilies," accurately describing its creamy yet intensely spicy character. The dish balances the richness of coconut milk with the sharp heat of chilies, creating a complex flavor profile that is both comforting and exhilarating.',
        history: 'Masak Lemak Cili Api originates from the Minangkabau tradition of Negeri Sembilan, where coconut milk-based dishes are a culinary staple. The dish reflects the Minangkabau people\'s mastery in balancing rich, creamy elements with intense spices. Historically, it was prepared using ingredients readily available in the Malaysian countryside - coconut milk from local plantations, fresh turmeric from gardens, and the notoriously spicy cili api that grows abundantly in the region. The dish has been passed down through generations as part of the Minangkabau culinary heritage and remains a beloved home-cooked meal that represents the bold flavors characteristic of Negeri Sembilan cuisine.',
        ingredients: [
          'Chicken, beef, or fish (traditional uses meat or seafood)',
          'Santan (coconut milk)',
          'Cili api (bird\'s eye chilies)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Kunyit (turmeric)',
          'Lengkuas (galangal)',
          'Serai (lemongrass)',
          'Daun kunyit (turmeric leaves)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun kesum (Vietnamese mint)',
          'Biji sawi (mustard seeds)',
          'Jintan putih (cumin seeds)',
          'Ketumbar (coriander seeds)',
          'Asam keping (dried tamarind slices)',
          'Garam (salt)',
          'Gula Melaka (palm sugar) - pinch to balance',
          'Halia (ginger)',
          'Bunga kantan (torch ginger flower) - optional',
          'Pucuk ubi (tapioca shoots) or vegetables like long beans'
        ]
      },
      'serunding': {
        name: 'Serunding',
        origin: 'Negeri Sembilan',
        image: 'https://prod-wasep-uploads.sgp1.cdn.digitaloceanspaces.com/uploads/product/image/157829/96ccb9bd-f4e3-4c4c-9aae-ae94fd41da90.webp',
        description: 'Serunding is a traditional Malaysian meat floss dish made by slow-cooking meat (typically beef or chicken) with coconut and spices until it becomes dry, fibrous, and floss-like in texture. This rich and flavorful dish involves shredding the cooked meat into fine strands and cooking it further with grated coconut and a complex blend of spices until dry. The result is a savory, slightly sweet, and aromatic meat floss that is used as a condiment, side dish, or filling for various Malay kuih (cakes) and breads. Serunding has a unique texture that is both crispy and tender, with deep layers of spice flavors that develop during the slow cooking process.',
        history: 'Serunding originates from the Minangkabau culinary tradition of Negeri Sembilan and is closely related to Indonesian serundeng. The dish was developed as a preservation method to extend the shelf life of meat in the tropical climate without refrigeration. The slow cooking process and addition of spices acted as natural preservatives, allowing the meat to be stored for extended periods. Serunding has deep cultural significance in Malay communities, particularly during festive occasions like Hari Raya Aidilfitri, weddings, and special celebrations where it is served as part of the traditional meal spread. The preparation techniques have been passed down through generations, with each family often having their own secret spice blend and cooking method.',
        ingredients: [
          'Beef or chicken (preferably lean cuts)',
          'Kelapa parut (freshly grated coconut)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Lengkuas (galangal)',
          'Kunyit (turmeric)',
          'Serai (lemongrass)',
          'Cili kering (dried chilies)',
          'Biji ketumbar (coriander seeds)',
          'Jintan putih (cumin seeds)',
          'Biji sawi (mustard seeds)',
          'Buah keras (candlenuts)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun kunyit (turmeric leaves)',
          'Asam keping (dried tamarind slices)',
          'Gula Melaka (palm sugar)',
          'Garam (salt)',
          'Lada hitam (black pepper)',
          'Santan (coconut milk) - optional for richer version',
          'Minyak sapi (ghee) or cooking oil'
        ]
      },
      'ikan-patin-masak-tempoyak': {
        name: 'Ikan Patin Masak Tempoyak',
        origin: 'Pahang',
        image: 'https://cdn.rasa.my/2022/02/79405917_121205236022244_3684484501427191808_n.jpg',
        description: 'Ikan Patin Masak Tempoyak is a traditional Malaysian fish curry featuring patin fish (silver catfish) cooked in a rich, tangy gravy made from tempoyak (fermented durian). This distinctive dish from Pahang combines the tender, fatty texture of patin fish with the complex, pungent flavor of fermented durian, creating a unique culinary experience. The gravy is typically flavored with turmeric, ginger, and other spices, resulting in a creamy, slightly sour, and aromatic curry that is both bold and comforting. The dish is known for its strong aroma and acquired taste, beloved by those who appreciate traditional Malay flavors.',
        history: 'Ikan Patin Masak Tempoyak originates from the state of Pahang, particularly along the Pahang River where patin fish are abundantly found. The dish represents the resourcefulness of riverine communities in utilizing local ingredients - patin fish from the river and durian from the surrounding forests. The practice of fermenting durian (tempoyak) dates back centuries as a preservation method during durian season when the fruit was plentiful. The combination of these two iconic Pahang ingredients created a dish that has become synonymous with the state\'s culinary identity. It is especially popular in areas like Pekan and Temerloh, which are known as the "patin capitals" of Malaysia.',
        ingredients: [
          'Ikan patin (silver catfish) - cut into steaks',
          'Tempoyak (fermented durian paste)',
          'Santan (coconut milk)',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Kunyit hidup (fresh turmeric)',
          'Lengkuas (galangal)',
          'Serai (lemongrass) - bruised',
          'Cili padi (bird\'s eye chilies)',
          'Daun kesum (Vietnamese mint)',
          'Daun kunyit (turmeric leaves)',
          'Daun limau purut (kaffir lime leaves)',
          'Asam keping (dried tamarind slices)',
          'Garam (salt)',
          'Gula Melaka (palm sugar) - pinch to balance',
          'Minyak sapi (ghee) or cooking oil',
          'Air (water)',
          'Biji sawi (mustard seeds)',
          'Jeruk nipis (lime) - for marinating fish'
        ]
      },
      'gulai-kawah': {
        name: 'Gulai Kawah',
        origin: 'Pahang',
        image: 'https://resepichenom.com/images/recipes/Gulai_Daging_Kawah.jpg',
        description: 'Gulai Kawah is a traditional Malaysian communal curry cooked in a large, cauldron-like pot (kawah) over an open fire. This hearty and flavorful dish is typically prepared for large gatherings, festivals, and special occasions. The name translates to "cauldron curry," reflecting both the cooking vessel and the communal nature of the dish. Gulai Kawah features a rich, aromatic gravy with a perfect balance of spices, coconut milk, and various meats or vegetables. It is known for its robust flavor that develops through slow cooking in the large pot, allowing the ingredients to meld together beautifully. The dish is often served during weddings, religious celebrations, and village feasts.',
        history: 'Gulai Kawah has its roots in traditional Malay village culture, particularly in Pahang where it remains a beloved dish for communal gatherings. The practice of cooking in large kawah pots dates back to times when communities would come together for special events and celebrations. The large pot allowed for efficient cooking for many people, making it practical for weddings, religious holidays, and village festivals. The recipe has been passed down through generations, with each family and region having their own variations. In Pahang, Gulai Kawah is especially popular during Hari Raya and wedding celebrations, where it symbolizes community, generosity, and shared abundance.',
        ingredients: [
          'Beef, chicken, or mutton (cut into chunks)',
          'Santan (coconut milk) - from 4-5 mature coconuts',
          'Bawang merah (shallots)',
          'Bawang putih (garlic)',
          'Halia (ginger)',
          'Lengkuas (galangal)',
          'Kunyit (turmeric)',
          'Serai (lemongrass) - bruised',
          'Cili kering (dried chilies) - blended',
          'Biji ketumbar (coriander seeds)',
          'Jintan putih (cumin seeds)',
          'Biji sawi (mustard seeds)',
          'Buah keras (candlenuts)',
          'Daun kunyit (turmeric leaves)',
          'Daun limau purut (kaffir lime leaves)',
          'Daun salam (Indonesian bay leaves)',
          'Asam keping (dried tamarind slices)',
          'Garam (salt)',
          'Gula Melaka (palm sugar)',
          'Minyak masak (cooking oil)',
          'Kentang (potatoes) - optional',
          'Wortel (carrots) - optional'
        ]
      },
      'abc-bandung': {
        name: 'ABC Bandung',
        origin: 'Pahang',
        image: 'https://img-global.cpcdn.com/recipes/6be82a701b492262/680x781f0.5_0.500637_1.0q80/ais-kacang-abc-air-batu-campur-resipi-foto-utama.jpg',
        description: 'ABC Bandung is a popular Malaysian beverage that combines shaved ice with sweet rose syrup, evaporated milk, and various toppings. The name "ABC" stands for Air Batu Campur, which means "mixed ice," and "Bandung" refers to the pink rose syrup that gives the drink its distinctive color and flavor. This refreshing drink features a base of finely shaved ice soaked in rose syrup and topped with evaporated milk, creating a sweet, creamy, and floral flavor profile. It is often served with additional toppings such as basil seeds, grass jelly, or red beans, making it a colorful and delightful treat enjoyed by people of all ages.',
        history: 'ABC Bandung has its roots in Malaysian street food culture, with influences from Indian and Malay culinary traditions. The drink evolved from the classic ABC (Air Batu Campur), which is similar to Singapore\'s ice kacang. The addition of rose syrup (sirap) became popular in the 1960s and 1970s, particularly in Pahang and other parts of Malaysia, where it was sold at roadside stalls and night markets. The name "Bandung" is believed to have been inspired by the city in Indonesia, known for its vibrant culture and food, though the drink itself is distinctly Malaysian. Over time, ABC Bandung has become a staple at mamak stalls and is especially popular during hot weather and festive occasions.',
        ingredients: [
          'Shaved ice',
          'Rose syrup (sirap)',
          'Evaporated milk',
          'Condensed milk (optional)',
          'Basil seeds (selasih)',
          'Grass jelly (cinchau)',
          'Red beans (boiled and sweetened)',
          'Sweet corn kernels',
          'Cendol (green rice flour jelly)',
          'Attap chee (palm seed)',
          'Nata de coco (coconut jelly)',
          'Ice cream (optional)',
          'Soda water (optional for fizzy version)'
        ]
      },
      'char-koay-teow': {
        name: 'Char Koay Teow',
        origin: 'Penang',
        image: 'https://resepichenom.com/images/recipes/Char_kuetiau_1.jpg',
        description: 'Char Koay Teow is a iconic Malaysian stir-fried flat rice noodle dish that is celebrated for its smoky flavor and perfect balance of textures and tastes. The dish features wide, flat rice noodles stir-fried at high heat with fresh prawns, cockles, Chinese sausage (lap cheong), eggs, bean sprouts, and chives in a flavorful combination of soy sauce, chili paste, and shrimp paste. The signature "wok hei" (breath of the wok) is essential - that distinctive smoky flavor achieved through rapid cooking in a blazing hot wok. This Penang hawker staple is known for its harmonious combination of savory, slightly sweet, and spicy flavors with contrasting textures from the tender noodles, crispy bean sprouts, and juicy seafood.',
        history: 'Char Koay Teow originated in Penang in the 1950s and was created by Chinese immigrants from Fujian province. It began as a humble street food dish prepared by fishermen and farmers who used inexpensive ingredients readily available to them - rice noodles, leftover seafood, and local vegetables. The dish was traditionally cooked by men using heavy iron woks over charcoal fires, as it required significant strength and technique. Over decades, Char Koay Teow evolved from a simple working-class meal to a culinary icon of Malaysian cuisine. Penang remains the most famous place for authentic Char Koay Teow, with some hawker stalls gaining international recognition. The dish represents the perfect fusion of Chinese cooking techniques with local Malaysian ingredients.',
        ingredients: [
          'Koay teow (flat rice noodles)',
          'Fresh prawns (peeled and deveined)',
          'Blood cockles (kerang)',
          'Chinese sausage (lap cheong) - sliced',
          'Eggs',
          'Bean sprouts',
          'Chinese chives (cut into sections)',
          'Garlic (minced)',
          'Chili paste (from dried chilies)',
          'Light soy sauce',
          'Dark soy sauce',
          'Shrimp paste (har mee)',
          'White pepper',
          'Sugar',
          'Lard or cooking oil',
          'Fish cake (optional)',
          'Cockles (optional)',
          'Crab meat (optional in premium versions)'
        ]
      },
      'assam-laksa': {
        name: 'Assam Laksa',
        origin: 'Penang',
        image: 'https://3.bp.blogspot.com/-GjfaSKMCMKs/Tnf51by8-MI/AAAAAAAACZY/6JcsB62LeXQ/s1600/Penang+asam+laksa.JPG',
        description: 'Assam Laksa is a distinctive Penang noodle soup known for its tangy, spicy, and aromatic fish-based broth. The dish features thick rice noodles served in a rich, flavorful soup made from mackerel fish, tamarind, lemongrass, galangal, and chilies, creating a perfect balance of sour, spicy, and savory flavors. Unlike other laksa varieties, Assam Laksa has a clear, broth-like consistency rather than a coconut milk-based gravy. It is traditionally garnished with shredded fish, cucumber, onions, pineapple, mint leaves, and lettuce, then finished with a spoonful of thick shrimp paste (hae ko) for added depth of flavor. This refreshing yet robust dish is considered one of Penang\'s most iconic culinary exports.',
        history: 'Assam Laksa originated in Penang and has its roots in the Nyonya (Peranakan) community that blended Chinese and Malay culinary traditions. The dish evolved from traditional Malay fish soups that used tamarind for sourness, with Chinese immigrants adding noodles and refining the recipe. By the early 20th century, Assam Laksa had become a staple of Penang street food culture. The dish gained international recognition when it was ranked 7th on CNN Travel\'s "World\'s 50 Best Foods" list in 2011. Penang remains the undisputed home of authentic Assam Laksa, with each hawker stall often guarding their secret recipe passed down through generations. The dish reflects Penang\'s history as a cultural melting pot and trading port where diverse ingredients and techniques converged.',
        ingredients: [
          'Thick rice noodles (laksa noodles)',
          'Mackerel fish (steamed and flaked)',
          'Tamarind paste (asam jawa)',
          'Lemongrass (serai) - bruised',
          'Galangal (lengkuas) - sliced',
          'Shallots (bawang merah)',
          'Garlic (bawang putih)',
          'Turmeric (kunyit)',
          'Dried chilies',
          'Fresh red chilies',
          'Shrimp paste (belacan)',
          'Pineapple (sliced)',
          'Cucumber (julienned)',
          'Red onions (sliced)',
          'Mint leaves (daun pudina)',
          'Lettuce (shredded)',
          'Torch ginger flower (bunga kantan) - sliced',
          'Thick shrimp paste (hae ko) for serving',
        'Salt and sugar to taste'
        ]
      },
      'rojak': {
        name: 'Rojak',
        origin: 'Penang',
        image: 'https://thefoodsite.net/wp-content/uploads/2020/04/rojak.jpg',
        description: 'Rojak is a traditional Malaysian fruit and vegetable salad that combines various fresh ingredients with a thick, sweet, and spicy palm sugar dressing. The name "rojak" means "mixture" in Malay, reflecting the diverse combination of flavors and textures in this dish. Penang Rojak typically features a medley of tropical fruits and vegetables such as cucumber, pineapple, jicama (sengkuang), bean sprouts, and fried tofu, all tossed in a distinctive dark sauce made from palm sugar, tamarind, chili, and shrimp paste. The dish is often garnished with crushed peanuts and sesame seeds, creating a perfect balance of sweet, spicy, sour, and savory flavors with contrasting crunchy and juicy textures.',
        history: 'Rojak has its origins in the Malay Archipelago, with each region developing its own variation. The Penang version evolved through the influence of various ethnic communities, particularly the Chinese and Malay cultures. The dish dates back to the early 20th century when street vendors began creating this unique salad using locally available tropical fruits and vegetables. The distinctive thick, dark sauce was developed as a way to combine sweet and savory elements that would complement the fresh ingredients. Rojak became particularly popular in Penang due to the abundance of fresh produce and the cultural diversity that encouraged culinary experimentation. Today, it remains a beloved street food that represents Malaysia\'s multicultural heritage, with each vendor often having their own secret recipe for the sauce.',
        ingredients: [
          'Cucumber (sliced)',
          'Pineapple (cut into chunks)',
          'Jicama (sengkuang) - julienned',
          'Raw mango (sliced) - optional',
          'Bean sprouts',
          'Water apple (jambu air) - optional',
          'Fried tofu (tauhu goreng) - cubed',
          'Fried dough fritters (youtiao) - optional',
          'Boiled potatoes (optional)',
          'For the sauce: Palm sugar (gula Melaka)',
          'Tamarind paste (asam jawa)',
          'Shrimp paste (hae ko or belacan)',
          'Chili paste',
          'Water',
          'Salt',
          'For garnish: Crushed roasted peanuts',
          'Sesame seeds',
          'Cut lime (for serving)'
        ]
      },
      'ipoh-hor-fun': {
        name: 'Ipoh Hor Fun',
        origin: 'Perak',
        image: 'https://cdn1.sgliteasset.com/ipohkueh/images/texteditor/IKT_Sha_Hor_Fun_1736222594.jpg',
        description: 'Ipoh Hor Fun is a celebrated Malaysian dish featuring flat rice noodles served in a clear, flavorful chicken and prawn broth. This Perak specialty is known for its delicate yet rich flavor profile, achieved through slow-simmering chicken bones, prawn shells, and dried seafood to create a deeply umami broth. The dish typically includes silky smooth hor fun noodles topped with succulent chicken slices, fresh prawns, and sometimes fish cakes or mushrooms, garnished with spring onions and fried shallots. What sets Ipoh Hor Fun apart is the quality of the noodles themselves - made with local Ipoh water which is believed to give them a uniquely smooth and tender texture. The broth is clear but packed with flavor, allowing the quality of each ingredient to shine through.',
        history: 'Ipoh Hor Fun originated in the early 20th century in Ipoh, Perak, which was then a booming tin mining town with a large Chinese immigrant population. The dish was created by Cantinese immigrants who adapted their traditional noodle soups using local ingredients. The unique mineral content of Ipoh\'s limestone spring water was discovered to give the rice noodles a superior texture, leading to the development of this distinctive regional variation. Originally served as a breakfast dish for tin miners, Ipoh Hor Fun gained popularity through generations of hawkers perfecting their recipes. Many famous Hor Fun establishments in Ipoh are family businesses that have been operating for decades, with some dating back to the 1950s. The dish has become synonymous with Ipoh\'s culinary identity and is considered a must-try for visitors to the city.',
        ingredients: [
          'Hor fun (flat rice noodles) - preferably Ipoh-made',
          'Chicken (breast or thigh) - sliced',
          'Fresh prawns - peeled and deveined',
          'Chicken bones and prawn shells (for stock)',
          'Dried sole fish or dried shrimp (for stock)',
          'Garlic - minced',
          'Ginger - sliced',
          'Spring onions',
          'Fried shallots',
          'Chinese celery (optional)',
          'Fish cakes (optional)',
          'Straw mushrooms (optional)',
          'Choy sum or bok choy',
          'Light soy sauce',
          'Sesame oil',
          'White pepper',
          'Salt',
          'Sugar',
          'Water or chicken stock'
        ]
      },
      'tau-fu-fah': {
        name: 'Tau Fu Fah',
        origin: 'Perak',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/6b/5d/8c/caption.jpg?w=1200&h=1200&s=1',
        description: 'Tau Fu Fah is a classic Chinese-Malaysian dessert consisting of incredibly soft, silky tofu pudding served with sweet syrup or ginger syrup. This delicate dessert features tofu that has a smooth, custard-like texture that literally melts in your mouth. The tofu is made from soybeans and coagulated to achieve its distinctive silky consistency, then served warm or chilled with a sweet syrup, often flavored with ginger or pandan. In Perak, particularly in Ipoh, Tau Fu Fah is renowned for its exceptional smoothness and richness, attributed to the quality of local soybeans and the limestone-filtered water used in its preparation. It is typically enjoyed as a light dessert or snack, appreciated for its subtle soybean flavor and comforting texture.',
        history: 'Tau Fu Fah was brought to Malaysia by Chinese immigrants from Guangdong province during the late 19th and early 20th centuries. The dessert became particularly associated with Ipoh, Perak due to the city\'s large Cantonese community and the unique quality of its limestone spring water. The calcium-rich water from Ipoh\'s limestone hills was found to be ideal for making tofu, giving it a superior texture and flavor. During the tin mining era, tofu makers in Ipoh perfected their recipes, and many family businesses have been operating for generations. The most famous Tau Fu Fah establishments in Ipoh date back to the 1950s and have become culinary institutions. Over time, this humble dessert evolved from a simple street food to a celebrated regional specialty that attracts visitors from across Malaysia and beyond.',
        ingredients: [
          'Soybeans (high quality, preferably non-GMO)',
          'Water (limestone-filtered water for Ipoh version)',
          'Coagulant (gypsum powder or magnesium chloride)',
          'For syrup: Rock sugar or palm sugar',
          'Ginger (julienned or boiled for ginger syrup)',
          'Pandan leaves (screwpine leaves for fragrance)',
          'Water for syrup',
          'Optional toppings: Gingko nuts',
          'Optional toppings: Barley',
          'Optional toppings: Sweetened red beans',
          'Optional toppings: Grass jelly',
          'Optional: Coconut milk or evaporated milk'
        ]
      },
      'ipoh-bean-sprouts-chicken': {
        name: 'Ipoh Bean Sprouts Chicken',
        origin: 'Perak',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/af/a2/84/chicken-rice-and-bean.jpg',
        description: 'Ipoh Bean Sprouts Chicken is a iconic Perak dish that features tender poached chicken served with exceptionally plump and crunchy bean sprouts, accompanied by flavorful rice and dipping sauces. What makes this dish special is the quality of the ingredients - the chicken is free-range and expertly poached to maintain juiciness, while the bean sprouts are famously fat, short, and incredibly crunchy due to being grown in Ipoh\'s mineral-rich limestone water. The dish is typically served with fragrant oil rice, and accompanied by complementary condiments including minced ginger, chili sauce, and dark soy sauce with fried shallots. The simplicity of the preparation allows the quality of each component to shine, creating a harmonious balance of textures and flavors.',
        history: 'Ipoh Bean Sprouts Chicken originated in the 1950s in Ipoh, Perak, developing alongside the city\'s famous tin mining industry. The dish was created by Chinese immigrants, particularly the Cantonese community, who settled in Ipoh and began utilizing local ingredients. The unique bean sprouts (taugeh) became the star ingredient - their exceptional size and crunchiness resulted from being grown in the calcium-rich water that filters through Ipoh\'s limestone hills. The dish evolved from simple home cooking to become a signature restaurant offering, with several famous establishments dating back generations. The most renowned restaurants often have their own secret methods for poaching the chicken and growing the bean sprouts. Over decades, Ipoh Bean Sprouts Chicken has become synonymous with the city\'s culinary identity and is considered a must-try dish for visitors to Perak.',
        ingredients: [
          'Free-range chicken (preferably kampung chicken)',
          'Ipoh bean sprouts (taugeh) - specially grown in limestone water',
          'Jasmine rice (for oil rice)',
          'Chicken fat or sesame oil (for cooking rice)',
          'Chicken broth (from poaching liquid)',
          'Ginger (minced for condiment)',
          'Garlic',
          'Spring onions',
          'Light soy sauce',
          'Dark soy sauce',
          'Sesame oil',
          'Fried shallots',
          'For chili sauce: Red chilies, garlic, vinegar, lime juice',
          'Cucumber slices (for garnish)',
          'Coriander leaves (for garnish)',
          'White pepper',
          'Salt',
          'Sugar (for balancing sauces)'
        ]
      },
      'laksa-perlis': {
        name: 'Laksa Perlis',
        origin: 'Perlis',
        image: 'https://myweekendplan.asia/wp-content/uploads/2022/01/kuala-perlis-laksa-2.jpg',
        description: 'Laksa Perlis is a distinctive northern Malaysian noodle soup known for its clear, light fish broth and refreshing herbal notes. Unlike the richer, coconut-based laksas of other regions, Laksa Perlis features a clear broth made from fish (typically mackerel or sardines) that is flavored with lemongrass, galangal, and turmeric, but without the heaviness of coconut milk. The broth is tangy from tamarind and slightly spicy, served over thin rice noodles and garnished with fresh local herbs and vegetables. What sets Laksa Perlis apart is its lightness and the use of unique local herbs like daun kesum and daun kaduk, giving it a refreshing quality that is perfect for hot weather. The dish represents the subtle, balanced flavors characteristic of northern Malaysian cuisine.',
        history: 'Laksa Perlis originated in Malaysia\'s smallest state, Perlis, which borders Thailand and has strong cultural influences from both Malay and Thai culinary traditions. The dish developed as a local variation of laksa that reflects the region\'s preference for lighter, less creamy broths compared to southern Malaysian versions. The recipe evolved through generations of Perlis families, utilizing locally available freshwater fish from the Perlis River and herbs from kitchen gardens. The dish became particularly popular as a breakfast and lunch option among farmers and fishermen due to its light yet nourishing qualities. Over time, Laksa Perlis has become a source of state pride, with each town and village often having its own slight variation. The dish represents the cultural fusion of Perlis, where Malay culinary traditions meet Thai influences in a unique borderland cuisine.',
        ingredients: [
          'Thin rice noodles (laksa noodles)',
          'Mackerel or sardines (fresh or canned)',
          'Tamarind paste (asam jawa)',
          'Lemongrass (serai) - bruised',
          'Galangal (lengkuas) - sliced',
          'Turmeric (kunyit) - fresh',
          'Shallots (bawang merah)',
          'Garlic (bawang putih)',
          'Dried chilies',
          'Shrimp paste (belacan)',
          'Daun kesum (Vietnamese mint)',
          'Daun kaduk (wild betel leaves)',
          'Pineapple slices (optional)',
          'Cucumber (julienned)',
          'Bean sprouts',
          'Red onions (sliced)',
          'Lime wedges',
          'Mint leaves',
          'Salt',
          'Sugar'
        ]
      },
      'jeruk-mangga': {
        name: 'Jeruk Mangga',
        origin: 'Perlis',
        image: 'https://dailymakan.com/wp-content/uploads/2020/07/real-format-3.jpg',
        description: 'Jeruk Mangga is a traditional Malaysian pickled mango snack that combines the natural sweetness and tanginess of raw mangoes with a spicy, salty, and sweet pickling brine. This popular street food features crisp, unripe mangoes that are sliced and pickled in a mixture of vinegar, sugar, salt, and chili, creating a refreshing and addictive flavor combination. The pickling process enhances the mango\'s natural tartness while adding layers of spicy and savory notes. Jeruk Mangga is known for its crunchy texture and bold flavors that balance sour, sweet, salty, and spicy elements. It is typically served as a snack, appetizer, or condiment, and is especially popular during hot weather for its refreshing qualities.',
        history: 'Jeruk Mangga has its roots in traditional Malay preservation techniques, with Perlis developing a particularly renowned version due to the state\'s production of high-quality mangoes. The practice of pickling fruits originated as a method to preserve seasonal produce for longer consumption. In Perlis, which is known for its Harumanis mango varieties, local vendors began perfecting the art of pickling unripe mangoes as a way to utilize fruits that weren\'t yet sweet enough for direct consumption. The snack became particularly popular at local markets and roadside stalls, evolving from a simple preservation method to a beloved culinary tradition. Over generations, families in Perlis have developed their own secret recipes for the pickling brine, with some recipes being guarded family secrets passed down through decades.',
        ingredients: [
          'Raw, unripe mangoes (preferably Harumanis variety)',
          'White vinegar or apple cider vinegar',
          'Sugar (white or palm sugar)',
          'Salt',
          'Fresh red chilies (sliced)',
          'Bird\'s eye chilies (cili padi) - for extra heat',
          'Shallots (thinly sliced)',
          'Garlic (sliced)',
          'Water',
          'Optional: Star anise',
          'Optional: Cinnamon stick',
          'Optional: Cloves',
          'Optional: Ginger (julienned)',
          'Optional: Lime juice',
          'Optional: Shrimp paste (belacan) for savory version'
        ]
      },
      'harumanis': {
        name: 'Harumanis Mango',
        origin: 'Perlis',
        image: 'https://cdn.onpay.my/users/ammararich/media/uploads/harum%20manis.jpg',
        description: 'Harumanis is a premium mango variety renowned as the "King of Malaysian Mangoes," exclusively grown in Perlis, Malaysia\'s smallest state. This exquisite mango is characterized by its vibrant green skin that remains green even when fully ripe, oval shape, and distinctive pointed end. The flesh is exceptionally sweet, fiberless, and has a rich, creamy texture with a captivating floral aroma that gives it the name "Harumanis" (harum = fragrant, manis = sweet). Unlike other mango varieties, Harumanis has a perfect balance of sweetness and slight acidity, with Brix levels reaching 18-22°, making it one of the sweetest mangoes in the world. The mango is typically harvested between April and June and is highly prized for its unique flavor profile and limited availability.',
        history: 'Harumanis mango cultivation in Perlis dates back to the 1970s when the Malaysian Agricultural Research and Development Institute (MARDI) introduced the variety from India. However, it was discovered that Perlis\' unique microclimate—characterized by drought stress during flowering season and specific limestone-rich soil composition—created ideal conditions for this mango to develop its distinctive sweetness and aroma. The combination of low rainfall, high temperatures, and mineral-rich soil found only in Perlis produces mangoes that cannot be replicated elsewhere. By the 1990s, Harumanis had become an iconic agricultural product of Perlis, with the state government implementing strict quality control and geographical indication protection. Today, Harumanis is considered a premium fruit with protected geographical status, much like Champagne in France, and has become a source of state pride and significant agricultural income.',
        ingredients: [
          'Harumanis mangoes (grown exclusively in Perlis)',
          'Natural growing conditions: Limestone-rich soil',
          'Specific climate: Low rainfall, high temperature stress',
          'Traditional cultivation techniques',
          'Natural ripening process',
          'Optional: Served chilled',
          'Optional: With sticky rice (for dessert)',
          'Optional: In salads, juices, or pickles',
          'Optional: As fresh fruit consumption'
        ]
      },
      'hinava': {
        name: 'Hinava',
        origin: 'Sabah',
        image: 'https://www.unileverfoodsolutions.com.my/dam/global-ufs/mcos/SEA/calcmenu/recipes/MY-recipes/fish-&-other-seafood-dishes/hinava/main-header.jpg',
        description: 'Hinava is a traditional Sabahan dish of marinated raw fish, similar to ceviche or kinilaw, originating from the Kadazan-Dusun indigenous community of Sabah. This refreshing and zesty dish features fresh raw fish (typically mackerel or tuna) that is "cooked" through marination in lime or calamansi juice, which denatures the proteins without heat. The fish is combined with finely sliced bitter gourd, ginger, chili, and red onions, then seasoned with grated bamboo shoot or roasted grated coconut. Hinava is known for its bright, clean flavors and contrasting textures - the tender fish, crunchy vegetables, and aromatic herbs create a harmonious balance of sour, spicy, and savory notes. It is typically served as an appetizer or side dish, often accompanied by rice.',
        history: 'Hinava has been a staple of Kadazan-Dusun cuisine for centuries, predating modern refrigeration. The dish was developed by indigenous communities in Sabah as a method of preserving fresh fish caught from the rivers and South China Sea. The acidic marination process not only "cooked" the fish but also prevented spoilage in the tropical climate. Hinava holds cultural significance in Kadazan-Dusun traditions and is often served during special occasions, festivals, and celebrations, particularly during the annual Kaamatan (harvest festival). The recipe has been passed down through generations, with each family often having their own variation. Today, Hinava remains a beloved traditional dish that represents Sabah\'s indigenous culinary heritage and is enjoyed by all ethnic groups in the state.',
        ingredients: [
          'Fresh raw fish (mackerel, tuna, or tenggiri) - diced',
          'Lime or calamansi juice (for marination)',
          'Bitter gourd (peria) - finely sliced',
          'Ginger (halia) - julienned',
          'Bird\'s eye chilies (cili padi) - sliced',
          'Red onions - sliced',
          'Bamboo shoot (rebung) - grated (traditional)',
          'Toasted grated coconut (kerisik)',
          'Salt',
          'Optional: Lemongrass (serai) - finely sliced',
          'Optional: Torch ginger flower (bunga kantan) - sliced',
          'Optional: Mint leaves',
          'Optional: Ginger flower (bunga halia)'
        ]
      },
      'bosou': {
        name: 'Bosou',
        origin: 'Sabah',
        image: 'https://munchmalaysia.com/wp-content/uploads/2023/11/bosou-1.jpg',
        description: 'Bosou is a traditional fermented fish dish originating from the Kadazan-Dusun indigenous communities of Sabah, Malaysia. This pungent and flavorful preserved food is made by fermenting freshwater fish (typically ikan pelian or small river fish) with cooked rice, salt, and sometimes grated tapioca. The mixture is tightly packed in jars or bamboo containers and left to ferment for several days to weeks, developing a strong, distinctive aroma and complex umami flavor. Bosou has a soft, paste-like texture and is characterized by its sharp, tangy, and savory taste profile. It is typically eaten as a condiment or side dish with rice, often accompanied by fresh vegetables to balance its intense flavor. The dish is known for its probiotic qualities and long shelf life.',
        history: 'Bosou has been a fundamental part of Kadazan-Dusun food culture for centuries, developed as a crucial preservation method for fish caught during abundant seasons. Indigenous communities in Sabah\'s interior regions created Bosou to ensure protein availability during lean periods and for long journeys. The fermentation technique was passed down through generations, with each family often having their own recipe variations. Traditionally, Bosou was prepared in bamboo tubes and buried underground to maintain consistent temperature during fermentation. The dish holds significant cultural importance and is often served during special occasions, festivals (especially Kaamatan harvest festival), and as a traditional offering. Today, Bosou remains a cherished traditional food, though its strong aroma makes it an acquired taste for those unfamiliar with fermented foods.',
        ingredients: [
          'Freshwater fish (ikan pelian, tilapia, or small river fish)',
          'Cooked rice (serves as fermentation agent)',
          'Sea salt or traditional mineral salt',
          'Grated tapioca (optional, for texture)',
          'Pounded ginger (optional)',
          'Chilies (optional, for spicy version)',
          'Traditional additives: local herbs and roots (family variations)',
          'For serving: Fresh vegetables (cucumber, tomatoes)',
          'For serving: Steamed rice',
          'For serving: Lime wedges (to balance flavor)'
        ]
      },
      'beaufort-mee': {
        name: 'Beaufort Mee',
        origin: 'Sabah',
        image: 'https://www.mysabah.com/wordpress/wp-content/uploads/2024/01/20240119_7.jpg',
        description: 'Beaufort Mee is a distinctive noodle dish from the Beaufort district of Sabah, featuring springy handmade egg noodles served in a clear, flavorful broth. This beloved Sabahan specialty is characterized by its yellow, alkaline-based noodles that have a firm, chewy texture and are typically served dry (tossed in sauce) or in soup. The dry version features noodles tossed in a savory sauce made from soy sauce, vinegar, and pork lard, topped with sliced pork, char siu (barbecued pork), and greens. The soup version comes with a clear, light broth made from pork bones and dried seafood. What sets Beaufort Mee apart is the unique texture of the noodles and the balanced simplicity of its flavors, making it a comfort food favorite among locals.',
        history: 'Beaufort Mee originated in the 1950s in Beaufort, a town in southwestern Sabah, created by Chinese immigrants from Hakka and Cantonese backgrounds. The dish evolved from traditional Chinese noodle recipes adapted to local tastes and available ingredients. The name comes from Beaufort town, which was a key railway and agricultural center during British colonial rule. Local noodle makers developed the distinctive alkaline noodles that could withstand the tropical climate while maintaining their texture. Over decades, family-run noodle factories in Beaufort perfected their recipes, with some establishments becoming legendary for their handmade noodles. The dish gained popularity throughout Sabah and remains strongly associated with Beaufort\'s culinary identity. Today, it is considered a must-try Sabahan specialty, with many restaurants in Kota Kinabalu and other parts of the state featuring their versions of this classic noodle dish.',
        ingredients: [
          'Handmade egg noodles (alkaline noodles)',
          'Pork slices (for topping)',
          'Char siu (barbecued pork)',
          'Pork bones (for broth)',
          'Dried shrimp (for broth flavor)',
          'Soy sauce (light and dark)',
          'Vinegar',
          'Pork lard or cooking oil',
          'Garlic (minced)',
          'Green vegetables (choy sum or kailan)',
          'Spring onions',
          'Fried shallots',
          'White pepper',
          'Salt',
          'Sugar (for balance)',
          'Optional: Fish balls',
          'Optional: Wontons',
          'Optional: Chili paste (for serving)'
        ]
      },
      'sarawak-laksa': {
        name: 'Sarawak Laksa',
        origin: 'Sarawak',
        image: 'https://i0.wp.com/theboywhoatetheworld.com/wp-content/uploads/2017/08/poh-lam-chong-choon-laksa-2.jpg?w=616&h=617&ssl=1',
        description: 'Sarawak Laksa is a iconic noodle soup from the Malaysian state of Sarawak, featuring a rich, aromatic broth made from a complex blend of spices, coconut milk, and Sambal Belacan. Unlike other laksa varieties, Sarawak Laksa has a distinct reddish-brown broth that is neither too curry-like nor too asam-based. The soup is characterized by its harmonious balance of flavors - slightly spicy, subtly sweet, and deeply aromatic. It is typically served with rice vermicelli, topped with shredded chicken, omelette strips, fresh prawns, bean sprouts, and coriander. The dish is always accompanied by a generous wedge of lime and a spoonful of Sambal Belacan on the side, allowing diners to customize the spice level to their preference.',
        history: 'Sarawak Laksa was created in the 1940s by Chinese immigrants in Kuching, Sarawak, who blended local Bornean ingredients with Chinese cooking techniques. The recipe is believed to have been developed by a Teochew immigrant who experimented with local spices and coconut milk to create a unique flavor profile. The dish gained popularity in the 1960s and became a breakfast staple among Kuching residents. The most famous version comes from a family recipe that has been closely guarded for generations. Sarawak Laksa gained international recognition when the late Anthony Bourdain declared it "breakfast of the gods" during his visit to Kuching. Today, it is considered Sarawak\'s most famous culinary export and a source of state pride, with many families and restaurants having their own secret spice blends.',
        ingredients: [
          'Rice vermicelli (bee hoon)',
          'Chicken (shredded)',
          'Prawns (fresh)',
          'Eggs (for omelette strips)',
          'Bean sprouts',
          'Coriander leaves',
          'For the broth: Chicken stock',
          'Coconut milk',
          'Sambal Belacan (shrimp paste chili)',
          'Laksa paste: Dried chilies, shallots, garlic, galangal, lemongrass, turmeric, candlenuts, coriander seeds, cumin, fennel seeds',
          'Tamarin pulp (for subtle sourness)',
          'Sugar (for balance)',
          'Salt',
          'For serving: Lime wedges',
          'Additional Sambal Belacan on the side'
        ]
      },
      'kolo-mee': {
        name: 'Kolo Mee',
        origin: 'Sarawak',
        image: 'https://magazine.foodpanda.my/wp-content/uploads/sites/23/2020/03/cropped-Sarawak-Kolo-Mee.jpg',
        description: 'Kolo Mee is a iconic Sarawakian noodle dish featuring springy egg noodles tossed in a savory sauce and topped with seasoned minced pork, char siu (barbecued pork), and fried shallots. This dry noodle dish is characterized by its light seasoning rather than heavy sauces, allowing the quality of the noodles and toppings to shine. The noodles have a distinct alkaline taste and bouncy texture, typically served with a simple dressing of light soy sauce, pork lard, vinegar, and pepper. Kolo Mee is often accompanied by a bowl of clear soup with fish balls or minced pork. The dish is known for its simplicity, yet perfect balance of flavors and textures, making it a beloved everyday meal for Sarawakians.',
        history: 'Kolo Mee was introduced to Sarawak by Chinese immigrants from Fujian province in the early 20th century. The name "Kolo" is believed to be derived from the Hakka word for "dry" or from the cooking method of "tossing" the noodles. The dish evolved in Kuching, where local noodle makers adapted traditional Chinese noodle recipes to suit Sarawakian tastes and available ingredients. By the 1950s, Kolo Mee had become a staple breakfast and lunch item throughout Sarawak. Family-run noodle factories developed secret recipes for the perfect alkaline noodle texture and seasoning blends. Today, Kolo Mee is synonymous with Sarawak\'s food culture, with each town having its own variations and legendary stalls that have been operating for generations. It remains one of Malaysia\'s most distinctive regional noodle dishes.',
        ingredients: [
          'Alkaline egg noodles (specific to Kolo Mee)',
          'Minced pork (seasoned and cooked)',
          'Char siu (barbecued pork) - sliced',
          'Pork lard (for flavor)',
          'Light soy sauce',
          'Dark soy sauce (for color)',
          'Vinegar (optional)',
          'White pepper',
          'Fried shallots',
          'Spring onions (chopped)',
          'Garlic (minced)',
          'Cooking oil',
          'For soup: Fish balls or pork balls',
          'For soup: Chicken or pork broth',
          'For soup: Vegetables (choy sum or lettuce)',
          'Optional: Chili sauce or pickled green chilies',
          'Optional: Wontons'
        ]
      },
      'manok-pansoh': {
        name: 'Manok Pansoh',
        origin: 'Sarawak',
        image: 'https://assets.hmetro.com.my/images/articles/suh7_1714775417.jpg',
        description: 'Manok Pansoh is a traditional Dayak dish from Sarawak where chicken is cooked in bamboo tubes with minimal ingredients, allowing natural flavors to shine. This indigenous cooking method involves marinating chicken pieces with local herbs and spices, then stuffing them into fresh bamboo tubes along with a small amount of water. The bamboo is sealed with leaves and roasted over an open fire, allowing the chicken to steam in its own juices while absorbing the aromatic flavors from the bamboo. The result is incredibly tender, flavorful chicken with a subtle smoky bamboo fragrance. Manok Pansoh is known for its simplicity, natural preparation, and the unique earthy flavor that can only be achieved through bamboo cooking.',
        history: 'Manok Pansoh has been prepared by indigenous Dayak communities in Sarawak for centuries, representing one of the oldest cooking methods in Borneo. The technique originated from nomadic tribes who needed portable cooking methods while moving through the jungle. Bamboo was readily available and provided a natural cooking vessel that could be used once and discarded. This cooking method was particularly practical for long hunting trips or journeys into the rainforest. Over generations, the recipe was refined and became a staple at Dayak celebrations, festivals, and gatherings. Today, Manok Pansoh is considered a cultural icon of Sarawak and is served at important events as a symbol of Dayak heritage and traditional wisdom in utilizing natural resources.',
        ingredients: [
          'Chicken (preferably free-range) - cut into pieces',
          'Fresh bamboo tubes (young bamboo preferred)',
          'Lemongrass (serai) - bruised',
          'Bamboo shoots (optional)',
          'Wild ginger (lengkuas)',
          'Turmeric leaves (daun kunyit)',
          'Local herbs (daun kesum/ Vietnamese mint)',
          'Bird\'s eye chilies (cili padi)',
          'Shallots',
          'Garlic',
          'Salt',
          'Water (minimal amount)',
          'Wild pepper leaves (optional)',
          'Pandan leaves (for sealing)',
          'Optional: tapioca leaves or other wild vegetables'
        ]
      },
      'bak-kut-teh': {
        name: 'Bak Kut Teh',
        origin: 'Selangor',
        image: 'https://c4.staticflickr.com/6/5662/30084731675_a8ff2d36bc_o.jpg',
        description: 'Bak Kut Teh is a beloved Malaysian Chinese herbal pork rib soup that translates to "meat bone tea." This hearty dish features tender pork ribs slow-cooked for hours in a complex broth of Chinese herbs and spices, resulting in a rich, aromatic, and deeply flavorful soup. The broth is the star - a dark, savory liquid infused with medicinal herbs like dang gui (angelica), yu zhu (solomon\'s seal), and dang shen (codonopsis), along with garlic, star anise, cinnamon, and cloves. The soup is traditionally served with rice, youtiao (fried dough sticks), and strong Chinese tea, which helps cut through the richness. Different regions in Malaysia have their variations, with Klang in Selangor being particularly famous for its robust, herbal version.',
        history: 'Bak Kut Teh was brought to Malaysia by Chinese immigrants from Fujian province in the 19th century. It was originally created as a nourishing tonic for poor laborers and coolies working in ports and mines around Klang, who needed affordable, energy-rich food. The herbal broth was believed to strengthen the body, improve health, and provide warmth in cool, damp conditions. The dish evolved in Klang, where local herbs were incorporated and the recipe was refined over generations. By the mid-20th century, Bak Kut Teh had transformed from humble workers\' food to a celebrated culinary specialty. Today, Klang is considered the Bak Kut Teh capital of Malaysia, with numerous family-run establishments that have been serving their secret recipes for decades. The dish has become a cultural icon and comfort food for many Malaysians.',
        ingredients: [
          'Pork ribs (meaty cuts)',
          'Pork belly or shoulder (optional)',
          'Garlic (whole cloves)',
          'Dang gui (angelica root)',
          'Yu zhu (solomon\'s seal)',
          'Dang shen (codonopsis root)',
          'Wolfberries (kei chi)',
          'Star anise',
          'Cinnamon stick',
          'Cloves',
          'Fennel seeds',
          'Black peppercorns',
          'Dark soy sauce',
          'Light soy sauce',
          'Rock sugar',
          'Salt',
          'Water',
          'For serving: You tiao (fried dough sticks)',
          'For serving: Steamed rice',
          'For serving: Chinese tea'
        ]
      },
      'yong-tau-foo': {
        name: 'Yong Tau Foo',
        origin: 'Selangor',
        image: 'https://jackiem.com.au/wpinstall/wp-content/uploads/2022/02/ampang-yong-tau-foo-stuffed-fish-vegetables-e1644123877381.jpg',
        description: 'Yong Tau Foo is a popular Chinese-Malaysian dish featuring various vegetables and tofu products stuffed with fish paste, then served either in clear soup or with thick sauce. The name translates to "stuffed tofu," but the dish includes a variety of ingredients like bitter gourd, okra, eggplant, chili peppers, and tofu pockets filled with seasoned fish or pork paste. The stuffed items are typically boiled or steamed and served in a light, savory broth or with a thick, savory sauce. Yong Tau Foo is known for its healthy, customizable nature - customers can choose their preferred items from a display, creating a personalized meal with a balance of textures and flavors from the fresh vegetables and savory fillings.',
        history: 'Yong Tau Foo was introduced to Malaysia by Hakka Chinese immigrants from Guangdong province in the early 20th century. The dish originated from the Hakka community in China, who developed creative ways to use tofu and vegetables. In Malaysia, the recipe evolved to incorporate local ingredients and preferences, with fish paste becoming more common than the original ground pork filling. The dish gained popularity in Selangor, particularly in the Klang Valley, where it became a staple at hawker centers and food courts. Over time, Malaysian Yong Tau Foo developed its own identity, with a greater variety of stuffed items and the option of either clear soup or thick sauce serving styles. Today, it is enjoyed by all ethnic groups and considered a healthy, comforting meal option.',
        ingredients: [
          'Tofu (firm, fried, or tofu pockets)',
          'Fish paste (typically mackerel or wolf herring)',
          'Bitter gourd (sliced into rings)',
          'Okra (lady\'s fingers)',
          'Eggplant (sliced)',
          'Chili peppers (mild variety)',
          'Shiitake mushrooms',
          'Bell peppers (optional)',
          'For filling: Fish paste, salt, pepper, cornstarch',
          'For clear broth: Chicken or anchovy stock, garlic, soy sauce',
          'For thick sauce: Soy sauce, oyster sauce, cornstarch, sugar',
          'Garlic (minced)',
          'Spring onions',
          'Sesame oil',
          'White pepper',
          'Optional: Noodles (bee hoon, yellow noodles)',
          'Optional: Fried shallots for garnish'
      ]
    },
    'chee-cheong-fun': {
        name: 'Chee Cheong Fun',
        origin: 'Selangor',
        image: 'https://i.ytimg.com/vi/c2o7_M9vSIo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGexz5uP04BiB4nyDCn6DWwrZUUQ',
        description: 'Chee Cheong Fun is a popular Malaysian Chinese dish consisting of silky smooth rice noodle rolls served with sweet sauce, savory sauce, and sometimes chili paste. The name translates to "pig intestine noodles" due to the roll\'s resemblance to intestines, but it contains no pork. The rice noodles are made from a thin batter steamed into sheets, then rolled up and cut into bite-sized pieces. The dish is characterized by its incredibly soft, smooth texture and the contrast between the mild rice noodles and the flavorful sauces. In Selangor, it is often served with fried dough sticks (youtiao), shrimp, or minced pork inside the rolls. Chee Cheong Fun is typically enjoyed as breakfast, snack, or dim sum item.',
        history: 'Chee Cheong Fun was brought to Malaysia by Cantonese immigrants from southern China in the early 20th century. The dish has its roots in Guangdong province, where it is called "zhěng cháng fěn." In Malaysia, the recipe evolved to suit local tastes, with the development of distinct regional variations. Selangor, particularly the Klang Valley area, became known for its version featuring multiple sauces and various fillings. The dish gained popularity as a breakfast food and tea-time snack, served at kopitiams (coffee shops) and dim sum restaurants. Over generations, Malaysian Chinese families perfected the art of making the delicate rice noodle sheets and developed signature sauce recipes. Today, Chee Cheong Fun remains a beloved comfort food and a staple of Malaysian Chinese cuisine.',
        ingredients: [
          'Rice flour',
          'Tapioca starch or cornstarch',
          'Water',
          'Oil (for brushing)',
          'For sweet sauce: Soy sauce, sugar, dark soy sauce, water',
          'For savory sauce: Hoisin sauce, sesame paste, water',
          'For chili sauce: Chili paste, vinegar, sugar',
          'Sesame oil',
          'Fried shallots',
          'Toasted sesame seeds',
          'Spring onions (chopped)',
          'Optional fillings: Youtiao (fried dough sticks)',
          'Optional fillings: Shrimp',
          'Optional fillings: Minced pork',
          'Optional fillings: Char siu (barbecued pork)',
          'Optional: Pickled green chilies'
        ]
      },
      'nasi-dagang': {
        name: 'Nasi Dagang',
        origin: 'Terengganu',
        image: 'https://i.ytimg.com/vi/-KGxOTHSHcs/sddefault.jpg',
        description: 'Nasi Dagang is a traditional Malaysian rice dish from the east coast states, particularly famous in Terengganu, consisting of fragrant rice cooked with coconut milk and served with rich fish curry, pickled vegetables, and hard-boiled eggs. The name translates to "trader\'s rice," reflecting its historical popularity among merchants and travelers. The rice is uniquely prepared by mixing regular rice with glutinous rice, then cooked in coconut milk with shallots, ginger, and lemongrass, giving it a rich, aromatic flavor and slightly sticky texture. It is traditionally served with gulai ikan tongkol (tuna curry), acar (pickled vegetables), and sliced hard-boiled eggs. Nasi Dagang is known for its complex flavors and is often enjoyed as a special breakfast or during festive occasions.',
        history: 'Nasi Dagang originated from the east coast states of Malaysia, particularly Terengganu and Kelantan, where it has been a staple food for centuries. The dish was historically prepared by Malay traders and fishermen as a nutritious, energy-rich meal that could sustain them through long days at sea or in the markets. The recipe evolved through generations, with each family adding their own variations to the rice preparation and curry recipe. Nasi Dagang became particularly associated with Friday mornings in Terengganu, where it is traditionally eaten for breakfast after prayers. Over time, it gained popularity throughout Malaysia and is now considered one of the country\'s most iconic traditional dishes, representing the rich culinary heritage of Malaysia\'s east coast.',
        ingredients: [
          'Regular rice (usually jasmine rice)',
          'Glutinous rice (pulut)',
          'Coconut milk',
          'Shallots (sliced)',
          'Ginger (julienned)',
          'Lemongrass (bruised)',
          'Fenugreek seeds (halba)',
          'Salt',
          'For gulai: Tuna fish (ikan tongkol) or mackerel',
          'For gulai: Coconut milk',
          'For gulai: Chili paste',
          'For gulai: Turmeric',
          'For gulai: Galangal',
          'For gulai: Tamarind paste',
          'For acar: Cucumber, carrots, pineapples',
          'For acar: Vinegar, sugar, chili',
          'Hard-boiled eggs (sliced)',
          'Fried shallots (for garnish)'
        ]
      },
      'keropok-lekor': {
        name: 'Keropok Lekor',
        origin: 'Terengganu',
        image: 'https://www.tasteatlas.com/images/dishes/576460f5d7c04f34bde13783e77b6f64.jpg',
        description: 'Keropok Lekor is a traditional Malaysian fish snack from Terengganu, made from fish paste mixed with sago flour and then boiled or fried. This iconic east coast delicacy comes in two main varieties: the soft, chewy boiled version (lekor) and the crispy fried version (keping). The snack is made primarily from fish (usually mackerel or Spanish mackerel) that is ground into a paste, mixed with sago flour and salt, then shaped into long cylinders or flat strips. Keropok Lekor is known for its distinctive fish flavor and varying textures, and is traditionally served with spicy chili dipping sauce. It is a popular street food, often enjoyed as a tea-time snack or appetizer.',
        history: 'Keropok Lekor originated from the fishing communities of Terengganu on Malaysia\'s east coast, where it was developed as a way to preserve and utilize the daily catch. The recipe dates back generations among Malay fishing families who needed to make their catch last longer. The word "lekor" comes from the Malay word "lekur" meaning curved or bent, describing the traditional curved shape of the snack. Originally, it was made simply with fish, salt, and sago flour - ingredients readily available in fishing communities. Over time, Keropok Lekor evolved from a practical preservation method to a beloved cultural icon of Terengganu. Today, it is produced commercially and enjoyed throughout Malaysia, with Terengganu remaining the most famous place for authentic Keropok Lekor.',
        ingredients: [
          'Fresh fish (typically mackerel or tenggiri)',
          'Sago flour (tepung ubi)',
          'Salt',
          'Water',
          'For frying: Cooking oil',
          'For dipping sauce: Chilies',
          'For dipping sauce: Vinegar',
          'For dipping sauce: Sugar',
          'For dipping sauce: Garlic',
          'Optional: Sugar (for slight sweetness)',
          'Optional: MSG (in commercial versions)'
        ]
      },
      'satar': {
        name: 'Satar',
        origin: 'Terengganu',
        image: 'https://www.discoveryterengganu.com/wp-content/uploads/2024/05/4-1.jpg',
        description: 'Satar is a traditional Malaysian fish cake from Terengganu, made from spiced fish paste wrapped in banana leaves and grilled over charcoal. This east coast delicacy features a mixture of fish (typically mackerel or Spanish mackerel) that is ground with coconut, herbs, and spices, then shaped into triangular or rectangular parcels using banana leaves. The banana leaves impart a distinctive smoky aroma and flavor during grilling while keeping the fish moist. Satar is known for its slightly spicy, aromatic flavor profile and firm yet tender texture. It is usually served as a snack or appetizer, often accompanied by spicy dipping sauce or eaten on its own.',
        history: 'Satar originated from the fishing communities of Terengganu and has been a part of Malay culinary tradition for generations. The dish was developed as a practical way to prepare and preserve fish using readily available ingredients like banana leaves and coconut. The name "satar" is believed to come from the Malay word "sate" or "satay," though it is quite different from the skewered meat dish. Traditionally, Satar was prepared by fishermen\'s wives using the day\'s catch and cooked over open fires. The banana leaf wrapping served both as cooking vessel and natural packaging, making it easy to transport. Over time, Satar evolved from simple family food to a beloved street snack and is now considered one of Terengganu\'s signature dishes, often found at night markets and food stalls throughout the state.',
        ingredients: [
          'Fresh fish (mackerel or tenggiri) - ground',
          'Grated coconut (fresh)',
          'Shallots',
          'Garlic',
          'Lemongrass',
          'Turmeric',
          'Chilies (bird\'s eye or dried)',
          'Ginger',
          'Coriander seeds',
          'Cumin seeds',
          'Fennel seeds',
          'Salt',
          'Sugar',
          'Banana leaves (for wrapping)',
          'Toothpicks or bamboo skewers (for securing)',
          'For dipping: Chili sauce or sambal'
        ]
      } 

      // Additional food items would be defined here
    };
    
    function openNav() {
      const el = document.getElementById('myNav');
      if (!el) return;
      el.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      const el = document.getElementById('myNav');
      if (!el) return;
      el.style.width = '0';
      document.body.style.overflow = '';
    }

    // optional: close overlay when a menu link is clicked
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('#myNav .overlay-content a:not(.closebtn)')
      .forEach(a => a.addEventListener('click', () => closeNav()));
    });


    function toggleState(card) {
      const foodList = card.querySelector('.food-list');
      const expandIcon = card.querySelector('.expand-icon');
      
      // Close all other cards
      document.querySelectorAll('.state-card').forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('expanded');
          otherCard.querySelector('.food-list').classList.remove('active');
        }
      });
      
      // Toggle current card
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        foodList.classList.remove('active');
      } else {
        card.classList.add('expanded');
        foodList.classList.add('active');
      }
    }

    function showFoodDetails(event, foodId) {
      // Prevent the click from propagating to the state card
      event.stopPropagation();
      
      const food = foodData[foodId];
      if (!food) return;
      
      // Populate modal with food data
      document.getElementById('modalFoodImage').src = food.image;
      document.getElementById('modalFoodName').textContent = food.name;
      document.getElementById('modalFoodOrigin').textContent = `From ${food.origin}`;
      document.getElementById('modalFoodDescription').textContent = food.description;
      document.getElementById('modalFoodHistory').textContent = food.history;
      
      // Clear and populate ingredients list
      const ingredientsList = document.getElementById('modalFoodIngredients');
      ingredientsList.innerHTML = '';
      food.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
      
      // Show the modal
      document.getElementById('foodModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('foodModal').style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
      const modal = document.getElementById('foodModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeNav();
        closeModal();
        // Close all expanded cards
        document.querySelectorAll('.state-card.expanded').forEach(card => {
          card.classList.remove('expanded');
          card.querySelector('.food-list').classList.remove('active');
        });
      }
    });

    // Add hover effects and animations
    document.addEventListener('DOMContentLoaded', function() {
      const stateCards = document.querySelectorAll('.state-card');
      
      stateCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
          if (!this.classList.contains('expanded')) {
            this.style.transform = 'translateY(0) scale(1)';
          }
        });
      });

      // Add food item hover effects
      const foodItems = document.querySelectorAll('.food-item');
      foodItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.03) translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1) translateX(0)';
        });
      });
    });  