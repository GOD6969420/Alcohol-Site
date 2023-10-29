const starters = [
    { "type": "separator", "description": "APERITIFS" },
    {
        "name": "Campari",
        "description": "Bittersweet red Italian aperitif",
        "price": "2300",
        "image": "../Images/APERITIFS/Campari/Americano cocktail.jpeg"
    },
    {
        "name": "Martini Bianco",
        "description": "A sweet red vermouth",
        "price": "2300",
        "image": "../Images/APERITIFS/Martini Bianco/MB.jpeg"
    },
    {
        "name": "Martini Extra Dry",
        "description": "A dry white vermouth",
        "price": "2300",
        "image": "../Images/APERITIFS/Martini Extra Dry/MARTINI 1979 Apéritif Dry.jpeg"
    },
    {
        "name": "Martini Rosso",
        "description": "A white vermouth with herbal notes",
        "price": "2300",
        "image": "../Images/APERITIFS/Martini Rosso/Martini e tonic _ Blog de DIA.jpeg"
    },
    { "type": "separator", "description": "LIQUEUR" },
    {
        "name": "Bailey's Irish Cream",
        "description": "creamy Irish liqueur that combines Irish whiskey with rich dairy cream and hints of chocolate and coffee",
        "price": "3,000",
        "image": "../Images/LIQUEUR/Bailey_s Irish Cream/Baileys.jpeg"
    },
    {
        "name": "Jack Daniel Honey",
        "description": "honey-flavored whiskey liqueur that combines the signature smoothness of Jack Daniel's",
        "price": "3250",
        "image": "../Images/LIQUEUR/Jack Daniel Honey/CGI Product Visualization - JACK DANIEL_S HONEY.jpeg"
    },
    {
        "name": "Jagermeister",
        "description": "herbal liqueur with a distinctive flavor profile with blend of 56 different herbs, fruits, roots, and spices",
        "price": "3750",
        "image": "../Images/LIQUEUR/Jagermeister/Jagermeister soul project.jpeg"
    },
    {
        "name": "Kahlua",
        "description": "Quality rum-based coffee liqueur",
        "price": "2350",
        "image": "../Images/LIQUEUR/Kahlua/Cold Brew White Russian Drink Recipe.png"
    },
    {
        "name": "Patron XO Café",
        "description": "coffee liqueur that combines the flavors of high-quality coffee and premium tequila",
        "price": "3300",
        "image": "../Images/LIQUEUR/Patron XO Café/Patrón XO Cafe Tequila Coffee Liqueur, 70cl.jpeg"
    },
    { "type": "separator", "description": "BEER" },
    {
        "name": "Budweiser",
        "description": "medium-bodied, flavorful, crisp American- style lager. Brewed with the best barley malt and a blend of premium hop varieties",
        "price": "240",
        "image": "../Images/BEER/Budweiser, USA/b37a055e246e378c6c0baa316a1ff8bc.jpg"
    },
    {
        "name": "Hoegaarden",
        "description": "The original Belgian wheat beer and perfect by monks in Belgium, Hoegaarden is a beautiful combination of orange peel, coriander and witbier",
        "price": "250",
        "image": "../Images/BEER/Hoegaarden, Belgium/90430e3787e23617a83c31ab9900ab43.jpg"
    },
    {
        "name": "Kingfisher Premium",
        "description": "one of the first mild beers to be launched under the kingfisher umbrella",
        "price": "200",
        "image": "../Images/BEER/Kingfisher Premium, India/2c649d77709ed1a5efe353102ac8cc21.jpg"
    },
    {
        "name": "Kingfisher Ultra",
        "description": "Made from the finest barley and hops",
        "price": "220",
        "image": "../Images/BEER/Kingfisher Ultra/zomaland.jpg"
    },
    {
        "name": "Corona",
        "description": "The aroma is fruity-honey with a touch of malt and the flavour is crisp and well-balanced between hops and malt, toward the malt side",
        "price": "250",
        "image": "../Images/BEER/Corona, Mexico/94bfa4dbee2b2e5181559d5332ef546e.jpg"
    }

];

