const products = 
{
    "resources": [
      {  
        "productId": 1, 
        "title": "PlayStation 4 (PS4)",
        "creator": "Sony Corporation",
        "description": "The PlayStation 4 Gaming Console is the best place to play with dynamic, connected gaming, powerful graphics and speed, intelligent personalization, deeply integrated social capabilities and innovative second-screen features. Combining unparalleled content, immersive gaming experiences, all of your favorite digital entertainment apps, and PlayStation exclusives, the Playstation 4 Console (PS4) centers on gamers, enabling them to play when, where and how they want.",
        "price": 299.99,
        "productType": "gaming console",
        "productCategory": "PlayStation",
        "productImages": [
          { "imageId": 1, "url": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2014/09/ps4-t%C5%82o.jpg", "caption": "PS4", "primaryImage": true },
          { "imageId": 2, "url": "https://images10.newegg.com/BizIntell/item/68/110/68-110-214/c0.jpg", "caption": "PS4 Pro", "primaryImage": false  },
          { "imageId": 3, "url": "https://i.ytimg.com/vi/fL5fEel7k6s/maxresdefault.jpg", "caption": "PS4 Slim", "primaryImage": false }
        ],
        "availability": "In Stock"
      },
  
      {  
        "productId": 2, 
        "title": "Xbox One",
        "creator": "Microsoft",
        "description": "Xbox One is a line of eighth generation home video game consoles developed by Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third console in the Xbox family.",
        "price": 249.99,
        "productType": "gaming console",
        "productCategory": "Xbox",
        "productImages": [
          { "imageId": 4, "url": "https://www.comunidadxbox.com/wp-content/imagenes/498276-mejores-juegos-xbox-one.jpg", "caption": "XBox One", "primaryImage": true },
          { "imageId": 5, "url": "https://i.ytimg.com/vi/XuTwtOo88r8/maxresdefault.jpg", "caption": "Xbox One S", "primaryImage": false},
          { "imageId": 6, "url": "https://cdn.wccftech.com/wp-content/uploads/2017/11/Xbox-One.jpg", "caption": "XBox One X", "primaryImage": false }
        ],
        "availability": "In Stock"
      },    
  
      {  
        "productId": 3, 
        "title": "Wii U",
        "creator": "Nintendo",
        "description": "Wii U is the next great gaming console from Nintendo and it redefines how you will play next. With its innovative Wii U GamePad controller, it will not only introduce entirely new ways to play games, it will also transform how you connect with friends and enjoy entertainment. ",
        "price": 249.99,
        "productType": "gaming console",
        "productCategory": "Nintendo",
        "productImages": [
          { "imageId": 7, "url": "https://cdn.arstechnica.net/wp-content/uploads/2012/10/wiiuofficial-640x363.png", "caption": "Wii U", "primaryImage": true }
        ],
        "availability": "In Stock"
      },
  
      {  
        "productId": 4, 
        "title": "Nintendo Switch",
        "creator": "Nintendo",
        "description": "Nintendo Switch is designed to go wherever you do, transforming from home console to portable system in a snap. So you get more time to play the games you love, however you like.",
        "price": 249.99,
        "productType": "gaming console",
        "productCategory": "Nintendo",
        "productImages": [
          { "imageId": 8, "url": "https://static.gamespot.com/uploads/original/1578/15787979/3418518-6925348107-32015.jpg", "caption": "Nintendo Switch", "color": "neon", "primaryImage": true },
          { "imageId": 9, "url": "https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/pane1.jpg", "caption": "Nintendo Switch", "color": "gray", "primaryImage": false }
        ],
        "availability": "In Stock"
      }, 
  
      {  
        "productId": 5, 
        "title": "Wii",
        "creator": "Nintendo",
        "description": "The Wii console brings a revolution of interactive gaming to people of all ages. Experience intuitive motion controls that deliver a unique social activity for the whole family.",
        "price": 199.99,
        "productType": "gaming console",
        "productCategory": "Nintendo",
        "productImages": [
          { "imageId": 10, "url": "http://nerdreactor.com/wp-content/uploads/2016/11/nintendo-wii-console.jpg", "caption": "Wii", "primaryImage": true }
        ],
        "availability": "Limited"
      }, 
  
      {  
        "productId": 6, 
        "title": "PlayStation 3 (PS3)",
        "creator": "Sony Corporation",
        "description": "The PlayStation 3 (PS3) is a home video game console developed by Sony Computer Entertainment. It is the successor to PlayStation 2, and is part of the PlayStation brand of consoles.",
        "price": 199.99,
        "productType": "gaming console",
        "productCategory": "PlayStation",
        "productImages": [
          { "imageId": 11, "url": "http://meredith.images.worldnow.com/images/16354468_G.jpg?lastEditedDate=20180320101859", "caption": "PS3", "primaryImage": true },
          { "imageId": 12, "url": "https://http2.mlstatic.com/ps3-slim-desbloqueado-2-controles-cabos-5-jogos-120gb-D_NQ_NP_866851-MLB27292879021_052018-F.jpg", "caption": "PS3 Slim", "primaryImage": false }
        ],
        "availability": "Limited"
      }, 
  
      {  
        "productId": 7, 
        "title": "Xbox 360",
        "creator": "Microsoft",
        "description": "Xbox 360. The Xbox 360 is a home video game console developed by Microsoft. As the successor to the original Xbox, it is the second console in the Xbox series. It competed with Sony's PlayStation 3 and Nintendo's Wii as part of the seventh generation of video game consoles.",
        "price": 37.99,
        "productType": "gaming console",
        "productCategory": "Xbox",
        "productImages": [
          { "imageId": 13, "url": "https://globaltechworld.com/wp-content/uploads/2015/10/xbox_360_glossy_Microsoft.jpg", "caption": "Xbox 360", "primaryImage": true }
        ],
        "availability": "Limited"
      }, 
  
      {  
        "productId": 8, 
        "title": "Xbox",
        "creator": "Microsoft",
        "description": "The Xbox is a home video game console and the first installment in the Xbox series of consoles manufactured by Microsoft. It was released on November 15, 2001 in North America, followed by Australia, Europe and Japan in 2002. It was Microsoft's first foray into the gaming console market.",
        "price": 44.99,
        "productType": "gaming console",
        "productCategory": "Xbox",
        "productImages": [
          { "imageId": 14, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg", "caption": "Xbox", "primaryImage": true }
        ],
        "availability": "Rare"
      }, 
  
      {  
        "productId": 9, 
        "title": "GameCube",
        "creator": "Nintendo",
        "description": "The GameCube is the first Nintendo console to use optical discs as its primary storage medium. The discs are in the miniDVD format; as a result of their smaller size and the console's small disc compartment, the system was not designed to play standard DVDs or audio CDs.",
        "price": 84.99,
        "productType": "gaming console",
        "productCategory": "Nintendo",
        "productImages": [
          { "imageId": 15, "url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/GameCube-Set.jpg", "caption": "GameCube", "primaryImage": true }
        ],
        "availability": "Rare"
      },
      
      {  
        "productId": 10, 
        "title": "PlayStation 2 (PS2)",
        "creator": "Sony Corporation",
        "description": "The PlayStation 2 (PS2) is a home video game console that was developed by Sony Computer Entertainment. It is the successor to the PlayStation and is the second installment in the PlayStation lineup of consoles.",
        "price": 49.99,
        "productType": "gaming console",
        "productCategory": "PlayStation",
        "productImages": [
          { "imageId": 16, "url": "https://ksassets.timeincuk.net/wp/uploads/sites/54/2015/11/PS2-1.jpg", "caption": "PS2", "primaryImage": true }
        ],
        "availability": "Rare"
      },
  
      {  
        "productId": 11, 
        "title": "PlayStation",
        "creator": "Sony Corporation",
        "description": "The PlayStation is a home video game console developed and marketed by Sony Computer Entertainment. The console was released on 3 December 1994 in Japan, 9 September 1995 in North America, 29 September 1995 in Europe, and 15 November 1995 in Australia. The console was the first of the PlayStation lineup of home video game consoles. It primarily competed with the Nintendo 64 and the Sega Saturn as part of the fifth generation of video game consoles.",
        "price": 81.99,
        "productType": "gaming console",
        "productCategory": "PlayStation",
        "productImages": [
          { "imageId": 17, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PSX-Console-wController.jpg/1200px-PSX-Console-wController.jpg", "caption": "PlayStation", "primaryImage": true }
        ],
        "availability": "Rare"
      },
  
      {  
        "productId": 12, 
        "title": "Nintendo 64",
        "creator": "Nintendo",
        "description": "The Nintendo 64 was one of the first gaming consoles to have four controller ports.The most graphically demanding Nintendo 64 games that arrived on larger 32 or 64 MB cartridges are the most advanced and detailed of the 32-bit/64-bit generation.",
        "price": 369.99,
        "productType": "gaming console",
        "productCategory": "Nintendo",
        "productImages": [
          { "imageId": 18, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nintendo-64-wController-L.jpg/300px-Nintendo-64-wController-L.jpg", "caption": "Nintendo 64", "primaryImage": true }
        ],
        "availability": "Very Rare"
      }
    ]
  }

  export default products;