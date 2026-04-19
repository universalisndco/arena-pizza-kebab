// ============================================================
// ARENA PIZZA KEBAB — Menu Data (Recto + Verso PDF)
// ============================================================

const APK_MENU = {
  categories: [
    { id:"pizzas",       label:"Pizzas" },
    { id:"tacos",        label:"Tacos" },
    { id:"rolls",        label:"Rolls Arena" },
    { id:"krousty",      label:"Krousty APK" },
    { id:"panini",       label:"Panini" },
    { id:"fried-chicken",label:"Fried Chicken" },
    { id:"sandwichs",    label:"Sandwichs" },
    { id:"burgers",      label:"Burgers" },
    { id:"assiettes",    label:"Assiettes" },
    { id:"salade",       label:"Salades" },
    { id:"kids",         label:"Kids Menu" },
    { id:"desserts",     label:"Desserts" },
    { id:"boissons",     label:"Boissons" }
  ],

  pizzaSeries: [
    { id:"favoris",   label:"Nos Pizzas Favoris",  prices:"Junior 9€ / Senior 12€ / Méga 19€" },
    { id:"premium",   label:"Nos Pizzas Premium",   prices:"Junior 10€ / Senior 13€ / Méga 20€" },
    { id:"mealLover", label:"The Meal Lover",        prices:"Junior 11€ / Senior 14€ / Méga 21€" },
    { id:"signature", label:"Signature du Chef",     prices:"Junior 12€ / Senior 15€ / Méga 22€" }
  ],

  items: [
    { id:"pizza-margherita-junior", category:"pizzas", serie:"favoris", name:"Margherita", size:"Junior · 29cm", description:"Mozzarella, sauce tomate", price:9.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-margherita-senior", category:"pizzas", serie:"favoris", name:"Margherita", size:"Senior · 33cm", description:"Mozzarella, sauce tomate", price:12.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-margherita-mega", category:"pizzas", serie:"favoris", name:"Margherita", size:"Mega · 40cm", description:"Mozzarella, sauce tomate", price:19.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-fromages-junior", category:"pizzas", serie:"favoris", name:"4 Fromages", size:"Junior · 29cm", description:"Mozzarella, mélange de 4 fromages", price:9.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:"Populaire", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-fromages-senior", category:"pizzas", serie:"favoris", name:"4 Fromages", size:"Senior · 33cm", description:"Mozzarella, mélange de 4 fromages", price:12.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:"Populaire", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-fromages-mega", category:"pizzas", serie:"favoris", name:"4 Fromages", size:"Mega · 40cm", description:"Mozzarella, mélange de 4 fromages", price:19.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:"Populaire", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chevre-miel-junior", category:"pizzas", serie:"favoris", name:"Chèvre Miel", size:"Junior · 29cm", description:"Mozzarella, chèvre, miel, olives", price:9.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chevre-miel-senior", category:"pizzas", serie:"favoris", name:"Chèvre Miel", size:"Senior · 33cm", description:"Mozzarella, chèvre, miel, olives", price:12.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chevre-miel-mega", category:"pizzas", serie:"favoris", name:"Chèvre Miel", size:"Mega · 40cm", description:"Mozzarella, chèvre, miel, olives", price:19.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-napolitaine-junior", category:"pizzas", serie:"favoris", name:"Napolitaine", size:"Junior · 29cm", description:"Mozzarella, anchois, câpres, olives, tomate fraîche", price:9.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-napolitaine-senior", category:"pizzas", serie:"favoris", name:"Napolitaine", size:"Senior · 33cm", description:"Mozzarella, anchois, câpres, olives, tomate fraîche", price:12.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-napolitaine-mega", category:"pizzas", serie:"favoris", name:"Napolitaine", size:"Mega · 40cm", description:"Mozzarella, anchois, câpres, olives, tomate fraîche", price:19.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-calzone-junior", category:"pizzas", serie:"favoris", name:"Calzone", size:"Junior · 29cm", description:"Mozzarella, jambon ou poulet — pizza pliée", price:9.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Garniture", type: "select", required: true,
        choices: ["Jambon", "Poulet"] },
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 }, { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },  { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },     { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },{ name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-calzone-senior", category:"pizzas", serie:"favoris", name:"Calzone", size:"Senior · 33cm", description:"Mozzarella, jambon ou poulet — pizza pliée", price:12.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Garniture", type: "select", required: true,
        choices: ["Jambon", "Poulet"] },
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 }, { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },  { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },     { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },{ name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-calzone-mega", category:"pizzas", serie:"favoris", name:"Calzone", size:"Mega · 40cm", description:"Mozzarella, jambon ou poulet — pizza pliée", price:19.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Garniture", type: "select", required: true,
        choices: ["Jambon", "Poulet"] },
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 }, { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },  { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },     { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },{ name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-reine-junior", category:"pizzas", serie:"favoris", name:"Reine", size:"Junior · 29cm", description:"Mozzarella, jambon, champignons, olives", price:9.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-reine-senior", category:"pizzas", serie:"favoris", name:"Reine", size:"Senior · 33cm", description:"Mozzarella, jambon, champignons, olives", price:12.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-reine-mega", category:"pizzas", serie:"favoris", name:"Reine", size:"Mega · 40cm", description:"Mozzarella, jambon, champignons, olives", price:19.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campione-junior", category:"pizzas", serie:"favoris", name:"Campione", size:"Junior · 29cm", description:"Mozzarella, champignons, oeuf, bœuf haché", price:9.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campione-senior", category:"pizzas", serie:"favoris", name:"Campione", size:"Senior · 33cm", description:"Mozzarella, champignons, oeuf, bœuf haché", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campione-mega", category:"pizzas", serie:"favoris", name:"Campione", size:"Mega · 40cm", description:"Mozzarella, champignons, oeuf, bœuf haché", price:19.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-orientale-junior", category:"pizzas", serie:"premium", name:"Orientale", size:"Junior · 29cm", description:"Mozzarella, merguez, oeuf, olives, champignons, poivrons", price:10.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-orientale-senior", category:"pizzas", serie:"premium", name:"Orientale", size:"Senior · 33cm", description:"Mozzarella, merguez, oeuf, olives, champignons, poivrons", price:13.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-orientale-mega", category:"pizzas", serie:"premium", name:"Orientale", size:"Mega · 40cm", description:"Mozzarella, merguez, oeuf, olives, champignons, poivrons", price:20.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-torino-junior", category:"pizzas", serie:"premium", name:"Torino", size:"Junior · 29cm", description:"Mozzarella, fromage à raclette, jambon, pommes de terre", price:10.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-torino-senior", category:"pizzas", serie:"premium", name:"Torino", size:"Senior · 33cm", description:"Mozzarella, fromage à raclette, jambon, pommes de terre", price:13.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-torino-mega", category:"pizzas", serie:"premium", name:"Torino", size:"Mega · 40cm", description:"Mozzarella, fromage à raclette, jambon, pommes de terre", price:20.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-vegetarienne-junior", category:"pizzas", serie:"premium", name:"Végétarienne", size:"Junior · 29cm", description:"Mozzarella, poivrons, champignons, olives, aubergines", price:10.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-vegetarienne-senior", category:"pizzas", serie:"premium", name:"Végétarienne", size:"Senior · 33cm", description:"Mozzarella, poivrons, champignons, olives, aubergines", price:13.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-vegetarienne-mega", category:"pizzas", serie:"premium", name:"Végétarienne", size:"Mega · 40cm", description:"Mozzarella, poivrons, champignons, olives, aubergines", price:20.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-paysanne-junior", category:"pizzas", serie:"premium", name:"Paysanne", size:"Junior · 29cm", description:"Mozzarella, bœuf haché, pommes de terre, oignons", price:10.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-paysanne-senior", category:"pizzas", serie:"premium", name:"Paysanne", size:"Senior · 33cm", description:"Mozzarella, bœuf haché, pommes de terre, oignons", price:13.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-paysanne-mega", category:"pizzas", serie:"premium", name:"Paysanne", size:"Mega · 40cm", description:"Mozzarella, bœuf haché, pommes de terre, oignons", price:20.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-raclette-junior", category:"pizzas", serie:"premium", name:"Raclette", size:"Junior · 29cm", description:"Mozzarella, lardons, pommes de terre, fromage à raclette", price:10.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-raclette-senior", category:"pizzas", serie:"premium", name:"Raclette", size:"Senior · 33cm", description:"Mozzarella, lardons, pommes de terre, fromage à raclette", price:13.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-raclette-mega", category:"pizzas", serie:"premium", name:"Raclette", size:"Mega · 40cm", description:"Mozzarella, lardons, pommes de terre, fromage à raclette", price:20.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-thon-junior", category:"pizzas", serie:"premium", name:"Thon", size:"Junior · 29cm", description:"Mozzarella, thon, oeuf, olives, oignons", price:10.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-thon-senior", category:"pizzas", serie:"premium", name:"Thon", size:"Senior · 33cm", description:"Mozzarella, thon, oeuf, olives, oignons", price:13.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-thon-mega", category:"pizzas", serie:"premium", name:"Thon", size:"Mega · 40cm", description:"Mozzarella, thon, oeuf, olives, oignons", price:20.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-tartiflette-junior", category:"pizzas", serie:"premium", name:"Tartiflette", size:"Junior · 29cm", description:"Mozzarella, lardons, reblochon, pommes de terre", price:10.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-tartiflette-senior", category:"pizzas", serie:"premium", name:"Tartiflette", size:"Senior · 33cm", description:"Mozzarella, lardons, reblochon, pommes de terre", price:13.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-tartiflette-mega", category:"pizzas", serie:"premium", name:"Tartiflette", size:"Mega · 40cm", description:"Mozzarella, lardons, reblochon, pommes de terre", price:20.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-kebab-piz-junior", category:"pizzas", serie:"premium", name:"Pizza Kebab", size:"Junior · 29cm", description:"Mozzarella, viande kebab, tomates fraîches, oignons", price:10.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Best-seller", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-kebab-piz-senior", category:"pizzas", serie:"premium", name:"Pizza Kebab", size:"Senior · 33cm", description:"Mozzarella, viande kebab, tomates fraîches, oignons", price:13.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Best-seller", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-kebab-piz-mega", category:"pizzas", serie:"premium", name:"Pizza Kebab", size:"Mega · 40cm", description:"Mozzarella, viande kebab, tomates fraîches, oignons", price:20.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Best-seller", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-americaine-junior", category:"pizzas", serie:"premium", name:"Américaine", size:"Junior · 29cm", description:"Mozzarella, poulet, bœuf haché, oignons, cheddar", price:10.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-americaine-senior", category:"pizzas", serie:"premium", name:"Américaine", size:"Senior · 33cm", description:"Mozzarella, poulet, bœuf haché, oignons, cheddar", price:13.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-americaine-mega", category:"pizzas", serie:"premium", name:"Américaine", size:"Mega · 40cm", description:"Mozzarella, poulet, bœuf haché, oignons, cheddar", price:20.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-norvegienne-junior", category:"pizzas", serie:"premium", name:"Norvégienne", size:"Junior · 29cm", description:"Mozzarella, saumon, pomme de terre", price:10.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-norvegienne-senior", category:"pizzas", serie:"premium", name:"Norvégienne", size:"Senior · 33cm", description:"Mozzarella, saumon, pomme de terre", price:13.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-norvegienne-mega", category:"pizzas", serie:"premium", name:"Norvégienne", size:"Mega · 40cm", description:"Mozzarella, saumon, pomme de terre", price:20.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-saisons-junior", category:"pizzas", serie:"premium", name:"4 Saisons", size:"Junior · 29cm", description:"Mozzarella, jambon, champignons, olives, poivrons, aubergines grillées, tomates", price:10.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-saisons-senior", category:"pizzas", serie:"premium", name:"4 Saisons", size:"Senior · 33cm", description:"Mozzarella, jambon, champignons, olives, poivrons, aubergines grillées, tomates", price:13.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-saisons-mega", category:"pizzas", serie:"premium", name:"4 Saisons", size:"Mega · 40cm", description:"Mozzarella, jambon, champignons, olives, poivrons, aubergines grillées, tomates", price:20.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicken-junior", category:"pizzas", serie:"premium", name:"Chicken", size:"Junior · 29cm", description:"Mozzarella, poulet, champignons, poivrons, oignons, oeuf", price:10.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicken-senior", category:"pizzas", serie:"premium", name:"Chicken", size:"Senior · 33cm", description:"Mozzarella, poulet, champignons, poivrons, oignons, oeuf", price:13.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicken-mega", category:"pizzas", serie:"premium", name:"Chicken", size:"Mega · 40cm", description:"Mozzarella, poulet, champignons, poivrons, oignons, oeuf", price:20.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-mexicaine-junior", category:"pizzas", serie:"mealLover", name:"Mexicaine", size:"Junior · 29cm", description:"Mozzarella, chorizo, bœuf haché, olives, poivrons", price:11.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-mexicaine-senior", category:"pizzas", serie:"mealLover", name:"Mexicaine", size:"Senior · 33cm", description:"Mozzarella, chorizo, bœuf haché, olives, poivrons", price:14.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-mexicaine-mega", category:"pizzas", serie:"mealLover", name:"Mexicaine", size:"Mega · 40cm", description:"Mozzarella, chorizo, bœuf haché, olives, poivrons", price:21.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-savoyarde-junior", category:"pizzas", serie:"mealLover", name:"Savoyarde", size:"Junior · 29cm", description:"Mozzarella, chèvre, pommes de terre, jambon", price:11.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-savoyarde-senior", category:"pizzas", serie:"mealLover", name:"Savoyarde", size:"Senior · 33cm", description:"Mozzarella, chèvre, pommes de terre, jambon", price:14.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-savoyarde-mega", category:"pizzas", serie:"mealLover", name:"Savoyarde", size:"Mega · 40cm", description:"Mozzarella, chèvre, pommes de terre, jambon", price:21.00, image:"https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080cxt0cyt0cxb6240cyb4160.webp", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-pecheur-junior", category:"pizzas", serie:"mealLover", name:"Pêcheur", size:"Junior · 29cm", description:"Mozzarella, fruits de mer", price:11.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-pecheur-senior", category:"pizzas", serie:"mealLover", name:"Pêcheur", size:"Senior · 33cm", description:"Mozzarella, fruits de mer", price:14.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-pecheur-mega", category:"pizzas", serie:"mealLover", name:"Pêcheur", size:"Mega · 40cm", description:"Mozzarella, fruits de mer", price:21.00, image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-gourmande-junior", category:"pizzas", serie:"mealLover", name:"Gourmande", size:"Junior · 29cm", description:"Mozzarella, poulet, bœuf haché, kebab", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-gourmande-senior", category:"pizzas", serie:"mealLover", name:"Gourmande", size:"Senior · 33cm", description:"Mozzarella, poulet, bœuf haché, kebab", price:14.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-gourmande-mega", category:"pizzas", serie:"mealLover", name:"Gourmande", size:"Mega · 40cm", description:"Mozzarella, poulet, bœuf haché, kebab", price:21.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-royale-junior", category:"pizzas", serie:"mealLover", name:"Royale", size:"Junior · 29cm", description:"Mozzarella, pommes de terre, merguez, poulet, olives", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-royale-senior", category:"pizzas", serie:"mealLover", name:"Royale", size:"Senior · 33cm", description:"Mozzarella, pommes de terre, merguez, poulet, olives", price:14.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-royale-mega", category:"pizzas", serie:"mealLover", name:"Royale", size:"Mega · 40cm", description:"Mozzarella, pommes de terre, merguez, poulet, olives", price:21.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campagnarde-junior", category:"pizzas", serie:"mealLover", name:"Campagnarde", size:"Junior · 29cm", description:"Mozzarella, lardons, jambon, oeuf, poivrons, champignons", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campagnarde-senior", category:"pizzas", serie:"mealLover", name:"Campagnarde", size:"Senior · 33cm", description:"Mozzarella, lardons, jambon, oeuf, poivrons, champignons", price:14.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-campagnarde-mega", category:"pizzas", serie:"mealLover", name:"Campagnarde", size:"Mega · 40cm", description:"Mozzarella, lardons, jambon, oeuf, poivrons, champignons", price:21.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-cannibale-junior", category:"pizzas", serie:"mealLover", name:"Cannibale", size:"Junior · 29cm", description:"Mozzarella, bœuf haché, merguez, poulet", price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-cannibale-senior", category:"pizzas", serie:"mealLover", name:"Cannibale", size:"Senior · 33cm", description:"Mozzarella, bœuf haché, merguez, poulet", price:14.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-cannibale-mega", category:"pizzas", serie:"mealLover", name:"Cannibale", size:"Mega · 40cm", description:"Mozzarella, bœuf haché, merguez, poulet", price:21.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-indienne-junior", category:"pizzas", serie:"mealLover", name:"Indienne", size:"Junior · 29cm", description:"Mozzarella, oignon, poulet curry, poivron, poulet tandoori", price:11.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-indienne-senior", category:"pizzas", serie:"mealLover", name:"Indienne", size:"Senior · 33cm", description:"Mozzarella, oignon, poulet curry, poivron, poulet tandoori", price:14.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-indienne-mega", category:"pizzas", serie:"mealLover", name:"Indienne", size:"Mega · 40cm", description:"Mozzarella, oignon, poulet curry, poivron, poulet tandoori", price:21.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-buffalo-junior", category:"pizzas", serie:"mealLover", name:"Buffalo Boursin", size:"Junior · 29cm", description:"Mozzarella, oignon, bœuf haché, boursin, chorizo", price:11.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-buffalo-senior", category:"pizzas", serie:"mealLover", name:"Buffalo Boursin", size:"Senior · 33cm", description:"Mozzarella, oignon, bœuf haché, boursin, chorizo", price:14.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-buffalo-mega", category:"pizzas", serie:"mealLover", name:"Buffalo Boursin", size:"Mega · 40cm", description:"Mozzarella, oignon, bœuf haché, boursin, chorizo", price:21.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-western-junior", category:"pizzas", serie:"mealLover", name:"Western", size:"Junior · 29cm", description:"Mozzarella, lardons, poulet, pommes de terre", price:11.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-western-senior", category:"pizzas", serie:"mealLover", name:"Western", size:"Senior · 33cm", description:"Mozzarella, lardons, poulet, pommes de terre", price:14.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-western-mega", category:"pizzas", serie:"mealLover", name:"Western", size:"Mega · 40cm", description:"Mozzarella, lardons, poulet, pommes de terre", price:21.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicago-junior", category:"pizzas", serie:"mealLover", name:"Chicago", size:"Junior · 29cm", description:"Mozzarella, poulet, boursin, jambon, pommes de terre", price:11.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicago-senior", category:"pizzas", serie:"mealLover", name:"Chicago", size:"Senior · 33cm", description:"Mozzarella, poulet, boursin, jambon, pommes de terre", price:14.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-chicago-mega", category:"pizzas", serie:"mealLover", name:"Chicago", size:"Mega · 40cm", description:"Mozzarella, poulet, boursin, jambon, pommes de terre", price:21.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:null, options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-jambons-junior", category:"pizzas", serie:"signature", name:"4 Jambons", size:"Junior · 29cm", description:"Mozzarella, jambon, chorizo, lardons, merguez", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-jambons-senior", category:"pizzas", serie:"signature", name:"4 Jambons", size:"Senior · 33cm", description:"Mozzarella, jambon, chorizo, lardons, merguez", price:15.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-4-jambons-mega", category:"pizzas", serie:"signature", name:"4 Jambons", size:"Mega · 40cm", description:"Mozzarella, jambon, chorizo, lardons, merguez", price:22.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-fermiere-junior", category:"pizzas", serie:"signature", name:"Fermière", size:"Junior · 29cm", description:"Mozzarella, jambon, poulet curry, pomme de terre, chèvre", price:12.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-fermiere-senior", category:"pizzas", serie:"signature", name:"Fermière", size:"Senior · 33cm", description:"Mozzarella, jambon, poulet curry, pomme de terre, chèvre", price:15.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-fermiere-mega", category:"pizzas", serie:"signature", name:"Fermière", size:"Mega · 40cm", description:"Mozzarella, jambon, poulet curry, pomme de terre, chèvre", price:22.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-diva-junior", category:"pizzas", serie:"signature", name:"Diva", size:"Junior · 29cm", description:"Mozzarella, champignons, bœuf haché, chorizo, gorgonzola", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-diva-senior", category:"pizzas", serie:"signature", name:"Diva", size:"Senior · 33cm", description:"Mozzarella, champignons, bœuf haché, chorizo, gorgonzola", price:15.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-diva-mega", category:"pizzas", serie:"signature", name:"Diva", size:"Mega · 40cm", description:"Mozzarella, champignons, bœuf haché, chorizo, gorgonzola", price:22.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-arena-deal-junior", category:"pizzas", serie:"signature", name:"Arena Deal", size:"Junior · 29cm", description:"Mozzarella, chorizo, jambon, oeuf, chèvre", price:12.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-arena-deal-senior", category:"pizzas", serie:"signature", name:"Arena Deal", size:"Senior · 33cm", description:"Mozzarella, chorizo, jambon, oeuf, chèvre", price:15.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-arena-deal-mega", category:"pizzas", serie:"signature", name:"Arena Deal", size:"Mega · 40cm", description:"Mozzarella, chorizo, jambon, oeuf, chèvre", price:22.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-exotique-junior", category:"pizzas", serie:"signature", name:"Exotique", size:"Junior · 29cm", description:"Mozzarella, chèvre, poulet curry, ananas, miel", price:12.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-exotique-senior", category:"pizzas", serie:"signature", name:"Exotique", size:"Senior · 33cm", description:"Mozzarella, chèvre, poulet curry, ananas, miel", price:15.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-exotique-mega", category:"pizzas", serie:"signature", name:"Exotique", size:"Mega · 40cm", description:"Mozzarella, chèvre, poulet curry, ananas, miel", price:22.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/recette-pizza-poulet-creme-fraiche-1200x675.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-milano-junior", category:"pizzas", serie:"signature", name:"Milano", size:"Junior · 29cm", description:"Mozzarella, bœuf haché, champignons, mélange de 4 fromages", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-milano-senior", category:"pizzas", serie:"signature", name:"Milano", size:"Senior · 33cm", description:"Mozzarella, bœuf haché, champignons, mélange de 4 fromages", price:15.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-milano-mega", category:"pizzas", serie:"signature", name:"Milano", size:"Mega · 40cm", description:"Mozzarella, bœuf haché, champignons, mélange de 4 fromages", price:22.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-capri-junior", category:"pizzas", serie:"signature", name:"Capri", size:"Junior · 29cm", description:"Mozzarella, pommes de terre, gorgonzola, bœuf haché", price:12.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-capri-senior", category:"pizzas", serie:"signature", name:"Capri", size:"Senior · 33cm", description:"Mozzarella, pommes de terre, gorgonzola, bœuf haché", price:15.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-capri-mega", category:"pizzas", serie:"signature", name:"Capri", size:"Mega · 40cm", description:"Mozzarella, pommes de terre, gorgonzola, bœuf haché", price:22.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-boursalino-junior", category:"pizzas", serie:"signature", name:"Boursalino", size:"Junior · 29cm", description:"Mozzarella, oignons, bœuf haché, boursin, pommes de terre, cheddar", price:12.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-boursalino-senior", category:"pizzas", serie:"signature", name:"Boursalino", size:"Senior · 33cm", description:"Mozzarella, oignons, bœuf haché, boursin, pommes de terre, cheddar", price:15.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"pizza-boursalino-mega", category:"pizzas", serie:"signature", name:"Boursalino", size:"Mega · 40cm", description:"Mozzarella, oignons, bœuf haché, boursin, pommes de terre, cheddar", price:22.00, image:"https://www.delicha.fr/wp-content/uploads/2025/11/pizza-kebab-recette.jpeg", badge:"Signature", options:[
      { label: "Base", type: "select", required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"] },
      { label: "Suppléments (+1,60€)", type: "multi", required: false,
        choices: [
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"tacos-1viande", category:"tacos", name:"Tacos 1 Viande", description:"Frite +1€ · Boisson +1€", price:8.00, image:"https://www.crousti-tacos.fr/data/uploads/2022/02/origine-tacos.jpg", badge:null, options:[
      { label: "Viande", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Frite", price: 1.00 },
          { name: "Boisson", price: 1.00 },
          { name: "Viande supplémentaire", price: 2.00 }
        ]
      }
    ] },
    { id:"tacos-2viandes", category:"tacos", name:"Tacos 2 Viandes", description:"Frite +1€ · Boisson +1€", price:10.00, image:"https://www.crousti-tacos.fr/data/uploads/2022/02/origine-tacos.jpg", badge:"Populaire", options:[
      { label: "Viande 1", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Viande 2", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Suppléments", type: "multi", required: false,
        choices: [{ name: "Frite", price: 1.00 },{ name: "Boisson", price: 1.00 },{ name: "Viande supplémentaire", price: 2.00 }]
      }
    ] },
    { id:"tacos-3viandes", category:"tacos", name:"Tacos 3 Viandes", description:"Frite +1€ · Boisson +1€", price:12.00, image:"https://www.crousti-tacos.fr/data/uploads/2022/02/origine-tacos.jpg", badge:"Maxi", options:[
      { label: "Viande 1", type: "select", required: true, choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Viande 2", type: "select", required: true, choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Viande 3", type: "select", required: true, choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Suppléments", type: "multi", required: false,
        choices: [{ name: "Frite", price: 1.00 },{ name: "Boisson", price: 1.00 },{ name: "Viande supplémentaire", price: 2.00 }]
      }
    ] },
    { id:"tacos-bowl", category:"tacos", name:"Tacos Bowl", description:"2 viandes au choix · Boisson +1€", price:10.00, image:"https://zotlivraison.com/assets/img/items/17162929422C5QPCBXXF.jpg", badge:"Nouveau", options:[
      { label: "Viande 1", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Viande 2", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
      { label: "Suppléments", type: "multi", required: false,
        choices: [{ name: "Frite", price: 1.00 },{ name: "Boisson", price: 1.00 },{ name: "Viande supplémentaire", price: 2.00 }]
      }
    ] },
    { id:"defsoce", category:"tacos", name:"Defsoce", description:"Viande Hachée / Poulet / Kebab / Merguez + Boisson · Viande supp +2€", price:12.00, image:"https://pinospizza51.fr/wp-content/uploads/2022/10/life.jpg", badge:null, options:[
      { label: "Viande", type: "select", required: true, choices: ["Viande Hachée","Poulet","Kebab","Merguez"] },
      { label: "Suppléments", type: "multi", required: false, choices: [{ name: "Viande supplémentaire", price: 2.00 }] }
    ] },
    { id:"roll-bourssin", category:"rolls", name:"Roll Bourssin", description:"Galette, Tenders, Bourssin, Oeuf — servi avec frite + boisson", price:13.00, image:"https://cdn.cuisine-etudiant.fr/2025-07/wrap-au-poulet-froid-12492-1200.webp", badge:null, options:[
      { label: "Supplément fromage (+1,60€)", type: "multi", required: false,
        choices: [{ name: "Raclette", price: 1.60 },{ name: "Reblochon", price: 1.60 },{ name: "Chèvre", price: 1.60 },{ name: "Cheddar", price: 1.60 }]
      }
    ] },
    { id:"roll-queen-arena", category:"rolls", name:"Queen Arena", description:"Galette, Steak, Cheddar, Oeuf — servi avec frite + boisson", price:13.00, image:"https://cdn.cuisine-etudiant.fr/2025-07/wrap-au-poulet-froid-12492-1200.webp", badge:"Signature", options:[
      { label: "Supplément fromage (+1,60€)", type: "multi", required: false,
        choices: [{ name: "Raclette", price: 1.60 },{ name: "Reblochon", price: 1.60 },{ name: "Chèvre", price: 1.60 },{ name: "Cheddar", price: 1.60 }]
      }
    ] },
    { id:"krousty-apk", category:"krousty", name:"Krousty APK", description:"Riz Blanc, Sauce Blanche Maison, Sauce Thaï Maison, Oignon Frits, Ciboulette — avec Boisson 33cl", price:10.00, image:"https://cdn-www.konbini.com/files/2024/08/tasty-2.jpg?width=3840&quality=75&format=webp", badge:"Nouveau", options:[] },
    { id:"krousty-chicken-curry", category:"krousty", name:"Riz Chicken Curry", description:"Chicken, Crème de Curry, Riz Blanc, Sauce Blanche, Sauce Thaï, Oignon Frits, Ciboulette — avec Boisson 33cl", price:12.00, image:"https://cdn-www.konbini.com/files/2024/08/tasty-2.jpg?width=3840&quality=75&format=webp", badge:"Nouveau", options:[] },
    { id:"krousty-chicken-tandoori", category:"krousty", name:"Riz Chicken Tandoori", description:"Chicken Marinade Tandoori, Riz Blanc, Sauce Blanche, Sauce Thaï, Oignon Frits, Ciboulette — avec Boisson 33cl", price:12.00, image:"https://cdn-www.konbini.com/files/2024/08/tasty-2.jpg?width=3840&quality=75&format=webp", badge:"Nouveau", options:[] },
    { id:"panini-menu", category:"panini", name:"Panini Menu", description:"Au choix : Poulet, Kebab, 4 Fromage, Jambon, Viande Hachée", price:8.00, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:null, options:[
      { label: "Garniture", type: "select", required: true, choices: ["Poulet","Kebab","4 Fromage","Jambon","Viande Hachée"] }
    ] },
    { id:"fc-tenders5", category:"fried-chicken", name:"Menu 1 Pers. — Tenders x5", description:"5 Tenders + 1 portion de frites + 1 boisson 33cl", price:9.90, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", badge:null, options:[
      { label: "Sauce", type: "select", required: true,
        choices: ["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }
    ] },
    { id:"fc-wings8", category:"fried-chicken", name:"Menu 1 Pers. — Wings x8", description:"8 Wings + 1 portion de frites + 1 boisson 33cl", price:9.90, image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=85", badge:null, options:[
      { label: "Sauce", type: "select", required: true,
        choices: ["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }
    ] },
    { id:"fc-tenders10", category:"fried-chicken", name:"Menu 2 Pers. — Tenders x10", description:"10 Tenders + 2 portions de frites + 2 boissons 33cl", price:19.00, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", badge:"Duo", options:[
      { label: "Sauce", type: "select", required: true,
        choices: ["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }
    ] },
    { id:"fc-wings16", category:"fried-chicken", name:"Menu 2 Pers. — Wings x16", description:"16 Wings + 2 portions de frites + 2 boissons 33cl", price:19.00, image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=85", badge:"Duo", options:[
      { label: "Sauce", type: "select", required: true,
        choices: ["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }
    ] },
    { id:"fc-mix", category:"fried-chicken", name:"Menu 2 Pers. — Mix Tenders x7 + Wings x7", description:"7 Tenders + 7 Wings + 2 portions de frites + 2 boissons 33cl", price:19.00, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", badge:"Duo", options:[
      { label: "Sauce", type: "select", required: true,
        choices: ["Barbecue","Biggy","Blanche","Mayo","Ketchup","Andalouse","Samouraï","Harissa","Brézil","Chili Thaï","Algérienne"] }
    ] },
    { id:"sw-kebab", category:"sandwichs", name:"Kebab", description:"Pain, viande kebab, salade, tomate, oignon — Maxi +2€ · Pain ou Durum", price:7.00, image:"https://images.unsplash.com/photo-1544025162-d76538b4ca4b?w=600&q=85", badge:null, options:[
      { label: "Format", type: "select", required: true,
        choices: ["Normal", "Maxi (+2,00€)", "Durum"] },
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 }
        ]
      }
    ] },
    { id:"sw-americain", category:"sandwichs", name:"Américain", description:"Steak haché (90g), cheddar, salade, tomate, oignon", price:7.00, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 }
        ]
      }
    ] },
    { id:"sw-chicken-tandoori", category:"sandwichs", name:"Chicken Tandoori", description:"Poulet tandoori, cheddar, salade, tomate, oignon", price:8.00, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 }
        ]
      }
    ] },
    { id:"sw-chicken-cheese-curry", category:"sandwichs", name:"Chicken Cheese Curry", description:"Poulet curry, cheddar, salade, tomate, oignon", price:8.00, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 }
        ]
      }
    ] },
    { id:"sw-big-americain", category:"sandwichs", name:"Big Américain", description:"2 steaks hachés (90g), 2 cheddars, oeuf, salade, tomate, oignon", price:9.00, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:"Maxi", options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 }
        ]
      }
    ] },
    { id:"assiette-kebab", category:"assiettes", name:"Assiette Kebab", description:"2 viandes au choix + frites", price:11.00, image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:null, options:[
      { label: "Viande 1", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] },
      { label: "Viande 2 (Assiette Mixte)", type: "select", required: false,
        choices: ["Aucune","Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }
    ] },
    { id:"assiette-mixte", category:"assiettes", name:"Assiette Mixte", description:"2 viandes au choix + frites", price:14.00, image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:null, options:[
      { label: "Viande 1", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] },
      { label: "Viande 2 (Assiette Mixte)", type: "select", required: false,
        choices: ["Aucune","Steak Haché","Poulet","Kebab","Merguez","Chorizo","Poulet Tandoori"] }
    ] },
    { id:"salade-cesar", category:"salade", name:"Salade César", description:"Salade, Tomate, Olive, Omelette — viande au choix", price:9.00, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85", badge:null, options:[
      { label: "Viande", type: "select", required: true,
        choices: ["Steak Haché","Poulet","Kebab","Tenders","Merguez"] }
    ] },
    { id:"burger-hamburger", category:"burgers", name:"Hamburger", description:"Steak 90g, 1 oeuf, 2 cheddar, salade, tomate, oignon", price:7.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"burger-chicken-crispy", category:"burgers", name:"Chicken Crispy", description:"Crispy, cheddar, chèvre, miel, salade, tomate, oignon", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"burger-chicken-burger", category:"burgers", name:"Chicken Burger", description:"2 tenders, 2 cheddar, salade, tomate, oignon", price:7.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"burger-big", category:"burgers", name:"Big Burger", description:"2 steaks 90g, 1 oeuf, 2 cheddar, salade, tomate, oignon", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:"Populaire", options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"burger-bc", category:"burgers", name:"B&C", description:"1 steak 90g, 1 Crispy, oignon, 2 cheddar, salade, tomate", price:10.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:null, options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"burger-king-arena", category:"burgers", name:"King Arena Max", description:"3 steaks, 1 omelette, 3 cheddar, raclette", price:13.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85", badge:"King", options:[
      { label: "Suppléments", type: "multi", required: false,
        choices: [
          { name: "Boisson 33cl", price: 1.00 },
          { name: "Frites", price: 1.00 },
          { name: "Raclette", price: 1.60 },
          { name: "Reblochon", price: 1.60 },
          { name: "Cheddar", price: 1.60 },
          { name: "Chèvre", price: 1.60 },
          { name: "Miel", price: 1.60 },
          { name: "Oeuf", price: 1.60 },
          { name: "Steak 45g", price: 1.60 },
          { name: "Steak 90g", price: 2.00 }
        ]
      }
    ] },
    { id:"kids-menu", category:"kids", name:"Kids Menu", description:"5 Nuggets + 1 Jus", price:6.00, image:"https://thumbs.dreamstime.com/b/nuggets-de-poulet-et-frites-jus-vue-dessus-repas-du-d%C3%A9jeuner-d-une-plaque-en-bois-noir-sur-fond-sombre-173517848.jpg", badge:null, options:[] },
    { id:"tiramisu", category:"desserts", name:"Tiramisu", description:"Tiramisu maison", price:4.00, image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85", badge:null, options:[] },
    { id:"tarte-daim", category:"desserts", name:"Tarte au Daim", description:"Tarte croustillante au caramel Daim", price:3.50, image:"https://journaldesseniors.20minutes.fr/wp-content/uploads/2025/11/sQe8nDxVEY-1764190436.jpeg", badge:null, options:[] },
    { id:"hagen-100", category:"desserts", name:"Häagen-Dazs 100ml", description:"Glace premium individuelle", price:4.50, image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=85", badge:null, options:[] },
    { id:"hagen-500", category:"desserts", name:"Häagen-Dazs 500ml", description:"Glace premium grand format", price:9.00, image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=85", badge:"Famille", options:[] },
    { id:"cannette", category:"boissons", name:"Cannette 33cl", description:"Coca-Cola, Fanta, Sprite au choix", price:2.00, image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=85", badge:null, options:[{ label: "Choix", type: "select", required: true, choices: ["Coca-Cola","Coca-Cola Zero","Fanta Orange","Sprite"] }] },
    { id:"bouteille", category:"boissons", name:"Bouteille 1.5L", description:"Grande bouteille 1.5L", price:3.50, image:"https://raja.scene7.com/is/image/Raja/products/soda-coca-cola-z-ro-sucres-bouteille-lot-24-x-50-cl_261910.jpg?image=bfrB261910BA$default$&hei=600&wid=600&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0", badge:null, options:[{ label: "Choix", type: "select", required: true, choices: ["Coca-Cola","Coca-Cola Zero","Fanta Orange","Sprite","Eau"] }] }
  ],

  promos: [
    { id:"promo1", title:"Promo 1", description:"2 Pizzas achetées = la 3ème à -50%",  note:"En livraison uniquement",                        color:"#E8272A" },
    { id:"promo2", title:"Promo 2", description:"3 Pizzas achetées = la 4ème offerte", note:"En livraison uniquement",                        color:"#E8272A" },
    { id:"promo3", title:"Promo 3", description:"2+1 GRATUIT",                          note:"À emporter ou sur place · Pizza Senior ou Méga", color:"#F5A623" },
    { id:"promo4", title:"Promo 4", description:"1 Pizza achetée = 1 Pizza à -50%",    note:"À emporter ou sur place · Pizza Senior ou Méga", color:"#F5A623" }
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
    hours:"Ouvert 7J/7 — 11h00 à 14h00 et 18h00 à 23h00",
    delivery:{ minOrder:15, zones:[
      {name:"Zone 1",min:15,fee:0},
      {name:"Zone 2",min:20,fee:2},
      {name:"Zone 3",min:25,fee:4}
    ]},
    social:{ facebook:"#", instagram:"#", snapchat:"#" }
  }
};

function getItemsByCategory(c){ return APK_MENU.items.filter(i=>i.category===c); }
function getItemById(id){ return APK_MENU.items.find(i=>i.id===id); }
function formatPrice(p){ return (parseFloat(p)||0).toFixed(2).replace('.',',')+'€'; }