const mains = [
    { "type": "separator", "description": "GIN" },
    {
        "name": "Beefeater",
        "description": "Beefeater is one of the classic London Dry gins, with a juniper-driven, crisp dry style enhanced by citrus and exotic aromatics. A consistently reliable full-flavoured gin",
        "price": "2500",
        "image": "../Images/GIN/Beefeater, England/Beefeater_KV_958x1048_0.jpg"
    },
    {
        "name": "Bombay Sapphire",
        "description": "Premium London Dry Gin with extraordinary smoothness and perfectly balanced taste, Bombay Sapphire contains flavours from 10 hand-selected botanicals from exotic locations around the world in every drop.",
        "price": "2800",
        "image": "../Images/GIN/Bombay Sapphire, England/The Star of Bombay at Carousel.jpeg"
    },
    {
        "name": "Colombo 7",
        "description": "Colombo Gin is a definitive London Dry Gin with an unusual list of ingredients.",
        "price": "5600",
        "image": "../Images/GIN/Colombo 7 Sri Lanka/06ca50e1d3dd4464d9e5f34f9f896d4e.jpg"
    },
    {
        "name": "Monkey 47",
        "description": "also known as the Black Forest – and made with an impressive combination of no less than 47 botanicals",
        "price": "5000",
        "image": "../Images/GIN/Monkey 47, Germany/The Monkey 47 Schwarzwald Sloe Gin.jpeg"
    },
    { "type": "separator", "description": "RUM" },
    {
        "name": "Bacardi Gold",
        "description": "Barrel-aged for a minimum of ten years under the Caribbean sun. Then filtered through charcoal for a smooth finish",
        "price": "6500",
        "image": "../Images/RUM/Bacardi Gold, Cuba/Bacardi Gold.jpeg"
    },
    {
        "name": "Bacardi Superior",
        "description": "Bacardi superior rum is a light and aromatically balanced rum. Subtle notes of almonds and lime are complemented by hints of vanilla. The finish is dry, crisp, and clean",
        "price": "2800",
        "image": "../Images/RUM/Bacardi Superior, Cuba/BACARDI Superior Rum _ White Rum _ BACARD_ US.jpeg"
    },
    {
        "name": "Cachacha 51",
        "description": "easy-drinking cachaça surely would blend wonderfully with lime into caipirinhas and other cocktails",
        "price": "1500",
        "image": "../Images/RUM/Cachacha 51, Brazil/Tipsy Bartender.jpeg"
    },
    {
        "name": "Captain Morgan",
        "description": " named after a 17th century pirate with an infectious zest for life. It’s a blend of aged Caribbean and Indian Rum with the heritage of Jamaica at its heart",
        "price": "700",
        "image": "../Images/RUM/Captain Morgan, Puerto Rico/LETSCOCKTAIL _ CAPTAIN MORGAN SPICED Nigelvdhorst_com.jpeg"
    },
    {
        "name": "Old Monk",
        "description": "distilled from molasses and aged for a minimum of 12 years in oak barrels. It is dryer and spicier than its younger sibling with complex notes of cinnamon, clove and chocolate",
        "price": "850",
        "image": "../Images/RUM/Old Monk, India/Rum.jpeg"
    },
    {
        "name": "Ron Diplomatico",
        "description": "Fruity and thick nose with almond, hazelnut and cocoa. Toffee apples, fruits and hints of cooked banana, juicy sherry and mince pies, alongside deep notes of cinnamon and potpourri",
        "price": "60000",
        "image": "../Images/RUM/Ron Diplomatico, Reserva, Venezuela/Diplomatico Rum_ Warm-up With These Cool Cocktails.jpeg"
    },
    { "type": "separator", "description": "SPARKLING" },
    {
        "name": "Chandon Brut",
        "description": "Citrus blossom, green apple, tropical fruits & vanilla",
        "price": "2500",
        "image": "../Images/WINE/SPARKLING/Chandon Brut, Nashik, India/3a042eeb5c0cd19c596878b08b619a73.jpg"
    },
    {
        "name": "Chandon Brut, Rose",
        "description": "Vibrant rose gold with hints of pink peach skin and a fine persistent effervescence. Intense aromas of ripe cherries with mouth-filling flavours of red fruits and soft grapefruit undertones lead to a rich, creamy, persistent finish.",
        "price": "2500",
        "image": "../Images/WINE/SPARKLING/Chandon Brut, Rose, Nashik, India/7e97d7d932ab68ecb9fed5504095ad5b.jpg"
    },
    {
        "name": "Fantinel Spumante Prosecco",
        "description": "Fantinel Spumanti Prosecco has an attractive straw-yellow appearance with a fine, persistent bead",
        "price": "1500",
        "image": "../Images/WINE/SPARKLING/Fantinel Spumante Prosecco, Extra Dry, Fruili-Venezia, Italy/7a0701aff969884c3e2e737ba5da0ee9.jpg"
    },
    {
        "name": "Faustino",
        "description": "Deep & complex with light spice note, ripe fruit with light leather hints",
        "price": "6650",
        "image": "../Images/WINE/SPARKLING/Faustino, Cava, Spain/img_2747.jpg"
    },
    {
        "name": "Martini Prosecco",
        "description": "Martini prosecco sparkling wine is a dry, aromatic italian sparkling wine made from the glera grapes that grow in the lush, sun-drenched foothills of the veneto and friuli regions of north-eastern italy.",
        "price": "2400",
        "image": "../Images/WINE/SPARKLING/Martini Prosecco, Italy/95c70af599a931dc46bbe77e95db66d9.jpg"
    }
];

