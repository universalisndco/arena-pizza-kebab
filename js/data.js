// ============================================================
// ARENA PIZZA KEBAB — Menu Data (version finale avec meilleures images)
// ============================================================

const APK_MENU = {
  categories: [
    { id:"pizzas",        label:"Pizzas" },
    { id:"tacos",         label:"Tacos" },
    { id:"rolls",         label:"Rolls Arena" },
    { id:"krousty",       label:"Krousty APK" },
    { id:"panini",        label:"Panini" },
    { id:"fried-chicken", label:"Fried Chicken" },
    { id:"sandwichs",     label:"Sandwichs" },
    { id:"burgers",       label:"Burgers" },
    { id:"assiettes",     label:"Assiettes" },
    { id:"salade",        label:"Salades" },
    { id:"kids",              label:"Kids Menu" },
    { id:"pizza-etudiante",   label:"🎓 Pizza Étudiante" },
    { id:"desserts",          label:"Desserts" },
    { id:"boissons",          label:"Boissons" }
  ],

  pizzaSeries: [
    { id:"favoris",   label:"Nos Pizzas Favoris",  prices:"Junior 9€ / Senior 12€ / Méga 19€" },
    { id:"premium",   label:"Nos Pizzas Premium",   prices:"Junior 10€ / Senior 13€ / Méga 20€" },
    { id:"mealLover", label:"The Meal Lover",        prices:"Junior 11€ / Senior 14€ / Méga 21€" },
    { id:"signature", label:"Signature du Chef",     prices:"Junior 12€ / Senior 15€ / Méga 22€" }
  ],

  items: [
  { id:"pizza-margherita", category:"pizzas", serie:"favoris", name:"Margherita", description:"Mozzarella, sauce tomate", price:9.00, image:"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-4-fromages", category:"pizzas", serie:"favoris", name:"4 Fromages", description:"Mozzarella, mélange de 4 fromages", price:9.00, image:"https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=600&q=85", badge:"Populaire", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-chevre-miel", category:"pizzas", serie:"favoris", name:"Chèvre Miel", description:"Mozzarella, chèvre, miel, olives", price:9.00, image:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-napolitaine", category:"pizzas", serie:"favoris", name:"Napolitaine", description:"Mozzarella, anchois, câpres, olives, tomate fraîche", price:9.00, image:"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-calzone", category:"pizzas", serie:"favoris", name:"Calzone", description:"Mozzarella, jambon ou poulet — pizza pliée", price:9.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    { label: "Garniture", type: "radio", required: true, choices: ["Jambon", "Poulet"] },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    },
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    }
  ] },
  { id:"pizza-reine", category:"pizzas", serie:"favoris", name:"Reine", description:"Mozzarella, jambon, champignons, olives", price:9.00, image:"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-campione", category:"pizzas", serie:"favoris", name:"Campione", description:"Mozzarella, champignons, oeuf, bœuf haché", price:9.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-orientale", category:"pizzas", serie:"premium", name:"Orientale", description:"Mozzarella, merguez, oeuf, olives, champignons, poivrons", price:10.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-torino", category:"pizzas", serie:"premium", name:"Torino", description:"Mozzarella, fromage à raclette, jambon, pommes de terre", price:10.00, image:"https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-vegetarienne", category:"pizzas", serie:"premium", name:"Végétarienne", description:"Mozzarella, poivrons, champignons, olives, aubergines", price:10.00, image:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-paysanne", category:"pizzas", serie:"premium", name:"Paysanne", description:"Mozzarella, bœuf haché, pommes de terre, oignons", price:10.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-raclette", category:"pizzas", serie:"premium", name:"Raclette", description:"Mozzarella, lardons, pommes de terre, fromage à raclette", price:10.00, image:"https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-thon", category:"pizzas", serie:"premium", name:"Thon", description:"Mozzarella, thon, oeuf, olives, oignons", price:10.00, image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-tartiflette", category:"pizzas", serie:"premium", name:"Tartiflette", description:"Mozzarella, lardons, reblochon, pommes de terre", price:10.00, image:"https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-kebab-piz", category:"pizzas", serie:"premium", name:"Pizza Kebab", description:"Mozzarella, viande kebab, tomates fraîches, oignons", price:10.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Best-seller", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-americaine", category:"pizzas", serie:"premium", name:"Américaine", description:"Mozzarella, poulet, bœuf haché, oignons, cheddar", price:10.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-norvegienne", category:"pizzas", serie:"premium", name:"Norvégienne", description:"Mozzarella, saumon, pomme de terre", price:10.00, image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-4-saisons", category:"pizzas", serie:"premium", name:"4 Saisons", description:"Mozzarella, jambon, champignons, olives, poivrons, aubergines grillées, tomates", price:10.00, image:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-chicken", category:"pizzas", serie:"premium", name:"Chicken", description:"Mozzarella, poulet, champignons, poivrons, oignons, oeuf", price:10.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-mexicaine", category:"pizzas", serie:"mealLover", name:"Mexicaine", description:"Mozzarella, chorizo, bœuf haché, olives, poivrons", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-savoyarde", category:"pizzas", serie:"mealLover", name:"Savoyarde", description:"Mozzarella, chèvre, pommes de terre, jambon", price:11.00, image:"https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-pecheur", category:"pizzas", serie:"mealLover", name:"Pêcheur", description:"Mozzarella, fruits de mer", price:11.00, image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-gourmande", category:"pizzas", serie:"mealLover", name:"Gourmande", description:"Mozzarella, poulet, bœuf haché, kebab", price:11.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-royale", category:"pizzas", serie:"mealLover", name:"Royale", description:"Mozzarella, pommes de terre, merguez, poulet, olives", price:11.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-campagnarde", category:"pizzas", serie:"mealLover", name:"Campagnarde", description:"Mozzarella, lardons, jambon, oeuf, poivrons, champignons", price:11.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-cannibale", category:"pizzas", serie:"mealLover", name:"Cannibale", description:"Mozzarella, bœuf haché, merguez, poulet", price:11.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-indienne", category:"pizzas", serie:"mealLover", name:"Indienne", description:"Mozzarella, oignon, poulet curry, poivron, poulet tandoori", price:11.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-buffalo", category:"pizzas", serie:"mealLover", name:"Buffalo Boursin", description:"Mozzarella, oignon, bœuf haché, boursin, chorizo", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-western", category:"pizzas", serie:"mealLover", name:"Western", description:"Mozzarella, lardons, poulet, pommes de terre", price:11.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-chicago", category:"pizzas", serie:"mealLover", name:"Chicago", description:"Mozzarella, poulet, boursin, jambon, pommes de terre", price:11.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:null, options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-4-jambons", category:"pizzas", serie:"signature", name:"4 Jambons", description:"Mozzarella, jambon, chorizo, lardons, merguez", price:12.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-fermiere", category:"pizzas", serie:"signature", name:"Fermière", description:"Mozzarella, jambon, poulet curry, pomme de terre, chèvre", price:12.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-diva", category:"pizzas", serie:"signature", name:"Diva", description:"Mozzarella, champignons, bœuf haché, chorizo, gorgonzola", price:12.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-arena-deal", category:"pizzas", serie:"signature", name:"Arena Deal", description:"Mozzarella, chorizo, jambon, oeuf, chèvre", price:12.00, image:"https://images.unsplash.com/photo-1702716059239-385baacdabdc?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-exotique", category:"pizzas", serie:"signature", name:"Exotique", description:"Mozzarella, chèvre, poulet curry, ananas, miel", price:12.00, image:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-milano", category:"pizzas", serie:"signature", name:"Milano", description:"Mozzarella, bœuf haché, champignons, mélange de 4 fromages", price:12.00, image:"https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-capri", category:"pizzas", serie:"signature", name:"Capri", description:"Mozzarella, pommes de terre, gorgonzola, bœuf haché", price:12.00, image:"https://images.unsplash.com/photo-1702716059239-385baacdabdc?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"pizza-boursalino", category:"pizzas", serie:"signature", name:"Boursalino", description:"Mozzarella, oignons, bœuf haché, boursin, pommes de terre, cheddar", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
    {
      label: "Base", type: "radio", required: true,
      choices: ["Base Tomate", "Base Crème Fraîche"]
    },
    {
      label: "Taille", type: "size_radio", required: true,
      choices: [
        { name: "Junior · 29cm", priceAdd: 0 },
        { name: "Senior · 33cm", priceAdd: 3 },
        { name: "Méga · 40cm",   priceAdd: 10 }
      ]
    }
  ] },
  { id:"tacos-1viande", category:"tacos", name:"Tacos 1 Viande", description:"Frite +1€ · Boisson +1€", price:8.00, image:"img/tacos.jpg", badge:null, options:[{ label:"Viande", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Suppléments", type:"multi", required:false, choices:[{ name:"Frite", price:1.00 },{ name:"Boisson", price:1.00 },{ name:"Viande supplémentaire", price:2.00 }] }] },
  { id:"tacos-2viandes", category:"tacos", name:"Tacos 2 Viandes", description:"Frite +1€ · Boisson +1€", price:10.00, image:"img/tacos.jpg", badge:"Populaire", options:[{ label:"Viande 1", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Viande 2", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Suppléments", type:"multi", required:false, choices:[{ name:"Frite", price:1.00 },{ name:"Boisson", price:1.00 },{ name:"Viande supplémentaire", price:2.00 }] }] },
  { id:"tacos-3viandes", category:"tacos", name:"Tacos 3 Viandes", description:"Frite +1€ · Boisson +1€", price:12.00, image:"img/tacos.jpg", badge:"Maxi", options:[{ label:"Viande 1", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Viande 2", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Viande 3", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Suppléments", type:"multi", required:false, choices:[{ name:"Frite", price:1.00 },{ name:"Boisson", price:1.00 },{ name:"Viande supplémentaire", price:2.00 }] }] },
  { id:"tacos-bowl", category:"tacos", name:"Tacos Bowl", description:"2 viandes au choix · Boisson +1€", price:10.00, image:"img/tacos.jpg", badge:"Nouveau", options:[{ label:"Viande 1", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Viande 2", type:"radio", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] }, { label:"Suppléments", type:"multi", required:false, choices:[{ name:"Frite", price:1.00 },{ name:"Boisson", price:1.00 },{ name:"Viande supplémentaire", price:2.00 }] }] },
  { id:"defsoce", category:"tacos", name:"Defsoce", description:"Viande hachée / Poulet / Kebab / Merguez + Boisson", price:12.00, image:"img/tacos.jpg", badge:null, options:[{ label:"Viande", type:"radio", required:true, choices:["Viande Hachée","Poulet","Kebab","Merguez"] }] },
  { id:"roll-bourssin", category:"rolls", name:"Roll Bourssin", description:"Galette, Tenders, Bourssin, Oeuf — avec frite + boisson", price:13.00, image:"img/roll.jpg", badge:null, options:[{ label:"Supplément fromage (+1€)", type:"multi", required:false, choices:[{ name:"Raclette", price:1.00 },{ name:"Reblochon", price:1.00 },{ name:"Chèvre", price:1.00 },{ name:"Cheddar", price:1.00 }] }] },
  { id:"roll-queen", category:"rolls", name:"Queen Arena", description:"Galette, Steak, Cheddar, Oeuf — avec frite + boisson", price:13.00, image:"img/roll.jpg", badge:"Signature", options:[{ label:"Supplément fromage (+1€)", type:"multi", required:false, choices:[{ name:"Raclette", price:1.00 },{ name:"Reblochon", price:1.00 },{ name:"Chèvre", price:1.00 },{ name:"Cheddar", price:1.00 }] }] },
  { id:"krousty-apk", category:"krousty", name:"Krousty APK", description:"Riz Blanc, Sauce Blanche Maison, Sauce Thaï Maison, Oignon Frits — avec Boisson", price:10.00, image:"img/krousty.jpg", badge:"Nouveau", options:[] },
  { id:"krousty-curry", category:"krousty", name:"Riz Chicken Curry", description:"Chicken, Crème de Curry, Riz Blanc, Sauce Blanche, Sauce Thaï, Oignon Frits — avec Boisson", price:12.00, image:"img/krousty.jpg", badge:"Nouveau", options:[] },
  { id:"krousty-tandoori", category:"krousty", name:"Riz Chicken Tandoori", description:"Chicken Marinade Tandoori, Riz Blanc, Sauce Blanche, Sauce Thaï, Oignon Frits — avec Boisson", price:12.00, image:"img/krousty.jpg", badge:"Nouveau", options:[] },
  { id:"panini-menu", category:"panini", name:"Panini Menu", description:"Au choix : Poulet, Kebab, 4 Fromage, Jambon, Viande Hachée", price:8.00, image:"https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&q=85", badge:null, options:[{ label:"Garniture", type:"radio", required:true, choices:["Poulet","Kebab","4 Fromage","Jambon","Viande Hachée"] }] },
  { id:"fc-tenders5", category:"fried-chicken", name:"Menu 1 Pers. — Tenders x5", description:"5 Tenders + frites + boisson 33cl", price:9.90, image:"img/fried-chicken.jpg", badge:null, options:[{ label:"Sauce", type:"radio", required:true, choices:["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }] },
  { id:"fc-wings8", category:"fried-chicken", name:"Menu 1 Pers. — Wings x8", description:"8 Wings + frites + boisson 33cl", price:9.90, image:"img/fried-chicken.jpg", badge:null, options:[{ label:"Sauce", type:"radio", required:true, choices:["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }] },
  { id:"fc-tenders10", category:"fried-chicken", name:"Menu 2 Pers. — Tenders x10", description:"10 Tenders + 2 frites + 2 boissons", price:19.00, image:"img/fried-chicken.jpg", badge:"Duo", options:[{ label:"Sauce", type:"radio", required:true, choices:["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }] },
  { id:"fc-wings16", category:"fried-chicken", name:"Menu 2 Pers. — Wings x16", description:"16 Wings + 2 frites + 2 boissons", price:19.00, image:"img/fried-chicken.jpg", badge:"Duo", options:[{ label:"Sauce", type:"radio", required:true, choices:["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }] },
  { id:"fc-mix", category:"fried-chicken", name:"Menu 2 Pers. — Mix x7+x7", description:"7 Tenders + 7 Wings + 2 frites + 2 boissons", price:19.00, image:"img/fried-chicken.jpg", badge:"Duo", options:[{ label:"Sauce", type:"radio", required:true, choices:["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }] },
  { id:"sw-kebab", category:"sandwichs", name:"Kebab", description:"Pain, viande kebab, salade, tomate, oignon — Maxi +2€ · Pain ou Durum", price:7.00, image:"img/sandwich.jpg", badge:null, options:[{ label:"Format", type:"radio", required:true, choices:["Normal","Maxi (+2,00€)","Durum"] }, { label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 }] }] },
  { id:"sw-americain", category:"sandwichs", name:"Américain", description:"Steak haché (90g), cheddar, salade, tomate, oignon", price:7.00, image:"img/sandwich.jpg", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 }] }] },
  { id:"sw-chicken-tandoori", category:"sandwichs", name:"Chicken Tandoori", description:"Poulet tandoori, cheddar, salade, tomate, oignon", price:8.00, image:"img/sandwich.jpg", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 }] }] },
  { id:"sw-chicken-curry", category:"sandwichs", name:"Chicken Cheese Curry", description:"Poulet curry, cheddar, salade, tomate, oignon", price:8.00, image:"img/sandwich.jpg", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 }] }] },
  { id:"sw-big-americain", category:"sandwichs", name:"Big Américain", description:"2 steaks (90g), 2 cheddars, oeuf, salade, tomate, oignon", price:9.00, image:"img/sandwich.jpg", badge:"Maxi", options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 }] }] },
  { id:"assiette-kebab", category:"assiettes", name:"Assiette Kebab", description:"2 viandes au choix + frites", price:11.00, image:"img/assiette.jpg", badge:null, options:[{ label:"Viande 1", type:"radio", required:true, choices:["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }, { label:"Viande 2", type:"radio", required:true, choices:["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }] },
  { id:"assiette-mixte", category:"assiettes", name:"Assiette Mixte", description:"2 viandes au choix + frites", price:14.00, image:"img/assiette.jpg", badge:null, options:[{ label:"Viande 1", type:"radio", required:true, choices:["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }, { label:"Viande 2", type:"radio", required:true, choices:["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }] },
  { id:"salade-cesar", category:"salade", name:"Salade César", description:"Salade, Tomate, Olive, Omelette — viande au choix", price:9.00, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85", badge:null, options:[{ label:"Viande", type:"radio", required:true, choices:["Steak Haché","Poulet","Kebab","Tenders","Merguez"] }] },
  { id:"burger-hamburger", category:"burgers", name:"Hamburger", description:"Steak 90g, 1 oeuf, 2 cheddar, salade, tomate, oignon", price:7.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"burger-chicken-crispy", category:"burgers", name:"Chicken Crispy", description:"Crispy, cheddar, chèvre, miel, salade, tomate, oignon", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"burger-chicken-burger", category:"burgers", name:"Chicken Burger", description:"2 tenders, 2 cheddar, salade, tomate, oignon", price:7.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"burger-big", category:"burgers", name:"Big Burger", description:"2 steaks 90g, 1 oeuf, 2 cheddar, salade, tomate, oignon", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:"Populaire", options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"burger-bc", category:"burgers", name:"B&C", description:"1 steak 90g, 1 Crispy, oignon, 2 cheddar, salade, tomate", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"burger-king", category:"burgers", name:"King Arena Max", description:"3 steaks, 1 omelette, 3 cheddar, raclette", price:13.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:"King", options:[{ label:"Suppléments", type:"multi", required:false, choices:[{ name:"Boisson 33cl", price:1.00 },{ name:"Frites", price:1.00 },{ name:"Raclette", price:1.60 },{ name:"Reblochon", price:1.60 },{ name:"Cheddar", price:1.60 },{ name:"Chèvre", price:1.60 },{ name:"Miel", price:1.60 },{ name:"Oeuf", price:1.60 },{ name:"Steak 45g", price:1.60 },{ name:"Steak 90g", price:2.00 }] }] },
  { id:"kids-menu", category:"kids", name:"Kids Menu", description:"5 Nuggets + 1 Jus", price:6.00, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", badge:null, options:[] },

  // ── Offre Étudiante ──────────────────────────────────────────────────────────
  { id:"offre-etudiante", category:"pizza-etudiante", serie:null,
    name:"Offre Étudiante 🎓", price:8.00,
    description:"Tacos 2 Viandes + Frite + Boisson OU Pizza Junior au choix — 8€",
    image:"img/tacos.jpg",
    badge:"8€", isNewCategory:true, categoryLabel:"Pizza Étudiante", specialType:"pizza-etudiante",
    options:[
      { label:"Formule", type:"radio", required:true, choices:[
        "Tacos 2 Viandes + Frite + Boisson",
        "Pizza Junior au choix"
      ]},
      { label:"Viande 1 (si Tacos)", type:"radio", required:false, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Poulet Curry","Poulet Tandoori"] },
      { label:"Viande 2 (si Tacos)", type:"radio", required:false, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Poulet Curry","Poulet Tandoori"] },
      { label:"Pizza (si Pizza Junior)", type:"radio", required:false, choices:["Margherita","4 Fromages","Chèvre Miel","Napolitaine","Reine","Campione","Orientale","Végétarienne","Thon","Chicken","Kebab","Américaine","Au choix du chef"] }
    ]
  },
  { id:"tiramisu", category:"desserts", name:"Tiramisu", description:"Tiramisu maison", price:4.00, image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85", badge:null, options:[] },
  { id:"tarte-daim", category:"desserts", name:"Tarte au Daim", description:"Tarte croustillante au caramel Daim", price:3.50, image:"https://images.unsplash.com/photo-1606313564200-e75d5e394746?w=600&q=85", badge:null, options:[] },
  { id:"hagen-100", category:"desserts", name:"Häagen-Dazs 100ml", description:"Mini pot glace premium individuel", price:4.50, image:"https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=600&q=85", badge:null, options:[{ label:"Parfum", type:"radio", required:true, choices:["Vanille","Fraise","Chocolat","Caramel","Cookie"] }] },
  { id:"hagen-500", category:"desserts", name:"Häagen-Dazs 500ml", description:"Grand pot glace premium — à partager", price:9.00, image:"https://images.unsplash.com/photo-1551024601-bec78ebe8a85?w=600&q=85", badge:"Famille", options:[{ label:"Parfum", type:"radio", required:true, choices:["Vanille","Fraise","Chocolat","Caramel","Cookie"] }] },
  { id:"coca-canette", category:"boissons", name:"Coca-Cola — Canette 33cl", description:"Canette fraîche 33cl", price:2.00, image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=85", badge:null, options:[] },
  { id:"coca-bouteille", category:"boissons", name:"Coca-Cola — Bouteille 1.5L", description:"Grande bouteille à partager", price:3.50, image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=85", badge:null, options:[] },
  { id:"cocazero-canette", category:"boissons", name:"Coca-Cola Zero — Canette 33cl", description:"Canette fraîche 33cl", price:2.00, image:"https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=85", badge:null, options:[] },
  { id:"cocazero-bouteille", category:"boissons", name:"Coca-Cola Zero — Bouteille 1.5L", description:"Grande bouteille à partager", price:3.50, image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=85", badge:null, options:[] },
  { id:"fanta-canette", category:"boissons", name:"Fanta Orange — Canette 33cl", description:"Canette fraîche 33cl", price:2.00, image:"https://images.unsplash.com/photo-1624552184280-7e9efc680635?w=400&q=85", badge:null, options:[] },
  { id:"fanta-bouteille", category:"boissons", name:"Fanta Orange — Bouteille 1.5L", description:"Grande bouteille à partager", price:3.50, image:"https://images.unsplash.com/photo-1624552184280-7e9efc680635?w=400&q=85", badge:null, options:[] },
  { id:"sprite-canette", category:"boissons", name:"Sprite — Canette 33cl", description:"Canette fraîche 33cl", price:2.00, image:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=85", badge:null, options:[] },
  { id:"sprite-bouteille", category:"boissons", name:"Sprite — Bouteille 1.5L", description:"Grande bouteille à partager", price:3.50, image:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=85", badge:null, options:[] },
  { id:"perrier-canette", category:"boissons", name:"Perrier — Canette 33cl", description:"Eau gazeuse pétillante", price:2.00, image:"https://images.unsplash.com/photo-1606168094336-48f5402e9d6b?w=400&q=85", badge:null, options:[] },
  { id:"oasis-canette", category:"boissons", name:"Oasis Tropical — Canette 33cl", description:"Boisson fruitée rafraîchissante", price:2.00, image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=85", badge:null, options:[] },
  { id:"lipton-canette", category:"boissons", name:"Lipton Ice Tea Pêche — Canette 33cl", description:"Thé glacé saveur pêche", price:2.00, image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=85", badge:null, options:[] },
  { id:"orangina-canette", category:"boissons", name:"Orangina — Canette 33cl", description:"Boisson gazeuse à l'orange", price:2.00, image:"https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=85", badge:null, options:[] },
  { id:"eau-bouteille", category:"boissons", name:"Eau Plate — Bouteille 1.5L", description:"Grande bouteille d'eau", price:2.00, image:"https://images.unsplash.com/photo-1553361371-9b09e49e1282?w=400&q=85", badge:null, options:[] }
  ],

  promos: [
    { id:"promo1", title:"Promo 1", description:"2 Pizzas achetées = la 3ème à -50%",  note:"En livraison uniquement",                        color:"#E8272A" },
    { id:"promo2", title:"Promo 2", description:"3 Pizzas achetées = la 4ème offerte", note:"En livraison uniquement",                        color:"#E8272A" },
    { id:"promo3", title:"Promo 3", description:"2+1 GRATUIT",                          note:"À emporter ou sur place · Pizza Senior ou Méga", color:"#F5A623" },
    { id:"promo4", title:"Promo 4", description:"1 Pizza achetée = 1 à -50%",          note:"À emporter ou sur place · Pizza Senior ou Méga", color:"#F5A623" }
  ],

  pizzaDeals: [
    "2 Pizzas Senior achetées = 1 Maxi Boisson offerte",
    "3 Pizzas Junior achetées = 1 Maxi Boisson offerte",
    "2 Pizzas Mega achetées = 2 Maxi Boissons offertes"
  ],

  info: {
    name:"Arena Pizza Kebab", shortName:"APK",
    address:"88 Rue Lesage", city:"51100 Reims",
    phone1:"09 83 39 82 20", phone2:"07 84 65 23 58",
    hours:"7J/7 — 11h00 à 13h15 et 18h00 à 22h15",
    hoursDetail: {
      service1: { open:"11:00", close:"13:15" },
      callOnly1: { open:"13:15", close:"13:30" },
      service2: { open:"18:00", close:"22:15" },
      callOnly2: { open:"22:15", close:"22:30" }
    },
    delivery: { minOrder: 15 },
    social:{ facebook:"#", instagram:"#", snapchat:"#" }
  }
};

function getItemsByCategory(c){ return APK_MENU.items.filter(i=>i.category===c); }
function getItemById(id){
  var found = APK_MENU.items.find(function(i){ return i.id === id; });
  if (found) return found;
  // Fallback : articles personnalisés créés depuis l'admin (custom-menu.js)
  if (typeof getCustomItemByIdSync === 'function') return getCustomItemByIdSync(id);
  return undefined;
}
function formatPrice(p){ return (parseFloat(p)||0).toFixed(2).replace('.',',')+'€'; }

// ════════════════════════════════════════════════════════════
// FORÇAGE MANUEL DES COMMANDES (admin)
// Permet à l'admin de forcer l'ouverture ou la fermeture des
// commandes, indépendamment des horaires automatiques.
// Stocké dans Firebase : collection "settings", doc "ordering".
// mode: 'auto' (par défaut) | 'forceOpen' | 'forceClosed'
// ════════════════════════════════════════════════════════════
var _orderingOverride = 'auto';
var _orderingOverrideLoaded = false;

async function loadOrderingOverride(forceRefresh) {
  if (_orderingOverrideLoaded && !forceRefresh) return _orderingOverride;
  if (typeof db === 'undefined') { _orderingOverrideLoaded = true; return _orderingOverride; }
  try {
    var doc = await db.collection('settings').doc('ordering').get();
    _orderingOverride = (doc.exists && doc.data().mode) || 'auto';
  } catch (e) {
    console.warn('loadOrderingOverride error:', e);
  }
  _orderingOverrideLoaded = true;
  return _orderingOverride;
}

async function setOrderingOverride(mode) {
  if (typeof db === 'undefined') throw new Error('Firebase non disponible');
  await db.collection('settings').doc('ordering').set({
    mode: mode,
    updatedAt: new Date().toISOString()
  });
  _orderingOverride = mode;
  _orderingOverrideLoaded = true;
}

// ── Vérification des horaires de commande ─────────────────────
// Le forçage manuel admin a TOUJOURS priorité sur l'horloge.
function getOrderingStatus() {
  if (_orderingOverride === 'forceOpen')   return 'open';
  if (_orderingOverride === 'forceClosed') return 'closed';

  var now  = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  if ((mins >= 660 && mins < 795) || (mins >= 1080 && mins < 1335)) return 'open';
  if ((mins >= 795 && mins < 810) || (mins >= 1335 && mins < 1350)) return 'call';
  return 'closed';
}

// Vérifie si on est dans le service du midi (11h00–13h30)
// Utilisé pour restreindre l'Offre Étudiante au déjeuner uniquement.
// Le forçage admin "forceOpen" lève aussi cette restriction.
function isMidiService() {
  if (_orderingOverride === 'forceOpen') return true;
  var now  = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  return mins >= 660 && mins < 810; // 11h00–13h30
}

// ── Logo dynamique (stocké dans Firebase settings/restaurant) ──
async function loadSiteLogo() {
  if (typeof db === 'undefined') return;
  try {
    var doc = await db.collection('settings').doc('restaurant').get();
    if (doc.exists && doc.data().logoUrl) {
      var img = document.getElementById('siteLogo');
      if (img) img.src = doc.data().logoUrl;
    }
  } catch(e) { /* silencieux */ }
}
