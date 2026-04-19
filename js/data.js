// ============================================================
// ARENA PIZZA KEBAB - Menu Data (extrait du PDF officiel)
// ============================================================

const APK_MENU = {
  categories: [
    { id: "pizzas",   label: "Pizzas",      icon: "pizza" },
    { id: "tacos",    label: "Tacos",       icon: "taco" },
    { id: "rolls",    label: "Rolls Arena", icon: "sandwich" },
    { id: "krousty",  label: "Krousty APK", icon: "bowl" },
    { id: "panini",   label: "Panini",      icon: "bread" },
    { id: "salade",   label: "Salades",     icon: "leaf" },
    { id: "kids",     label: "Kids Menu",   icon: "star" },
    { id: "desserts", label: "Desserts",    icon: "cake" },
    { id: "boissons", label: "Boissons",    icon: "cup" }
  ],

  items: [
    // PIZZAS
    { id:"pizza-margherita-junior",  category:"pizzas", name:"Margherita",     size:"Junior", description:"Sauce tomate, mozzarella, basilic frais",                                                                     price:9.00,  image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-margherita-senior",  category:"pizzas", name:"Margherita",     size:"Senior", description:"Sauce tomate, mozzarella, basilic frais",                                                                     price:12.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-margherita-mega",    category:"pizzas", name:"Margherita",     size:"Mega",   description:"Sauce tomate, mozzarella, basilic frais",                                                                     price:16.00, image:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-4fromages-junior",   category:"pizzas", name:"4 Fromages",     size:"Junior", description:"Mozzarella, cheddar, raclette, chèvre",                                                                       price:10.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:"Populaire",  options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-4fromages-senior",   category:"pizzas", name:"4 Fromages",     size:"Senior", description:"Mozzarella, cheddar, raclette, chèvre",                                                                       price:13.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-4fromages-mega",     category:"pizzas", name:"4 Fromages",     size:"Mega",   description:"Mozzarella, cheddar, raclette, chèvre",                                                                       price:17.00, image:"https://images.unsplash.com/photo-1548365328-8b849c9d7e8d?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-kebab-junior",       category:"pizzas", name:"Pizza Kebab",    size:"Junior", description:"Sauce blanche, viande kebab, oignons, poivrons, mozzarella",                                                  price:11.00, image:"https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=600&q=85", badge:"Best-seller", options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-kebab-senior",       category:"pizzas", name:"Pizza Kebab",    size:"Senior", description:"Sauce blanche, viande kebab, oignons, poivrons, mozzarella",                                                  price:14.00, image:"https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-kebab-mega",         category:"pizzas", name:"Pizza Kebab",    size:"Mega",   description:"Sauce blanche, viande kebab, oignons, poivrons, mozzarella",                                                  price:18.00, image:"https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-poulet-junior",      category:"pizzas", name:"Pizza Poulet",   size:"Junior", description:"Sauce tomate, poulet grillé, champignons, mozzarella",                                                        price:11.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-poulet-senior",      category:"pizzas", name:"Pizza Poulet",   size:"Senior", description:"Sauce tomate, poulet grillé, champignons, mozzarella",                                                        price:14.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-poulet-mega",        category:"pizzas", name:"Pizza Poulet",   size:"Mega",   description:"Sauce tomate, poulet grillé, champignons, mozzarella",                                                        price:18.00, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-royale-junior",      category:"pizzas", name:"Pizza Royale",   size:"Junior", description:"Sauce tomate, jambon, champignons, olives, mozzarella",                                                       price:11.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-royale-senior",      category:"pizzas", name:"Pizza Royale",   size:"Senior", description:"Sauce tomate, jambon, champignons, olives, mozzarella",                                                       price:14.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },
    { id:"pizza-royale-mega",        category:"pizzas", name:"Pizza Royale",   size:"Mega",   description:"Sauce tomate, jambon, champignons, olives, mozzarella",                                                       price:18.00, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85", badge:null,         options:[
      {
        label: "Base",
        type: "select",
        required: true,
        choices: ["Base Tomate", "Base Crème Fraîche", "Base Spéciale"]
      }
    ] },

    // TACOS
    {
      id:"tacos-1viande", category:"tacos", name:"Tacos 1 Viande", description:"Supplément frite +1€ · Supplément boisson +1€", price:8.00,
      image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:null,
      options:[
        { label:"Viande", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Suppléments", type:"multi", required:false, choices:[{name:"Frite",price:1},{name:"Boisson",price:1},{name:"Viande supplémentaire",price:2}] }
      ]
    },
    {
      id:"tacos-2viandes", category:"tacos", name:"Tacos 2 Viandes", description:"Supplément frite +1€ · Supplément boisson +1€", price:10.00,
      image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:"Populaire",
      options:[
        { label:"Viande 1", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Viande 2", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Suppléments", type:"multi", required:false, choices:[{name:"Frite",price:1},{name:"Boisson",price:1},{name:"Viande supplémentaire",price:2}] }
      ]
    },
    {
      id:"tacos-3viandes", category:"tacos", name:"Tacos 3 Viandes", description:"Supplément frite +1€ · Supplément boisson +1€", price:12.00,
      image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:"Maxi",
      options:[
        { label:"Viande 1", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Viande 2", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Viande 3", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Suppléments", type:"multi", required:false, choices:[{name:"Frite",price:1},{name:"Boisson",price:1},{name:"Viande supplémentaire",price:2}] }
      ]
    },
    {
      id:"tacos-bowl", category:"tacos", name:"Tacos Bowl", description:"2 viandes au choix · Supplément boisson +1€", price:10.00,
      image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:"Nouveau",
      options:[
        { label:"Viande 1", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Viande 2", type:"select", required:true, choices:["Steak Haché","Poulet","Tenders","Merguez","Chorizo","Nugett","Cordon Bleu","Kebab","Omelette","Poulet Tandoori","Poulet Curry"] },
        { label:"Suppléments", type:"multi", required:false, choices:[{name:"Boisson",price:1}] }
      ]
    },
    {
      id:"defsoce", category:"tacos", name:"Defsoce", description:"Viande Hachée OU Poulet OU Kebab OU Merguez + Boisson · Supplément viande +2€", price:12.00,
      image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85", badge:null,
      options:[
        { label:"Viande", type:"select", required:true, choices:["Viande Hachée","Poulet","Kebab","Merguez"] },
        { label:"Suppléments", type:"multi", required:false, choices:[{name:"Viande supplémentaire",price:2}] }
      ]
    },

    // ROLLS ARENA
    {
      id:"roll-bourssin", category:"rolls", name:"Roll Bourssin", description:"Galette, Tenders, Bourssin, Oeuf — servi avec frite + boisson", price:13.00,
      image:"https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=600&q=85", badge:null,
      options:[{ label:"Supplément fromage (+1€)", type:"multi", required:false, choices:[{name:"Raclette",price:1},{name:"Reblochon",price:1},{name:"Chèvre",price:1},{name:"Cheddar",price:1}] }]
    },
    {
      id:"roll-queen-arena", category:"rolls", name:"Queen Arena", description:"Galette, Steak, Cheddar, Oeuf — servi avec frite + boisson", price:13.00,
      image:"https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=600&q=85", badge:"Signature",
      options:[{ label:"Supplément fromage (+1€)", type:"multi", required:false, choices:[{name:"Raclette",price:1},{name:"Reblochon",price:1},{name:"Chèvre",price:1},{name:"Cheddar",price:1}] }]
    },

    // KROUSTY APK
    { id:"krousty-apk",              category:"krousty", name:"Krousty APK",          description:"Riz Blanc, Sauce Blanche Maison, Sauce Thaï Maison, Oignon Frits, Ciboulette — avec Boisson 33cl",                                                                              price:10.00, image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=85", badge:"Nouveau", options:[] },
    { id:"krousty-chicken-curry",    category:"krousty", name:"Riz Chicken Curry",    description:"Chicken, Crème de Curry, Riz Blanc, Sauce Blanche Maison, Sauce Thaï Maison, Oignon Frits, Ciboulette — avec Boisson 33cl",                                                      price:12.00, image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=85", badge:"Nouveau", options:[] },
    { id:"krousty-chicken-tandoori", category:"krousty", name:"Riz Chicken Tandoori", description:"Chicken, Marinade Tandoori, Riz Blanc, Sauce Blanche Maison, Sauce Thaï Maison, Oignon Frits, Ciboulette — avec Boisson 33cl",                                                   price:12.00, image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=85", badge:"Nouveau", options:[] },

    // PANINI
    {
      id:"panini-menu", category:"panini", name:"Panini Menu", description:"Au choix : Poulet, Kebab, 4 Fromage, Jambon, Viande Hachée", price:8.00,
      image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85", badge:null,
      options:[{ label:"Garniture", type:"select", required:true, choices:["Poulet","Kebab","4 Fromage","Jambon","Viande Hachée"] }]
    },

    // SALADE
    {
      id:"salade-cesar", category:"salade", name:"Salade César", description:"Salade, Tomate, Olive, Omelette — viande au choix", price:9.00,
      image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85", badge:null,
      options:[{ label:"Viande", type:"select", required:true, choices:["Steak Haché","Poulet","Kebab","Tenders","Merguez"] }]
    },

    // KIDS
    { id:"kids-menu", category:"kids", name:"Kids Menu", description:"5 Nuggets + 1 Jus", price:6.00, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", badge:null, options:[] },

    // DESSERTS
    { id:"tiramisu",       category:"desserts", name:"Tiramisu",          description:"Tiramisu maison, recette traditionnelle",          price:4.00,  image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85", badge:null,     options:[] },
    { id:"tarte-daim",     category:"desserts", name:"Tarte au Daim",     description:"Tarte croustillante au caramel Daim",              price:3.50,  image:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=85", badge:null,     options:[] },
    { id:"hagen-100",      category:"desserts", name:"Häagen-Dazs 100ml", description:"Glace premium individuelle",                       price:4.50,  image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=85", badge:null,     options:[] },
    { id:"hagen-500",      category:"desserts", name:"Häagen-Dazs 500ml", description:"Glace premium grand format — à partager",          price:9.00,  image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=85", badge:"Famille", options:[] },

    // BOISSONS
    {
      id:"cannette", category:"boissons", name:"Cannette", description:"Coca-Cola, Fanta, Sprite au choix", price:2.00,
      image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=85", badge:null,
      options:[{ label:"Choix", type:"select", required:true, choices:["Coca-Cola","Coca-Cola Zero","Fanta Orange","Sprite"] }]
    },
    {
      id:"bouteille", category:"boissons", name:"Bouteille 1.5L", description:"Grande bouteille 1.5L", price:3.50,
      image:"https://images.unsplash.com/photo-1543253687-c931c8e01820?w=600&q=85", badge:null,
      options:[{ label:"Choix", type:"select", required:true, choices:["Coca-Cola","Coca-Cola Zero","Fanta Orange","Sprite","Eau"] }]
    }
  ],

  promos: [
    { id:"promo1", title:"Promo 1", description:"2 Pizzas achetées = la 3ème à -50%",     note:"En livraison uniquement",                                       color:"#E8272A" },
    { id:"promo2", title:"Promo 2", description:"3 Pizzas achetées = la 4ème offerte",    note:"En livraison uniquement",                                       color:"#E8272A" },
    { id:"promo3", title:"Promo 3", description:"2+1 GRATUIT",                             note:"À emporter ou sur place · Pizza Senior ou Méga",               color:"#F5A623" },
    { id:"promo4", title:"Promo 4", description:"1 Pizza achetée = 1 Pizza à -50%",       note:"À emporter ou sur place · Pizza Senior ou Méga",               color:"#F5A623" }
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
    delivery:{ minOrder:15, zones:[{name:"Zone 1",min:15,fee:0},{name:"Zone 2",min:20,fee:2},{name:"Zone 3",min:25,fee:4}] },
    social:{ facebook:"#", instagram:"#", snapchat:"#" }
  }
};

function getItemsByCategory(c){ return APK_MENU.items.filter(i=>i.category===c); }
function getItemById(id){ return APK_MENU.items.find(i=>i.id===id); }
function formatPrice(p){ return p.toFixed(2).replace('.',',')+'€'; }