const desserts = [
    { "type": "separator", "description": "COGNAC" },
    {
        "name": "Hennessy VS",
        "description": "The flavor profile is open, warm, and fruit-forward with apple, grape must, and almonds",
        "price": "6,650",
        "image": "../Images/COGNAC/Hennessy VS/download.jpeg"
    },
    {
        "name": "Hennessy VSOP",
        "description": "well-balanced blend of over 60 eaux-de-vie, matured exclusively in french oak",
        "price": "11,600",
        "image": "../Images/COGNAC/Hennessy VSOP/Hennessy VSOP Cognac_ Memento Linea_.jpeg"
    },
    {
        "name": "Hennessy XO",
        "description": "A rich, fruity palate with prunes, Corinth raisins and sticky toffee pudding.",
        "price": "41,500",
        "image": "../Images/COGNAC/Hennessy XO/Hennessy XO Limited Edition 3D Luxury packaging.jpeg"
    },
    {
        "name": "Hennessy Paradis Imperial",
        "description": "Soft, rich and creamy, with woodspice, cinnamon and dried fruit to the fore",
        "price": "283,500",
        "image": "../Images/COGNAC/Hennessy Paradis Imperial/Hennessy Paradis Imperial.jpeg"
    },
    {
        "name": "Richard Hennessy",
        "description": "Rich and decadent, with plenty of weighty spice at first – cinnamon, clove and toasty oak – then softer notes of apricot and spring flowers",
        "price": "546,500",
        "image": "../Images/COGNAC/Richard Hennessy/Richard Hennessy Check more at https___sipwhiskey_com_product_richard-hennessy_.jpeg"
    },
    {
        "name": "Martell VS",
        "description": "Martell VS Single Distillery marries spirits from a single distillation source in the Cognac region, in France, for a richer and more intense expression of the Martell distillation style",
        "price": "3750",
        "image": "../Images/COGNAC/Martell VS/MARTELL VS SINGLE DISTILLERY (1).jpeg"
    },  
    {
        "name": "Martell VSOP",
        "description": "Darker and more complex than the vs, this is a great after-dinner cognac, but will also add spice to a range of good cocktails. Rich, smooth and mellow.",
        "price": "8000",
        "image": "../Images/COGNAC/Martell VSOP/MARTELL VSOP AGED IN RED BARRELS x MUSIC.jpeg"
    },  
    {
        "name": "Martell XO",
        "description": " This drink is produced from high quality grapes alcohols which have been aging in the oak barrels for 35-40 years",
        "price": "16900",
        "image": "../Images/COGNAC/Martell XO/MARTELL XO.jpeg"
    },  
    {
        "name": "Remy Martin VSOP",
        "description": " This prestigious appellation, Fine Champagne Cognac, will be officially recognized as an AOC 11 years later.",
        "price": "13500",
        "image": "../Images/COGNAC/Remy Martin VSOP/Remy Martin.jpeg"
    },
    {
        "name": "Remy Martin XO",
        "description": "This art of blending allows to perfectly expressing the full aromatic complexity of this XO Fine Champagne cognac.",
        "price": "32000",
        "image": "../Images/COGNAC/Remy Martin XO/Remy Martin XO.png"
    },
    { "type": "separator", "description": "VODKA" },
    {
        "name": "Absolut Elyx",
        "description": "distilled in a vintage copper rectification still from 1929 in small batches using wheat sourced locally from the nearby Råbelöf estate",
        "price": "5000",
        "image": "../Images/VODKA/Absolut Elyx, Sweden/Absolut Elyx Unveils Elegant New Bottle Design.jpeg"
    },
    {
        "name": "Absolut",
        "description": "Putting your nose to the glass you get a gentle, sweet wheat aroma",
        "price": "2400",
        "image": "../Images/VODKA/Absolut, Sweden/Absolut Vodka Home Recipes.jpeg"
    },
    {
        "name": "Beluga Gold Line",
        "description": " Gold Line is an impressively crisp and pure spirit packaged in an extravagant leather box, complete with small hammer and brush to aid in the clean removal of the wax that seals the bottle",
        "price": "30000",
        "image": "../Images/VODKA/Beluga Gold Line, Russia/Beluga.jpeg"
    },
    {
        "name": "Belvedere",
        "description": "A bottle of glorious quadruple-distilled rye vodka of extraordinary purity",
        "price": "8400",
        "image": "../Images/VODKA/Belvedere, Poland/Super-Premium Vodka Made in Poland _ Belvedere Vodka.png"
    },
    {
        "name": "Finlandia",
        "description": "Bracing and sweet, look for spicy ginger, coriander and black pepper on the well-balanced finish",
        "price": "1900",
        "image": "../Images/VODKA/Finlandia, Finland/Finlandia Vodka.jpeg"
    },
    {
        "name": "Grey Goose",
        "description": "highest-grade soft winter wheat and pristine limestone-filtered spring water from Gensac.",
        "price": "5100",
        "image": "../Images/VODKA/Grey Goose, France/Marketing image for Grey Goose Vodka.jpeg"
    },
    { "type": "separator", "description": "CELLAR MASTER RESERVE SELECTION" },
    {
        "name": "Marchesi Antinori",
        "description": "wine known for its rich and complex flavor profile, often made from a blend of Sangiovese, Cabernet Sauvignon, and Cabernet Franc grapes",
        "price": "30000",
        "image": "../Images/WINE/CELLAR MASTER RESERVE SELECTION/Marchesi Antinori, Solaia/58af75c65c2091ce1dc407f60c2f810c.jpg"
    },
    {
        "name": "Opus One",
        "description": "Bordeaux-style blend, typically made from Cabernet Sauvignon and Merlot grapes, known for its exceptional quality and aging potential",
        "price": "50000",
        "image": "../Images/WINE/CELLAR MASTER RESERVE SELECTION/Opus One, Napa Valley, USA/7f163d2657bc32659304f31b4d541705.jpg"
    },
    { "type": "separator", "description": "CHAMPAGNE" },
    {
        "name": "Dom Perignon Brut",
        "description": "the 2010 vintage was given a score of 92 by The Wine Advocate",
        "price": "33500",
        "image": "../Images/WINE/CHAMPAGNE/Dom Perignon Brut, Epernay, France/b863df5de6bff898565a551f50925f95.jpg"
    },
    {
        "name": "G.H. Mumm Cordon Rouge Le Rosé",
        "description": "This is a finely balanced rosé Champagne, just right with acidity and red fruits",
        "price": "5000",
        "image": "../Images/WINE/CHAMPAGNE/G.H. Mumm Cordon Rouge Le Rosé, Champagne, France/5f8986484f7b9128924131.png"
    },
    {
        "name": "G.H. Mumm",
        "description": "crunchy texture, is full of white peach, grated ginger, clover honey, and candied lemon zest",
        "price": "4500",
        "image": "../Images/WINE/CHAMPAGNE/G.H. Mumm, Brut, Reims, France/GH_Mumm_-_Sigh_Sonoma_-_Nov_2018_-_Stierch.jpg"
    },
    {
        "name": "Moet & Chandon Brut Imperial",
        "description": "aromas reveal notes of apple, pear, honey, and floral nuances with brioche and fresh nuts",
        "price": "10000",
        "image": "../Images/WINE/CHAMPAGNE/Moet & Chandon Brut Imperial, Epernay, France/e36635dec8a68508e46e9551078e121d.jpg"
    },
    {
        "name": "Dom Pérignon Rosé Special edition",
        "description": "Bvlgari Serpenti x Dom Pérignon Rosé was born from the encounter between two Maisons guided by common values and vision",
        "price": "20300000",
        "image": "../Images/WINE/CHAMPAGNE/Moet & Chandon Brut Rosé, Epernay, France/209f89b22b5da93368203f02fb54242d.jpg"
    },
    { "type": "separator", "description": "RED WINE" },
    {
        "name": "Diablo Black",
        "description": "Black wood, tobacco and a hint of vanilla.",
        "price": "1500",
        "image": "../Images/WINE/RED WINE/Diablo Black, Cabernet Sauvignon, Chile/Diablo-Black-3.jpg"
    },
    {
        "name": "Oguz Terra Saperavi dry Winetages",
        "description": "Dry wine with an alcohol content of 16% is a rarity for Moldovan winemaking.",
        "price": "2000",
        "image": "../Images/WINE/RED WINE/Oguz Terra Saperavi dry Winetage, Moldova/16ace201439b93887b11095f73aeaaf0.jpg"
    },
    { "type": "separator", "description": "ROSE" },
    {
        "name": "Mannara",
        "description": "A delicate rosé with lifted aromas of spring flowers and strawberries, red berry fruit on the palate and a soft, round finish.",
        "price": "2500",
        "image": "../Images/WINE/ROSE/Mannara, Pinot Grigio. Rose. Sicily. Italy/mannara-pinot-grigio-blush-563999.jpg"
    },
    {
        "name": "Mateus Rose",
        "description": "Floral, grapy and perfumed nose, certainly Muscat-like with candied orange peel, dried grapes, apricot and spicy notes",
        "price": "2150",
        "image": "../Images/WINE/ROSE/Mateus Rose, Portugal/dcd89128a9c28628db27e043ea248921.jpg"
    },
    { "type": "separator", "description": "SUPER TUSCANS" },
    {
        "name": "Bibi Graetz",
        "description": "Bright and fruity with aromas of lemon zest and green apple",
        "price": "3000",
        "image": "../Images/WINE/SUPER TUSCANS/Bibi Graetz, Soffocone/a6dc8546a121e76238b89b928f398334.jpg"
    },
    {
        "name": "La Brancaia",
        "description": "intended to demonstrate the elegance, complexity and intensity that Brancaia is now capable of achieving",
        "price": "16000",
        "image": "../Images/WINE/SUPER TUSCANS/La Brancaia, TRE/DST_4672-1p.jpg"
    },
    {
        "name": "Tenuta di Trinoro Le Cupole Toscana IGT",
        "description": "It's known for its fruit-forward character and is often made from a blend of Bordeaux grape varieties",
        "price": "7000",
        "image": "../Images/WINE/SUPER TUSCANS/Tenuta di Trinoro Le Cupole Toscana IGT, Tuscany, Italy/s892871507213609884_p2539_i2_w1920.webp"
    },
    {
        "name": "Tenuto San Guido 'Guidaibcrto' Toscana iGT",
        "description": "blend of Merlot and Cabernet Sauvignon grapes, delivering a well-structured and elegant wine",
        "price": "6000",
        "image": "../Images/WINE/SUPER TUSCANS/Tenuto San Guido 'Guidaibcrto' Toscana iGT, Tuscany, Itaty/0e4100165e9bba4ca2cb81a84df1e1c9.jpg"
    },
    { "type": "separator", "description": "WHITE WINE" },
    {
        "name": "1811 Château d’Yquem",
        "description": "The grapes shrivel and produce way less juice, but the droplets from every little botrytis-pruned grape are incredibly concentrated and make for sweet",
        "price": "9300000",
        "image": "../Images/WINE/WHITE WINE/1811 Château d’Yquem, Sauternes, Bordeaux/608d585cf7f822db0c3b86cb983457d9.jpg"
    },
    {
        "name": "Domaine de la Romanée-Conti Montrachet",
        "description": "structurally excessive beginning with its bold, rich, luminous and concentrated golden-yellow color",
        "price": "1022000",
        "image": "../Images/WINE/WHITE WINE/Domaine de la Romanée-Conti Montrachet/d7218891399f3cecde11c812e839ecb6.jpg"
    }

];

const drinks = [
    
        { "type": "separator", "description": "TEQUILA" },
        {
            "name": "El Jimador Blanco",
            "description": " El Jimador Blanco is a blanco (silver) tequila, which means it is unaged and typically bottled shortly after distillation",
            "price": "3400",
            "image": "../Images/TEQUILA/El Jimador Blanco/el Jimador Blanco Tequila - 750ml Bottle.jpeg"
        },
        {
            "name": "El Jimador Reposado",
            "description": " El Jimador Reposado is made from 100% blue agave and offers a balance of agave sweetness with subtle oak and vanilla notes.",
            "price": "2500",
            "image": "../Images/TEQUILA/El Jimador Reposado/El Jimador Reposado Tequila auf Cocktailbart_de.jpeg"
        },
        {
            "name": "Patron Silver",
            "description": "perfect white spirit made from the finest Weber Blue Agave",
            "price": "6500",
            "image": "../Images/TEQUILA/Patron Silver/Enjoy Basil Lime Margarita, a cocktail made with Roca Patron Silver_.jpeg"
        },
        { "type": "separator", "description": "WHISKEY" },
        {
            "name": "Aberlour 14 YO",
            "description": "rich and fruity, with a great textured mouthfeel.",
            "price": "21500",
            "image": "../Images/WHISKEY/Aberlour 14 YO/4cb89daa01988f9d5162e7ffc1cfab73.jpg"
        },
        {
            "name": "Bowmore 12 YO",
            "description": "A balance of leathery sherry notes and fruity touches. Ripe mangos, wine gums and Gummi Bears sit on one side",
            "price": "12300",
            "image": "../Images/WHISKEY/Bowmore 12 YO/7b8dea97be29f42963adb0f351c6eca3.jpg"
        },
        {
            "name": "Chivas Regal 25 YO",
            "description": "beautiful delivery...unbelievably juicy and mouthwatering...unadulterated class...leaves you demanding another glass. Brilliant!",
            "price": "36000",
            "image": "../Images/WHISKEY/Chivas Regal 25 YO/74f05cfd0590614c70b37c7ae7569772.jpg"
        },
        {
            "name": "Glenfiddich 18 YO",
            "description": "An elegant nose, faintly sweet, scented with apple and wood",
            "price": "15750",
            "image": "../Images/WHISKEY/Glenfiddich 18 YO/5addc1a3e9e8e223c7f6c3a46b6bcd74.jpg"
        },
        {
            "name": "Jameson Original",
            "description": "Time spent maturing in these double-charred barrels lends our whiskey a unique richness, with more intensified notes of vanilla sweetness and caramel, alongside toasted wood, fruit, and warm spice",
            "price": "4200",
            "image": "../Images/WHISKEY/Jameson Original/c7a6dc18ea8c11cfbb253546f8b57f2c.jpg"
        },
        {
            "name": "Monkey Shoulder",
            "description": "Monkey Shoulder is a mix of three different Speyside single malts and is great with mixers or just on its own. Smooth, sweet and very easy to drink.",
            "price": "4800",
            "image": "../Images/WHISKEY/Monkey Shoulder, Speyside/f745ff972668edf6ec51695b6aa8c842.jpg"
        },
        {
            "name": "Talisker 10 YO",
            "description": "Talisker is the oldest Single Malt Scotch Whisky made by the sea on the shores of the Isle of Skye",
            "price": "6250",
            "image": "../Images/WHISKEY/Talisker 10 YO/05d78778a82e234ba3b621f9c929ca24.jpg"
        },
        {
            "name": "Woodford Reserve",
            "description": "It comprises of more than 200 detectable flavor notes, from bold grain and wood, to sweet aromatics, spice, and fruit & floral notes",
            "price": "6000",
            "image": "../Images/WHISKEY/Woodford Reserve/5597e59f2c356087353685de32c4e263.jpg"
        },
        { "type": "separator", "description": "Euphoria" },
        {
            "name": "81 Year Old The Macallan",
            "description": "This exceptional single malt draws its colour and flavor from maturation in smaller hogshead casks, allowing a greater surface area of wood to interact with the whisky to deliver an intricate character influenced by both Spanish and American oak casks",
            "price": "29000000",
            "image": "../Images/FANCY/81 Year Old The Macallan/9359d9488dbce3d984e67e40bfca5d5f.jpg"
        },
        {
            "name": "Hennessy X.O Cognac Special Edition",
            "description": "The label is releasing only 150 bottles of the exclusive design",
            "price": "3200000",
            "image": "../Images/FANCY/Hennessy X.O Cognac/79a96641b51bce9dd8987e97feee3b49.jpg"
        },
        {
            "name": "Martell L'Or de Jean Martell Cognac",
            "description": "Over 400 extremely rare eaux-de-vie, some over a century old, come together in this prestigious cognac",
            "price": "600000",
            "image": "../Images/FANCY/Martell L'Or de Jean Martell Cognac/600b56dc78efdc825d71246671f6385a.jpg"
        },
        {
            "name": "Royal Salute 21 YO",
            "description": "Royal Salute was created to celebrate the coronation of Queen Elizabeth II",
            "price": "24000",
            "image": "../Images/FANCY/Royal Salute 21 YO/d3f621bb3ed0b47ce9da4027250c4b32.jpg"
        },
        {
            "name": "The Eye of the Dragon",
            "description": "The bottle is handcrafted from the finest Scottish crystal and features a stunning dragon-shaped design, adorned with diamonds, sapphires, and topaz. Inside, you'll discover a vodka that's been distilled five times for impeccable purity and smoothness.",
            "price": "460000000",
            "image": "../Images/FANCY/The Eye of the Dragon, Royal Dragon/9ecd2b8f0680514a05907aa07e2b6d9d.jpg"
        },
];

const shoppingCart = [];

let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

// Add event listeners for category buttons
startersbutton.addEventListener('click', () => {
    setIndicator(0);
    populateItems(starters);
});
mainsbutton.addEventListener('click', () => {
    setIndicator(1);
    populateItems(mains);
});
dessertsbutton.addEventListener('click', () => {
    setIndicator(2);
    populateItems(desserts);
});
drinksbutton.addEventListener('click', () => {
    setIndicator(3);
    populateItems(drinks);
});

function createMenuItemElement(item) {
    if (item.type === "separator") {
        const separator = document.createElement('div');
        separator.classList.add('menu-separator');
        separator.innerHTML = item.description;
        return separator;
    } else {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item-container');

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('div');
        itemName.classList.add('menu-item-name');
        itemName.innerHTML = item.name;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('menu-item-description');
        itemDescription.innerHTML = item.description;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('menu-item-price');
        itemPrice.innerHTML = item.price;

        const itemImage = document.createElement('div');
        itemImage.classList.add('menu-item-image');
        itemImage.style.display = 'none'; // Initially hidden
        itemImage.innerHTML = `<img src="${item.image}" alt="${item.name}">`;

        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-container');
        quantityContainer.style.display = 'none'; // Initially hidden

        const decreaseButton = document.createElement('button');
        decreaseButton.classList.add('quantity-button');
        decreaseButton.innerHTML = '-';

        const quantityDisplay = document.createElement('span');
        quantityDisplay.classList.add('quantity-display');
        let quantity = 0;
        quantityDisplay.innerHTML = quantity;

        const increaseButton = document.createElement('button');
        increaseButton.classList.add('quantity-button');
        increaseButton.innerHTML = '+';

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.style.display = 'none'; // Initially hidden
        addToCartButton.innerHTML = 'Add to Cart';

        let isItemVisible = false;

        // Function to show or hide the image, quantity, and "Add to Cart" button
        const toggleImageAndButton = (event) => {
            if (isItemVisible) {
                itemImage.style.display = 'none';
                quantityContainer.style.display = 'none';
                addToCartButton.style.display = 'none';
            } else {
                itemImage.style.display = 'block';
                quantityContainer.style.display = 'block';
                addToCartButton.style.display = 'block';
                selectedItem = item;
            }
            isItemVisible = !isItemVisible;
            event.stopPropagation(); // Prevent hiding when clicking the button
        };

        // Add click event listener to show or hide image, quantity, and "Add to Cart" button
        menuItem.addEventListener('click', toggleImageAndButton);
// ...

// ...
let isButtonClicked = false;

// Function to add the item to the cart
const addItemToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!Array.isArray(cart)) {
        cart = [];
    }

    const cartItem = {
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: quantity,
        image: selectedItem.image
    };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
};


// Function to remove the item from the cart
const removeItemFromCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemIndex = cart.findIndex(item => item.name === selectedItem.name);

    if (cartItemIndex >= 0) {
        cart.splice(cartItemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

// Add click event listener to the "Add to Cart" button
addToCartButton.addEventListener('click', () => {
    event.stopPropagation(); // Prevent hiding when clicking the button

    if (isButtonClicked) {
        // If the button was clicked, remove the item from the cart
        removeItemFromCart();
    } else {
        // If the button was not clicked, add the item to the cart
        addItemToCart();
    }

    // Toggle back to the original style when clicked again
    if (isButtonClicked) {
        addToCartButton.classList.remove('clicked-button');
    } else {
        // Change the style of the "Add to Cart" button when clicked
        addToCartButton.classList.add('clicked-button');
    }

    isButtonClicked = !isButtonClicked; // Toggle the button state
});
// ...


// ...

        // Add click event listeners for increasing and decreasing quantity
        decreaseButton.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.innerHTML = quantity;
            }
        });

        increaseButton.addEventListener('click', () => {
            quantity++;
            quantityDisplay.innerHTML = quantity;
        });

        // Add all elements to the menu item container
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(quantityDisplay);
        quantityContainer.appendChild(increaseButton);
        menuItemContainer.appendChild(menuItem);
        menuItemContainer.appendChild(itemImage);
        menuItemContainer.appendChild(quantityContainer);
        menuItemContainer.appendChild(addToCartButton);

        return menuItemContainer;
    }
}

function populateItems(items) {
    const menu = document.querySelector('.menu');
    menu.innerHTML = ''; // Clear the menu

    items.forEach((item) => {
        const menuItemContainer = createMenuItemElement(item);
        menu.appendChild(menuItemContainer);
    });
}

function setIndicator(sel) {
    sl = sel;
    let vp = "";
    if (window.innerWidth < 800) {
        vp = "60px";
    } else {
        vp = "85%";
    }
    let elems = [ni1, ni2, ni3, ni4];
    for (i = 0; i < elems.length; i++) {
        if (i === sel) {
            elems[i].style.width = vp;
            elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
        } else {
            elems[i].style.width = "0";
            elems[i].style.boxShadow = "none";
        }
    }
}

window.addEventListener("resize", (e) => {
    setIndicator(sl);
});

// Initialize with the starters category
populateItems(starters);
setIndicator(0);
