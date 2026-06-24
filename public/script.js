/* =====================================================================
   LUSSO · Carta digital
   Adaptación basada en la estructura de Tavola Chiringo (solo referencia).
   - Idiomas: Español / English / Deutsch, con selector de banderas.
   - Sin zona de hamacas / beach club.
   - Datos de menú y alérgenos: exclusivamente los de Lusso.
   ===================================================================== */

/* ---------- Imágenes ---------- */
const PLACEHOLDER = "assets/bebidas/placeholder/generico.webp";
const GEN = {
  tabla: "assets/comidas/genericas/bruschetta.webp"
};

/* ---------- COMIDA ---------- */
const foodGroups = [
  {
    id: "picar",
    items: [
      { id: "papas", price: "2,00 €", image: "assets/comidas/aperitivo-picar/papas.webp" },
      { id: "aceitunas", price: "2,50 €", image: "assets/comidas/aperitivo-picar/aceitunas.webp" },
      { id: "papas-mejillones", price: "8,00 €", image: "assets/comidas/aperitivo-picar/papasconmejillones.webp" },
      { id: "papas-boquerones", price: "8,00 €", image: "assets/comidas/aperitivo-picar/papasconboquerones.webp" }
    ]
  },
  {
    id: "tapas",
    items: [
      { id: "ensaladilla-rusa", price: "9,00 €", image: "assets/comidas/tapas/28_05_26_TAVOLAWEB-94.jpg" },
      { id: "ajo-arriero", price: "7,00 €", image: "assets/comidas/tapas/ajoarriero.webp" },
      { id: "nachos-verano", price: "9,00 €", image: "assets/comidas/tapas/nachosdeverano.webp" },
      { id: "tabla-jamon-iberico-duroc", price: "12,00 €", image: "assets/comidas/tapas/tablajamonibericoduroc.webp" },
      { id: "tabla-quesos-valencianos", price: "12,00 €", image: "assets/comidas/tapas/tablaquesosvalencianos.webp" },
      { id: "servicio-pan", price: "2,00 €", image: null, selectable: false },
      { id: "servicio-picos-pan-adicional", price: "2,00 €", image: null, selectable: false },
      { id: "salsas-adicionales", price: "2,00 €", image: null, selectable: false }
    ]
  },
  {
    id: "pizzas",
    items: [
      { id: "margarita", price: "14,00 €", image: "assets/comidas/pizzas/margarita.webp" },
      { id: "tartufata", price: "14,00 €", image: "assets/comidas/pizzas/tartufata.webp" },
      { id: "jamon-queso", price: "14,00 €", image: "assets/comidas/pizzas/jamonyqueso.webp" },
      { id: "cuatro-quesos", price: "14,00 €", image: "assets/comidas/pizzas/4quesos.webp" },
      { id: "peperoni", price: "14,00 €", image: "assets/comidas/pizzas/28_05_26_TAVOLAWEB-218.jpg" },
      { id: "canibal", price: "14,00 €", image: "assets/comidas/pizzas/canibal.webp" }
    ]
  }
];

/* ---------- BEBIDAS ---------- */
const beverageGroups = [
  {
    id: "cafes",
    items: [
      { id: "cafe-solo", price: "2,00 €", image: "assets/bebidas/cafes/cafe-solo.webp" },
      { id: "cortado", price: "2,30 €", image: "assets/bebidas/cafes/cortado.webp" },
      { id: "bombon", price: "2,40 €", image: "assets/bebidas/cafes/bombon.webp" },
      { id: "cafe-con-leche", price: "2,60 €", image: "assets/bebidas/cafes/cafe-con-leche.webp" },
      { id: "americano", price: "2,30 €", image: "assets/bebidas/cafes/americano.webp" },
      { id: "infusiones-tes", price: "2,10 €", image: "assets/bebidas/cafes/infusiones-tes.webp" },
      { id: "carajillo", price: "2,50 €", image: "assets/bebidas/cafes/carajillo.webp" }
    ]
  },
  {
    id: "refrescos",
    items: [
      { id: "agua", price: "2,50 €", image: "assets/bebidas/refrescos/agua.webp" },
      { id: "agua-gas", price: "3,00 €", image: "assets/bebidas/refrescos/aguacongaslata.webp" },
      { id: "pepsi", price: "3,00 €", image: "assets/bebidas/refrescos/pepsilata.webp" },
      { id: "pepsi-zero", price: "3,00 €", image: "assets/bebidas/refrescos/pepsizerolata.webp" },
      { id: "schweppes-naranja", price: "3,00 €", image: "assets/bebidas/refrescos/shweppesnaranjalata.webp" },
      { id: "schweppes-limon", price: "3,00 €", image: "assets/bebidas/refrescos/shweppeslimonlata.webp" },
      { id: "seven-up", price: "3,00 €", image: "assets/bebidas/refrescos/sevenuplata.webp" },
      { id: "tonica-schweppes", price: "3,00 €", image: "assets/bebidas/refrescos/tonicashweppeslata.webp" },
      { id: "aquarade-limon", price: "3,50 €", image: "assets/bebidas/refrescos/aquaradelimonlata.webp" },
      { id: "aquarade-naranja", price: "3,50 €", image: "assets/bebidas/refrescos/aquaradenaranjalata.webp" },
      { id: "lipton-limon", price: "3,50 €", image: "assets/bebidas/refrescos/liptonlimonlata.webp" },
      { id: "redbull", price: "3,50 €", image: "assets/bebidas/refrescos/redbull.webp" },
      { id: "zumos", price: "2,50 €", image: "assets/bebidas/refrescos/zumoslata.webp" }
    ]
  },
  {
    id: "cerveza",
    items: [
      { id: "estrella-galicia", price: "3,50 €", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "radler", price: "3,50 €", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "cerveza-00", price: "3,50 €", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "cerveza-sin-gluten", price: "4,00 €", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "estrella-galicia-lata", price: "3,50 €", image: "assets/bebidas/cerveza/amstel-oro-lata.webp" }
    ]
  },
  {
    id: "vermouth-copas",
    items: [
      { id: "vermouth", price: "5,00 €", image: "assets/bebidas/vermouth-copas/vermutyzaguirre.webp" },
      { id: "combinados", price: "Desde 9,00 €", image: "assets/bebidas/vermouth-copas/combinados.webp" },
      { id: "combinados-premium", price: "Desde 11,00 €", image: "assets/bebidas/vermouth-copas/copas-premium.webp" },
      { id: "chupitos", price: "3,00 €", image: "assets/bebidas/vermouth-copas/chupitos.webp" },
      { id: "chupitos-premium", price: "6,00 €", image: "assets/bebidas/vermouth-copas/chupitos-premium.webp" },
      { id: "licores", price: "6,00 €", image: "assets/bebidas/vermouth-copas/licores.webp" }
    ]
  },
  {
    id: "vinos-blancos",
    items: [
      { id: "ceremonia-sauvignon-blanc", price: "Copa 4,00 € | Botella 20,00 €", image: "assets/bebidas/vinos/ceremonia-sauvignon-blanc.webp" },
      { id: "ramon-bilbao-verdejo", price: "Copa 4,80 € | Botella 22,00 €", image: "assets/bebidas/vinos/ramon-bilbao-verdejo.webp" },
      { id: "paco-lola-albarino", price: "Copa 4,80 € | Botella 22,00 €", image: "assets/bebidas/vinos/pl.webp" }
    ]
  },
  {
    id: "vinos-rosados",
    items: [
      { id: "ceremonia-bobal-rose", price: "Copa 4,00 € | Botella 20,00 €", image: "assets/bebidas/vinos/ceremonia-bobal-rose.webp" }
    ]
  },
  {
    id: "vinos-tintos",
    items: [
      { id: "ceremonia-cabernet-sauvignon", price: "Copa 4,00 € | Botella 20,00 €", image: "assets/bebidas/vinos/ceremonia-cabernet-sauvignon.webp" },
      { id: "ramon-bilbao-crianza-rioja", price: "Copa 4,80 € | Botella 22,00 €", image: "assets/bebidas/vinos/ramon-bilbao-crianza-rioja.webp" },
      { id: "ceramic-monastrell", price: "Copa 4,80 € | Botella 22,00 €", image: "assets/bebidas/vinos/ceramic-monastrell-vicente-gandia.webp" }
    ]
  },
  {
    id: "cavas-espumosos",
    items: [
      { id: "cava-patacona-brut", price: "Copa 5,00 € | Botella 30,00 €", image: "assets/bebidas/cavas-espumosos/cavapataconabrut.webp" },
      { id: "cava-lola", price: "Botella 40,00 €", image: "assets/bebidas/cavas-espumosos/cavalola.webp" },
      { id: "moet-chandon", price: "Botella 120,00 €", image: "assets/bebidas/cavas-espumosos/moet-chandon.webp" },
      { id: "moet-chandon-rose", price: "Botella 130,00 €", image: "assets/bebidas/cavas-espumosos/moet-chandon-rose.webp" },
      { id: "moet-chandon-ice", price: "Botella 150,00 €", image: "assets/bebidas/cavas-espumosos/moet-chandon-ice.webp" }
    ]
  }
];

/* ---------- CÓCTELES ---------- */
const cocktailGroups = [
  {
    id: "cocteles-clasicos",
    items: [
      { id: "mojito-normal", price: "9,00 €", image: "assets/cocteles/mojito-normal.webp" },
      { id: "mojito-sabores", price: "9,00 €", image: "assets/cocteles/mojito-sabores.webp" },
      { id: "daikiri-frozen", price: "9,00 €", image: "assets/cocteles/daikiri-frozen.webp" },
      { id: "pina-colada", price: "9,00 €", image: "assets/cocteles/pina-colada.webp" },
      { id: "caipirinha", price: "9,00 €", image: "assets/cocteles/caipirinha.webp" },
      { id: "caipiroska", price: "9,00 €", image: "assets/cocteles/caipiroska.webp" }
    ]
  }
];

/* ---------- GRANIZADOS, SMOOTHIES Y FRAPPÉS ---------- */
const granizadosSmoothiesGroups = [
  {
    id: "granizados-smoothies-frappes",
    items: [
      { id: "granizado-limon", price: "5,00 €", image: "assets/granizados-smoothies/granizado-limon.webp" },
      { id: "smoothie-mango", price: "7,00 €", image: "assets/granizados-smoothies/smoothie-mango.webp" },
      { id: "smoothie-coco-pina", price: "7,00 €", image: "assets/granizados-smoothies/smoothie-coco-pina.webp" },
      { id: "smoothie-yogur-melon", price: "7,00 €", image: "assets/granizados-smoothies/smoothie-yogur-melon.webp" },
      { id: "frappe-cafe", price: "7,00 €", image: "assets/granizados-smoothies/frappe-cafe.webp" },
      { id: "frappe-chocolate", price: "7,00 €", image: "assets/granizados-smoothies/frappe-chocolate.webp" },
      { id: "frappe-vainilla", price: "7,00 €", image: "assets/granizados-smoothies/frappe-vainilla.webp" }
    ]
  }
];

/* ---------- SANGRÍAS ---------- */
const sangriaGroups = [
  {
    id: "sangrias-carta",
    items: [
      { id: "tinto-verano-vaso", price: "5,00 €", image: "assets/sangrias/tinto-verano-vaso.webp" },
      { id: "tinto-verano-jarra", price: "20,00 €", image: "assets/sangrias/tinto-verano-jarra.webp" },
      { id: "sangria-vino-blanco", price: "30,00 €", image: "assets/sangrias/sangria-vino-blanco.webp" },
      { id: "sangria-vino-tinto", price: "30,00 €", image: "assets/sangrias/sangria-vino-tinto.webp" },
      { id: "sangria-cava", price: "35,00 €", image: "assets/sangrias/sangria-cava.webp" },
      { id: "agua-valencia", price: "35,00 €", image: "assets/sangrias/agua-valencia.webp" }
    ]
  }
];

/* ---------- Alérgenos (solo lo confirmado en la tabla de Lusso) ----------
   Los nombres de alérgeno se traducen vía ALLERGEN_LABELS por idioma. */
const allergenData = {
  aceitunas: { contains: [], traces: ["sulfitos"] },
  "papas-mejillones": { contains: ["moluscos"], traces: ["sulfitos"] },
  "nachos-verano": { contains: ["lacteos"], traces: ["gluten"] },
  "tabla-quesos-valencianos": { contains: ["lacteos"], traces: [] },
  "servicio-pan": { contains: ["gluten"], traces: [] },
  "servicio-picos-pan-adicional": { contains: ["gluten"], traces: [] },
  margarita: { contains: ["gluten", "lacteos"], traces: [] },
  tartufata: { contains: ["gluten", "lacteos"], traces: [] },
  "jamon-queso": { contains: ["gluten", "lacteos"], traces: [] },
  "cuatro-quesos": { contains: ["gluten", "lacteos"], traces: [] },
  peperoni: { contains: ["gluten", "lacteos"], traces: [] },
  canibal: { contains: ["gluten", "lacteos"], traces: [] }
};

const ALLERGEN_LABELS = {
  es: { gluten: "Gluten", lacteos: "Lácteos", huevo: "Huevo", pescado: "Pescado", moluscos: "Moluscos", soja: "Soja", "frutos-secos": "Frutos secos", sulfitos: "Sulfitos" },
  en: { gluten: "Gluten", lacteos: "Dairy", huevo: "Egg", pescado: "Fish", moluscos: "Molluscs", soja: "Soy", "frutos-secos": "Tree nuts", sulfitos: "Sulphites" },
  de: { gluten: "Gluten", lacteos: "Milchprodukte", huevo: "Ei", pescado: "Fisch", moluscos: "Weichtiere", soja: "Soja", "frutos-secos": "Schalenfrüchte", sulfitos: "Sulfite" }
};

/* ---------- Line arts decorativos por categoría ---------- */
const groupLinearts = {
  cafes: "assets/linearts/bebidas/cafesart.webp",
  refrescos: "assets/linearts/bebidas/refrescoart.webp",
  cerveza: "assets/linearts/bebidas/cervezaart.webp",
  "vermouth-copas": "assets/linearts/bebidas/vermouthycopasart.webp",
  "vinos-blancos": "assets/linearts/bebidas/vinosblancosart.webp",
  "vinos-rosados": "assets/linearts/bebidas/vinosrosadosart.webp",
  "vinos-tintos": "assets/linearts/bebidas/vinostintosart.webp",
  "cavas-espumosos": "assets/linearts/bebidas/cavasyespumososart.webp",
  picar: "assets/linearts/comidas/aperitivoypicarart.webp",
  tapas: "assets/linearts/comidas/tapasart.webp",
  pizzas: "assets/linearts/comidas/pizzaart.webp"
};

/* ---------- Secciones (tabs) ---------- */
const menuSections = [
  { id: "comidas", groups: foodGroups },
  { id: "bebidas", groups: beverageGroups },
  { id: "cocteles", groups: cocktailGroups },
  { id: "granizados-smoothies", groups: granizadosSmoothiesGroups },
  { id: "sangrias", groups: sangriaGroups }
];

/* =====================================================================
   TRADUCCIONES ES / EN / DE
   Reutiliza la terminología de Tavola para las categorías compartidas.
   Los nombres de marca y producto se mantienen igual en los tres idiomas.
   ===================================================================== */
const translations = {
  es: {
    ui: {
      documentTitle: "Lusso | Carta",
      languageLabel: "Idioma",
      topTabsLabel: "Categorías de la carta",
      bottomTabsLabel: "Cambiar sección de la carta",
      menuLayoutLabel: "Carta interactiva",
      menuListLabel: "Productos de la categoría seleccionada",
      imageFrameLabel: "Ampliar imagen del producto",
      lightboxLabel: "Imagen ampliada",
      closeLightboxLabel: "Cerrar imagen ampliada",
      viewSection: "Ver sección",
      sectionEyebrow: "Sección",
      productSingular: "producto",
      productPlural: "productos",
      pending: "Próximamente",
      emptyTitle: "Próximamente",
      emptyCopy: "Estamos preparando esta sección de la carta.",
      dishSelected: "Producto seleccionado",
      allergenEyebrow: "Alérgenos",
      allergenTitle: "Alérgenos",
      allergenMessage: "Queremos que disfrutes con tranquilidad.",
      allergenContains: "Contiene",
      allergenTraces: "Puede contener trazas",
      allergenPending: "Alérgenos pendientes de confirmar. Consulte a nuestro personal.",
      allergenButton: "Ver alérgenos",
      allergenButtonAria: "Ver alérgenos de",
      photoDisclaimer: "*Fotos orientativas"
    },
    sections: {
      comidas: { category: "Comida", shortLabel: "Comida" },
      bebidas: { category: "Bebidas", shortLabel: "Bebidas" },
      cocteles: { category: "Cócteles", shortLabel: "Cócteles" },
      "granizados-smoothies": { category: "Granizados, smoothies y frappés", shortLabel: "Smoothies" },
      sangrias: { category: "Sangrías", shortLabel: "Sangrías" }
    },
    groups: {
      picar: { category: "Aperitivo y picar", shortLabel: "Picar" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      pizzas: { category: "Pizzas al horno de piedra", shortLabel: "Pizzas" },
      cafes: { category: "Cafés", shortLabel: "Cafés" },
      refrescos: { category: "Refrescos", shortLabel: "Refrescos" },
      cerveza: { category: "Cerveza", shortLabel: "Cerveza" },
      "vermouth-copas": { category: "Vermouth y copas", shortLabel: "Vermouth" },
      "vinos-blancos": { category: "Vinos blancos", shortLabel: "Blancos" },
      "vinos-rosados": { category: "Vino rosado", shortLabel: "Rosado" },
      "vinos-tintos": { category: "Vinos tintos", shortLabel: "Tintos" },
      "cavas-espumosos": { category: "Cavas y espumosos", shortLabel: "Cavas" },
      "cocteles-clasicos": { category: "Cócteles", shortLabel: "Cócteles" },
      "granizados-smoothies-frappes": { category: "Granizados, smoothies y frappés", shortLabel: "Smoothies" },
      "sangrias-carta": { category: "Sangrías", shortLabel: "Sangrías" }
    },
    items: {
      papas: { title: "Papas", description: "Patatas fritas crujientes, doradas al punto y con su pizca de sal." },
      aceitunas: { title: "Aceitunas", description: "Aceitunas aliñadas a la manera mediterránea, carnosas y con un toque herbáceo." },
      "papas-mejillones": { title: "Papas con mejillones", description: "Nuestras papas coronadas con mejillones tiernos y jugosos." },
      "papas-boquerones": { title: "Papas con boquerones", description: "Papas crujientes con boquerones en vinagre, frescos y avinagrados al gusto de la costa." },
      "ensaladilla-rusa": { title: "Ensaladilla rusa", description: "Patata, atún y verduras envueltos en una mayonesa suave y casera. Un imprescindible del aperitivo." },
      "ajo-arriero": { title: "Ajo arriero", description: "Bacalao desmigado y emulsionado con ajo y aceite de oliva, en su textura cremosa tradicional." },
      "nachos-verano": { title: "Nachos de verano", description: "Nachos crujientes con su fundido de queso y toppings frescos, pensados para compartir." },
      "tabla-jamon-iberico-duroc": { title: "Tabla jamón iberico duroc", description: "Jamón ibérico duroc cortado a cuchillo, de sabor profundo y grasa infiltrada que se deshace en boca." },
      "tabla-quesos-valencianos": { title: "Tabla quesos valencianos", description: "Variedad de quesos artesanos de la tierra valenciana, del más suave al más curado." },
      "servicio-pan": { title: "Servicio de pan" },
      "servicio-picos-pan-adicional": { title: "Servicio de picos y pan adicional" },
      "salsas-adicionales": { title: "Salsas adicionales" },
      margarita: { title: "Margarita", description: "Tomate, mozzarella y albahaca sobre masa artesana. Sencilla y perfecta." },
      tartufata: { title: "Tartufata", description: "Jamón, queso y trufa sobre una base dorada. Aroma intenso y un toque de lujo en cada porción." },
      "jamon-queso": { title: "Jamón y queso", description: "El binomio infalible: jamón y queso fundido sobre masa horneada al momento." },
      "cuatro-quesos": { title: "4 quesos", description: "Cuatro quesos fundidos en armonía, cremosos e intensos. Para los más queseros." },
      peperoni: { title: "Peperoni", description: "Generosas láminas de peperoni ligeramente picante sobre tomate y mozzarella." },
      canibal: { title: "Canibal", description: "Para carnívoros: bacon, peperoni y jamón york en una pizza contundente y sabrosa." },
      "cafe-solo": { title: "Café solo", description: "Café de tueste oscuro, intenso y aromático. La dosis justa para arrancar el día." },
      cortado: { title: "Cortado", description: "Espresso suavizado con un toque de leche, en su punto de equilibrio perfecto." },
      bombon: { title: "Bombón", description: "Café solo con leche condensada, dulce y cremoso. Un pequeño placer a cualquier hora." },
      "cafe-con-leche": { title: "Café con leche", description: "La mitad justa de café y leche caliente. Clásico y reconfortante." },
      americano: { title: "Americano", description: "Espresso rebajado con agua caliente, de sabor suave y largo en taza." },
      "infusiones-tes": { title: "Infusiones o tés", description: "Selección de tés e infusiones aromáticas. El descanso que mereces." },
      carajillo: { title: "Carajillo", description: "Café con su chorro de licor. Para los que lo quieren con alegría." },
      agua: { title: "Agua", description: "Agua fresca de manantial, ideal para hidratarse bajo el sol del Mediterráneo." },
      "agua-gas": { title: "Agua gas", description: "Agua con gas en lata, refrescante y burbujeante." },
      pepsi: { title: "Pepsi", description: "El refresco de cola de siempre. Bien frío y cargado." },
      "pepsi-zero": { title: "Pepsi zero", description: "Toda la intensidad de Pepsi, sin azúcar." },
      "schweppes-naranja": { title: "Schweppes Naranja", description: "La clásica naranja Schweppes con ese punto amargo tan característico." },
      "schweppes-limon": { title: "Schweppes Limón", description: "Schweppes de limón, burbujeante y cítrico. Perfecto para el calor." },
      "seven-up": { title: "Seven up", description: "Refresco de lima-limón, suave y refrescante." },
      "tonica-schweppes": { title: "Tonica Schweppes", description: "La tónica de referencia, seca y burbujeante. Sola o acompañada de ginebra." },
      "aquarade-limon": { title: "Aquarade limon", description: "Bebida isotónica de limón para reponer energía bajo el sol." },
      "aquarade-naranja": { title: "Aquarade naranja", description: "Bebida isotónica de naranja, refrescante y energizante." },
      "lipton-limon": { title: "Lipton limon", description: "Té helado de limón, ligero y afrutado. El verano en lata." },
      redbull: { title: "Redbull", description: "Bebida energética para recargar pilas sin pausa." },
      zumos: { title: "Zumos", description: "Zumo de frutas naturales, frescos y sin artificios." },
      "estrella-galicia": { title: "Estrella Galicia", description: "La lager española de carácter suave y espuma cremosa. La favorita del chiringo." },
      radler: { title: "Radler", description: "Estrella mezclada con limón natural, refrescante y de baja graduación. Perfecta para el mediodía." },
      "cerveza-00": { title: "Cerveza 0,0", description: "La misma Estrella, sin alcohol. Todo el sabor, sin los efectos." },
      "cerveza-sin-gluten": { title: "Cerveza sin gluten", description: "Cerveza sin gluten, para que nadie se quede sin su trago de verano." },
      "estrella-galicia-lata": { title: "Estrella Galicia lata", description: "Estrella Galicia en lata, bien fría y lista para disfrutar." },
      vermouth: { title: "Vermouth", description: "Rojo o blanco. El ritual del aperitivo mediterráneo, con o sin picoteo." },
      combinados: { title: "Combinados", description: "Masters, Larios 12, Barceló, Brugal, Jonny Walker, Moscovscaya, Dyc y similares." },
      "combinados-premium": { title: "Combinados premium", description: "Hendricks, Roku, Bulldog, Martin Millers, 1888, Zacapa, Black Label, Macallan 12 y similares." },
      chupitos: { title: "Chupitos", description: "Chupitos de sabores variados. El broche ideal para cerrar bien la noche." },
      "chupitos-premium": { title: "Chupitos premium", description: "Destilados premium para chupito. Porque los momentos especiales merecen lo mejor." },
      licores: { title: "Licores", description: "Baileys, licor de hierbas y similares." },
      "ceremonia-sauvignon-blanc": { title: "Ceremonia Sauvignon Blanc", description: "Bodega Vicente Gandía. Aromas cítricos y tropicales, fresco y de final limpio." },
      "ramon-bilbao-verdejo": { title: "Ramon Bilbao Verdejo", description: "Verdejo de Rueda con notas afrutadas y cítricas, fresco y de final mineral." },
      "paco-lola-albarino": { title: "Paco & Lola Albariño", description: "Albariño de Rías Baixas, atlántico, mineral y con un punto salino inconfundible." },
      "ceremonia-bobal-rose": { title: "Ceremonia Bobal Rosé", description: "Bodega Vicente Gandía. Rosado de bobal con aromas a fresa y fruta roja, fresco y vivo." },
      "ceremonia-cabernet-sauvignon": { title: "Ceremonia Cabernet Sauvignon", description: "Bodega Vicente Gandía. Tinto estructurado con fruta negra madura y un toque especiado." },
      "ramon-bilbao-crianza-rioja": { title: "Ramón Bilbao Crianza Rioja", description: "Rioja crianza de cuerpo medio, con fruta roja madura y un toque de madera elegante." },
      "ceramic-monastrell": { title: "Ceramic Monastrell. Vicente Gandía", description: "Monastrell de D.O. Utiel-Requena, potente, especiado y profundamente valenciano." },
      "cava-patacona-brut": { title: "Cava Patacona brut", description: "Cava brut valenciano, fino y burbujeante. El brindis de la costa." },
      "cava-lola": { title: "Cava Lola", description: "Bodega Paco & Lola. Elegante y afrutado, con burbujas finas y larga persistencia." },
      "moet-chandon": { title: "Moet & Chandon", description: "El champán más icónico del mundo. Burbujas finas, elegancia pura y sabor inimitable." },
      "moet-chandon-rose": { title: "Moet & Chandon Rosé", description: "Frescos aromas de frutos rojos y pétalos. Para celebrar con distinción." },
      "moet-chandon-ice": { title: "Moet & Chandon Ice", description: "Servido sobre hielo, atrevido e innovador. El champán que no sigue las reglas." },
      "mojito-normal": { title: "Mojito normal", description: "Ron, lima, menta, azúcar y soda. El cóctel del verano eterno." },
      "mojito-sabores": { title: "Mojito sabores", description: "Melón, fresa o maracuyá." },
      "daikiri-frozen": { title: "Daikiri Frozen", description: "Daiquiri triturado con hielo, cremoso, ácido y refrescante. Directo desde el trópico." },
      "pina-colada": { title: "Piña colada", description: "Ron, crema de coco y piña triturada. Cerrar los ojos y sentir la playa." },
      caipirinha: { title: "Caipirinha", description: "Cachaça, lima y azúcar. El cóctel nacional de Brasil, directo y sin filtros." },
      caipiroska: { title: "Caipiroska", description: "La versión con vodka de la caipirinha, más suave y igual de refrescante." },
      "granizado-limon": { title: "Granizado Limón", description: "Granizado de limón natural, bien frío y con el punto ácido justo.", note: "Suplemento 3 € con alcohol." },
      "smoothie-mango": { title: "Smoothie Mango", description: "Mango triturado con hielo, cremoso y tropical.", note: "Suplemento 3 € con alcohol." },
      "smoothie-coco-pina": { title: "Smoothie Coco y piña", description: "Coco y piña frescos, una combinación tropical irresistible.", note: "Suplemento 3 € con alcohol." },
      "smoothie-yogur-melon": { title: "Smoothie Yogur y melón", description: "Yogur cremoso con melón fresco, suave y refrescante.", note: "Suplemento 3 € con alcohol." },
      "frappe-cafe": { title: "Frappé café", description: "Café batido con hielo, intenso y refrescante a la vez.", note: "Suplemento 3 € con alcohol." },
      "frappe-chocolate": { title: "Frappé chocolate", description: "Chocolate frío batido con hielo. Un capricho para cualquier hora.", note: "Suplemento 3 € con alcohol." },
      "frappe-vainilla": { title: "Frappé vainilla", description: "Suave y cremoso con aroma a vainilla, frío y delicado.", note: "Suplemento 3 € con alcohol." },
      "tinto-verano-vaso": { title: "Tinto verano vaso", description: "Vino tinto con gaseosa o limón. El clásico veraniego de siempre, en vaso." },
      "tinto-verano-jarra": { title: "Tinto verano jarra", description: "Jarra de tinto de verano para compartir. Fresco, ligero y perfecto para el chiringo." },
      "sangria-vino-blanco": { title: "Sangría vino blanco", description: "Jarra de sangría de vino blanco con frutas frescas de temporada." },
      "sangria-vino-tinto": { title: "Sangría vino tinto", description: "Jarra de sangría de vino tinto con frutas, especias y un toque cítrico." },
      "sangria-cava": { title: "Sangria de cava", description: "Sangría elaborada con cava. Efervescente, elegante y perfecta para la celebración." },
      "agua-valencia": { title: "Agua de Valencia", description: "Cava, zumo de naranja, vodka y ginebra. El cóctel valenciano por excelencia." }
    }
  },

  en: {
    ui: {
      documentTitle: "Lusso | Menu",
      languageLabel: "Language",
      topTabsLabel: "Menu categories",
      bottomTabsLabel: "Change menu section",
      menuLayoutLabel: "Interactive menu",
      menuListLabel: "Products in the selected category",
      imageFrameLabel: "Enlarge product image",
      lightboxLabel: "Enlarged image",
      closeLightboxLabel: "Close enlarged image",
      viewSection: "View section",
      sectionEyebrow: "Section",
      productSingular: "product",
      productPlural: "products",
      pending: "Coming soon",
      emptyTitle: "Coming soon",
      emptyCopy: "We are preparing this section of the menu.",
      dishSelected: "Selected product",
      allergenEyebrow: "Allergens",
      allergenTitle: "Allergens",
      allergenMessage: "We want you to enjoy with peace of mind.",
      allergenContains: "Contains",
      allergenTraces: "May contain traces",
      allergenPending: "Allergens pending confirmation. Please ask our staff.",
      allergenButton: "View allergens",
      allergenButtonAria: "View allergens of",
      photoDisclaimer: "*Photos for illustration only"
    },
    sections: {
      comidas: { category: "Food", shortLabel: "Food" },
      bebidas: { category: "Drinks", shortLabel: "Drinks" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Slushies, smoothies & frappés", shortLabel: "Smoothies" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" }
    },
    groups: {
      picar: { category: "Snacks & nibbles", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      pizzas: { category: "Stone oven pizzas", shortLabel: "Pizzas" },
      cafes: { category: "Coffee", shortLabel: "Coffee" },
      refrescos: { category: "Soft drinks", shortLabel: "Soft drinks" },
      cerveza: { category: "Beer", shortLabel: "Beer" },
      "vermouth-copas": { category: "Vermouth & spirits", shortLabel: "Vermouth" },
      "vinos-blancos": { category: "White wines", shortLabel: "Whites" },
      "vinos-rosados": { category: "Rosé wine", shortLabel: "Rosé" },
      "vinos-tintos": { category: "Red wines", shortLabel: "Reds" },
      "cavas-espumosos": { category: "Cavas & sparkling wines", shortLabel: "Cavas" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies-frappes": { category: "Slushies, smoothies & frappés", shortLabel: "Smoothies" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      papas: { title: "Crisps", description: "Crispy golden fries with just the right pinch of salt." },
      aceitunas: { title: "Olives", description: "Mediterranean-style marinated olives, meaty with a herby touch." },
      "papas-mejillones": { title: "Crisps with mussels", description: "Our fries topped with tender, juicy mussels." },
      "papas-boquerones": { title: "Crisps with anchovies", description: "Crispy fries with fresh anchovies in vinegar, coastal style." },
      "ensaladilla-rusa": { title: "Russian salad", description: "Potato, tuna and vegetables in a smooth homemade mayonnaise. An aperitif must-have." },
      "ajo-arriero": { title: "Ajo arriero", description: "Shredded cod emulsified with garlic and olive oil, in its traditional creamy texture." },
      "nachos-verano": { title: "Summer nachos", description: "Crispy nachos with melted cheese and fresh toppings, made for sharing." },
      "tabla-jamon-iberico-duroc": { title: "Iberico Duroc ham board", description: "Hand-carved Iberian Duroc ham, deep in flavour with marbled fat that melts in the mouth." },
      "tabla-quesos-valencianos": { title: "Valencian cheese board", description: "A selection of artisan cheeses from the Valencian region, from mild to mature." },
      "servicio-pan": { title: "Bread service" },
      "servicio-picos-pan-adicional": { title: "Extra breadsticks & bread service" },
      "salsas-adicionales": { title: "Extra sauces" },
      margarita: { title: "Margherita", description: "Tomato, mozzarella and basil on artisan dough. Simple and perfect." },
      tartufata: { title: "Tartufata", description: "Ham, cheese and truffle on a golden base. Intense aroma and a touch of luxury in every slice." },
      "jamon-queso": { title: "Ham & cheese", description: "The foolproof pairing: ham and melted cheese on freshly baked dough." },
      "cuatro-quesos": { title: "Four cheeses", description: "Four cheeses melted in harmony, creamy and intense. For true cheese lovers." },
      peperoni: { title: "Pepperoni", description: "Generous slices of mildly spicy pepperoni over tomato and mozzarella." },
      canibal: { title: "Canibal", description: "For meat lovers: bacon, pepperoni and cooked ham on a hearty, tasty pizza." },
      "cafe-solo": { title: "Espresso", description: "Dark roast, intense and aromatic. Just the right dose to start the day." },
      cortado: { title: "Cortado", description: "Espresso softened with a dash of milk, perfectly balanced." },
      bombon: { title: "Café bombón", description: "Espresso with condensed milk, sweet and creamy. A small pleasure at any hour." },
      "cafe-con-leche": { title: "Coffee with milk", description: "Half espresso, half warm milk. Classic and comforting." },
      americano: { title: "Americano", description: "Espresso lengthened with hot water, smooth and long in the cup." },
      "infusiones-tes": { title: "Teas & infusions", description: "A selection of aromatic teas and herbal infusions. The break you deserve." },
      carajillo: { title: "Carajillo", description: "Coffee with a splash of liqueur. For those who like a little kick." },
      agua: { title: "Water", description: "Fresh spring water, ideal for staying hydrated under the Mediterranean sun." },
      "agua-gas": { title: "Sparkling water", description: "Sparkling water in a can, refreshing and fizzy." },
      pepsi: { title: "Pepsi", description: "The classic cola. Cold and full-flavoured." },
      "pepsi-zero": { title: "Pepsi Zero", description: "All the intensity of Pepsi, with no sugar." },
      "schweppes-naranja": { title: "Schweppes Orange", description: "Classic Schweppes orange with that distinctive bitter note." },
      "schweppes-limon": { title: "Schweppes Lemon", description: "Lemon Schweppes, fizzy and citrusy. Perfect for the heat." },
      "seven-up": { title: "Seven Up", description: "Lime and lemon soft drink, light and refreshing." },
      "tonica-schweppes": { title: "Schweppes Tonic", description: "The benchmark tonic, dry and fizzy. Perfect on its own or with gin." },
      "aquarade-limon": { title: "Aquarade Lemon", description: "Lemon isotonic drink to replenish energy under the sun." },
      "aquarade-naranja": { title: "Aquarade Orange", description: "Orange isotonic drink, refreshing and energising." },
      "lipton-limon": { title: "Lipton Lemon", description: "Lemon iced tea, light and fruity. Summer in a can." },
      redbull: { title: "Red Bull", description: "Energy drink to recharge without stopping." },
      zumos: { title: "Juices", description: "Fresh fruit juices, natural and unfiltered." },
      "estrella-galicia": { title: "Estrella Galicia", description: "The Spanish lager with a smooth character and creamy foam. The chiringo favourite." },
      radler: { title: "Radler", description: "Beer blended with natural lemon, refreshing and low-alcohol. Perfect for midday." },
      "cerveza-00": { title: "Beer 0.0", description: "Same Estrella, no alcohol. All the flavour, none of the effects." },
      "cerveza-sin-gluten": { title: "Gluten-free beer", description: "Gluten-free beer so no one misses out on their summer drink." },
      "estrella-galicia-lata": { title: "Estrella Galicia can", description: "Estrella Galicia in a can, ice cold and ready to enjoy." },
      vermouth: { title: "Vermouth", description: "Red or white. The Mediterranean aperitif ritual, with or without snacks." },
      combinados: { title: "Mixed drinks", description: "Masters, Larios 12, Barceló, Brugal, Jonny Walker, Moscovscaya, Dyc and similar." },
      "combinados-premium": { title: "Premium mixed drinks", description: "Hendricks, Roku, Bulldog, Martin Millers, 1888, Zacapa, Black Label, Macallan 12 and similar." },
      chupitos: { title: "Shots", description: "Assorted flavour shots. The perfect full stop to a good night." },
      "chupitos-premium": { title: "Premium shots", description: "Premium distillate shots. Because special moments deserve the best." },
      licores: { title: "Liqueurs", description: "Baileys, herbal liqueur and similar." },
      "ceremonia-sauvignon-blanc": { title: "Ceremonia Sauvignon Blanc", description: "Bodega Vicente Gandía. Citrus and tropical aromas, fresh with a clean finish." },
      "ramon-bilbao-verdejo": { title: "Ramon Bilbao Verdejo", description: "Verdejo from Rueda with fruity and citrus notes, fresh with a mineral finish." },
      "paco-lola-albarino": { title: "Paco & Lola Albariño", description: "Galician Albariño from Rías Baixas, Atlantic, mineral with an unmistakable salty edge." },
      "ceremonia-bobal-rose": { title: "Ceremonia Bobal Rosé", description: "Bodega Vicente Gandía. Bobal rosé with strawberry and red fruit aromas, fresh and lively." },
      "ceremonia-cabernet-sauvignon": { title: "Ceremonia Cabernet Sauvignon", description: "Bodega Vicente Gandía. Structured red with ripe dark fruit and a spiced touch." },
      "ramon-bilbao-crianza-rioja": { title: "Ramón Bilbao Crianza Rioja", description: "Medium-bodied Rioja Crianza with ripe red fruit and an elegant hint of oak." },
      "ceramic-monastrell": { title: "Ceramic Monastrell. Vicente Gandía", description: "Monastrell from D.O. Utiel-Requena, powerful, spiced and deeply Valencian." },
      "cava-patacona-brut": { title: "Cava Patacona Brut", description: "Valencian brut cava, fine and fizzy. The coastal toast." },
      "cava-lola": { title: "Cava Lola", description: "Bodega Paco & Lola. Elegant and fruity, with fine bubbles and a long finish." },
      "moet-chandon": { title: "Moet & Chandon", description: "The world's most iconic champagne. Fine bubbles, pure elegance and unmistakable flavour." },
      "moet-chandon-rose": { title: "Moet & Chandon Rosé", description: "Fresh red fruit and petal aromas. Celebrate with distinction." },
      "moet-chandon-ice": { title: "Moet & Chandon Ice", description: "Served over ice, bold and unconventional. The champagne that breaks the rules." },
      "mojito-normal": { title: "Classic Mojito", description: "Rum, lime, mint, sugar and soda. The cocktail of eternal summer." },
      "mojito-sabores": { title: "Flavoured Mojito", description: "Melon, strawberry or passion fruit." },
      "daikiri-frozen": { title: "Frozen Daiquiri", description: "Blended frozen daiquiri, creamy, tart and refreshing. Straight from the tropics." },
      "pina-colada": { title: "Piña colada", description: "Rum, coconut cream and crushed pineapple. Close your eyes and feel the beach." },
      caipirinha: { title: "Caipirinha", description: "Cachaça, lime and sugar. Brazil's national cocktail, straight and unfiltered." },
      caipiroska: { title: "Caipiroska", description: "The vodka version of caipirinha, smoother and just as refreshing." },
      "granizado-limon": { title: "Lemon slush", description: "Natural lemon slush, ice cold with just the right tartness.", note: "€3 supplement with alcohol." },
      "smoothie-mango": { title: "Mango smoothie", description: "Blended mango with ice, creamy and tropical.", note: "€3 supplement with alcohol." },
      "smoothie-coco-pina": { title: "Coconut & pineapple smoothie", description: "Fresh coconut and pineapple, an irresistible tropical blend.", note: "€3 supplement with alcohol." },
      "smoothie-yogur-melon": { title: "Yoghurt & melon smoothie", description: "Creamy yoghurt with fresh melon, smooth and refreshing.", note: "€3 supplement with alcohol." },
      "frappe-cafe": { title: "Coffee frappé", description: "Coffee blended with ice, intense and refreshing at once.", note: "€3 supplement with alcohol." },
      "frappe-chocolate": { title: "Chocolate frappé", description: "Cold chocolate blended with ice. A treat for any time of day.", note: "€3 supplement with alcohol." },
      "frappe-vainilla": { title: "Vanilla frappé", description: "Smooth and creamy with a vanilla aroma, cold and delicate.", note: "€3 supplement with alcohol." },
      "tinto-verano-vaso": { title: "Tinto de verano (glass)", description: "Red wine with soda or lemon. The timeless Spanish summer classic, by the glass." },
      "tinto-verano-jarra": { title: "Tinto de verano (jug)", description: "A jug of tinto de verano to share. Cool, light and perfect for the beach bar." },
      "sangria-vino-blanco": { title: "White wine sangria", description: "White wine sangria jug with fresh seasonal fruit." },
      "sangria-vino-tinto": { title: "Red wine sangria", description: "Red wine sangria jug with fruit, spices and a citrus twist." },
      "sangria-cava": { title: "Cava sangria", description: "Sangria made with cava. Sparkling, elegant and perfect for celebrations." },
      "agua-valencia": { title: "Agua de Valencia", description: "Cava, orange juice, vodka and gin. The Valencian cocktail par excellence." }
    }
  },

  de: {
    ui: {
      documentTitle: "Lusso | Karte",
      languageLabel: "Sprache",
      topTabsLabel: "Kategorien der Karte",
      bottomTabsLabel: "Bereich der Karte wechseln",
      menuLayoutLabel: "Interaktive Speisekarte",
      menuListLabel: "Produkte der ausgewählten Kategorie",
      imageFrameLabel: "Produktbild vergrößern",
      lightboxLabel: "Vergrößertes Bild",
      closeLightboxLabel: "Vergrößertes Bild schließen",
      viewSection: "Bereich anzeigen",
      sectionEyebrow: "Bereich",
      productSingular: "Produkt",
      productPlural: "Produkte",
      pending: "Demnächst",
      emptyTitle: "Demnächst",
      emptyCopy: "Wir bereiten diesen Bereich der Karte gerade vor.",
      dishSelected: "Ausgewähltes Produkt",
      allergenEyebrow: "Allergene",
      allergenTitle: "Allergene",
      allergenMessage: "Wir möchten, dass Sie unbeschwert genießen.",
      allergenContains: "Enthält",
      allergenTraces: "Kann Spuren enthalten",
      allergenPending: "Allergene noch zu bestätigen. Bitte fragen Sie unser Personal.",
      allergenButton: "Allergene ansehen",
      allergenButtonAria: "Allergene ansehen von",
      photoDisclaimer: "*Fotos dienen nur zur Veranschaulichung"
    },
    sections: {
      comidas: { category: "Speisen", shortLabel: "Speisen" },
      bebidas: { category: "Getränke", shortLabel: "Getränke" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Slush, Smoothies & Frappés", shortLabel: "Smoothies" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" }
    },
    groups: {
      picar: { category: "Aperitif & Snacks", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      pizzas: { category: "Pizzen aus dem Steinofen", shortLabel: "Pizzen" },
      cafes: { category: "Kaffee", shortLabel: "Kaffee" },
      refrescos: { category: "Erfrischungsgetränke", shortLabel: "Softdrinks" },
      cerveza: { category: "Bier", shortLabel: "Bier" },
      "vermouth-copas": { category: "Wermut & Longdrinks", shortLabel: "Wermut" },
      "vinos-blancos": { category: "Weißweine", shortLabel: "Weißweine" },
      "vinos-rosados": { category: "Roséwein", shortLabel: "Rosé" },
      "vinos-tintos": { category: "Rotweine", shortLabel: "Rotweine" },
      "cavas-espumosos": { category: "Cavas & Schaumweine", shortLabel: "Cavas" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies-frappes": { category: "Slush, Smoothies & Frappés", shortLabel: "Smoothies" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      papas: { title: "Kartoffelchips", description: "Knusprige, goldene Pommes mit einer Prise Salz." },
      aceitunas: { title: "Oliven", description: "Mediterran marinierte Oliven, fleischig mit einer Kräuternote." },
      "papas-mejillones": { title: "Chips mit Miesmuscheln", description: "Unsere Pommes mit zarten, saftigen Muscheln." },
      "papas-boquerones": { title: "Chips mit Sardellen", description: "Knusprige Pommes mit frischen Sardellen in Essig, ganz nach Küstenart." },
      "ensaladilla-rusa": { title: "Russischer Salat", description: "Kartoffel, Thunfisch und Gemüse in cremiger, hausgemachter Mayonnaise. Ein Aperitif-Klassiker." },
      "ajo-arriero": { title: "Ajo arriero", description: "Zerpflückter Kabeljau, emulgiert mit Knoblauch und Olivenöl, in traditionell cremiger Textur." },
      "nachos-verano": { title: "Sommer-Nachos", description: "Knusprige Nachos mit geschmolzenem Käse und frischen Toppings, zum Teilen gemacht." },
      "tabla-jamon-iberico-duroc": { title: "Iberico-Duroc-Schinkenplatte", description: "Handgeschnittener iberischer Duroc-Schinken, intensiv im Geschmack mit zartem Fett, das auf der Zunge zergeht." },
      "tabla-quesos-valencianos": { title: "Valencianische Käseplatte", description: "Eine Auswahl handwerklicher Käsesorten aus der Region Valencia, von mild bis gereift." },
      "servicio-pan": { title: "Brotgedeck" },
      "servicio-picos-pan-adicional": { title: "Zusätzliche Brotstangen & Brot" },
      "salsas-adicionales": { title: "Zusätzliche Saucen" },
      margarita: { title: "Margherita", description: "Tomate, Mozzarella und Basilikum auf handgemachtem Teig. Einfach und perfekt." },
      tartufata: { title: "Tartufata", description: "Schinken, Käse und Trüffel auf goldenem Boden. Intensives Aroma und ein Hauch Luxus in jeder Scheibe." },
      "jamon-queso": { title: "Schinken & Käse", description: "Das unfehlbare Duo: Schinken und geschmolzener Käse auf frisch gebackenem Teig." },
      "cuatro-quesos": { title: "Vier Käse", description: "Vier Käsesorten harmonisch geschmolzen, cremig und intensiv. Für echte Käseliebhaber." },
      peperoni: { title: "Peperoni", description: "Großzügige Scheiben leicht scharfer Peperoni auf Tomate und Mozzarella." },
      canibal: { title: "Canibal", description: "Für Fleischliebhaber: Bacon, Peperoni und Kochschinken auf einer herzhaften Pizza." },
      "cafe-solo": { title: "Espresso", description: "Dunkler Röst, intensiv und aromatisch. Die richtige Dosis für den Start in den Tag." },
      cortado: { title: "Cortado", description: "Espresso mit einem Schuss Milch, perfekt ausgewogen." },
      bombon: { title: "Café Bombón", description: "Espresso mit Kondensmilch, süß und cremig. Ein kleines Vergnügen zu jeder Tageszeit." },
      "cafe-con-leche": { title: "Milchkaffee", description: "Halb Espresso, halb warme Milch. Klassisch und wohltuend." },
      americano: { title: "Americano", description: "Mit heißem Wasser verlängerter Espresso, sanft und lang im Abgang." },
      "infusiones-tes": { title: "Tees & Aufgüsse", description: "Auswahl aromatischer Tees und Kräuteraufgüsse. Die Pause, die du verdienst." },
      carajillo: { title: "Carajillo", description: "Kaffee mit einem Schuss Likör. Für alle, die es mit Schwung mögen." },
      agua: { title: "Wasser", description: "Frisches Quellwasser, ideal zur Erfrischung unter der Mittelmeersonne." },
      "agua-gas": { title: "Sprudelwasser", description: "Sprudelwasser in der Dose, erfrischend und prickelnd." },
      pepsi: { title: "Pepsi", description: "Das klassische Cola-Erlebnis. Kalt und vollmundig." },
      "pepsi-zero": { title: "Pepsi Zero", description: "Die ganze Intensität von Pepsi, ohne Zucker." },
      "schweppes-naranja": { title: "Schweppes Orange", description: "Klassische Schweppes Orange mit der typisch leicht bitteren Note." },
      "schweppes-limon": { title: "Schweppes Zitrone", description: "Schweppes Zitrone, prickelnd und zitrusfrisch. Perfekt bei Hitze." },
      "seven-up": { title: "Seven Up", description: "Limetten-Zitronen-Limonade, leicht und erfrischend." },
      "tonica-schweppes": { title: "Schweppes Tonic", description: "Das Referenz-Tonic, trocken und prickelnd. Pur oder mit Gin." },
      "aquarade-limon": { title: "Aquarade Zitrone", description: "Isotonisches Zitronengetränk zur Energieergänzung unter der Sonne." },
      "aquarade-naranja": { title: "Aquarade Orange", description: "Isotonisches Orangengetränk, erfrischend und belebend." },
      "lipton-limon": { title: "Lipton Zitrone", description: "Eistee mit Zitrone, leicht und fruchtig. Sommer in der Dose." },
      redbull: { title: "Red Bull", description: "Energydrink zum Auftanken ohne Pause." },
      zumos: { title: "Säfte", description: "Frische Fruchtsäfte, natürlich und ohne Zusätze." },
      "estrella-galicia": { title: "Estrella Galicia", description: "Das spanische Lager mit sanftem Charakter und cremigem Schaum. Der Liebling des Chiringo." },
      radler: { title: "Radler", description: "Bier mit natürlicher Zitrone, erfrischend und alkoholarm. Perfekt für die Mittagsstunde." },
      "cerveza-00": { title: "Bier 0,0", description: "Dieselbe Estrella, ohne Alkohol. Ganzer Geschmack, ohne die Wirkung." },
      "cerveza-sin-gluten": { title: "Glutenfreies Bier", description: "Glutenfreies Bier, damit niemand auf seinen Sommertrunk verzichten muss." },
      "estrella-galicia-lata": { title: "Estrella Galicia Dose", description: "Estrella Galicia in der Dose, eiskalt und genussbereit." },
      vermouth: { title: "Wermut", description: "Rot oder weiß. Das mediterrane Aperitif-Ritual, mit oder ohne Snacks." },
      combinados: { title: "Longdrinks", description: "Masters, Larios 12, Barceló, Brugal, Jonny Walker, Moscovscaya, Dyc und ähnliche." },
      "combinados-premium": { title: "Premium-Longdrinks", description: "Hendricks, Roku, Bulldog, Martin Millers, 1888, Zacapa, Black Label, Macallan 12 und ähnliche." },
      chupitos: { title: "Shots", description: "Shots in verschiedenen Geschmacksrichtungen. Der perfekte Abschluss eines schönen Abends." },
      "chupitos-premium": { title: "Premium-Shots", description: "Premium-Destillat als Shot. Denn besondere Momente verdienen das Beste." },
      licores: { title: "Liköre", description: "Baileys, Kräuterlikör und ähnliche." },
      "ceremonia-sauvignon-blanc": { title: "Ceremonia Sauvignon Blanc", description: "Bodega Vicente Gandía. Zitrus- und Tropenfrucht-Aromen, frisch mit sauberem Abgang." },
      "ramon-bilbao-verdejo": { title: "Ramon Bilbao Verdejo", description: "Verdejo aus Rueda mit fruchtigen Zitrusnoten, frisch und mit mineralischem Abgang." },
      "paco-lola-albarino": { title: "Paco & Lola Albariño", description: "Galizischer Albariño aus Rías Baixas, atlantisch, mineralisch und mit unverwechselbarer Salzigkeit." },
      "ceremonia-bobal-rose": { title: "Ceremonia Bobal Rosé", description: "Bodega Vicente Gandía. Bobal-Rosé mit Erdbeer- und Rotfruchtaromen, frisch und lebendig." },
      "ceremonia-cabernet-sauvignon": { title: "Ceremonia Cabernet Sauvignon", description: "Bodega Vicente Gandía. Strukturierter Rotwein mit reifer dunkler Frucht und würziger Note." },
      "ramon-bilbao-crianza-rioja": { title: "Ramón Bilbao Crianza Rioja", description: "Rioja Crianza mit mittlerem Körper, reifer roter Frucht und eleganter Holznote." },
      "ceramic-monastrell": { title: "Ceramic Monastrell. Vicente Gandía", description: "Monastrell aus der D.O. Utiel-Requena, kräftig, würzig und tief valencianisch." },
      "cava-patacona-brut": { title: "Cava Patacona Brut", description: "Valencianischer Brut-Cava, fein und prickelnd. Der Trinkspruch der Küste." },
      "cava-lola": { title: "Cava Lola", description: "Bodega Paco & Lola. Elegant und fruchtig, mit feinen Bläschen und langem Abgang." },
      "moet-chandon": { title: "Moet & Chandon", description: "Der bekannteste Champagner der Welt. Feine Bläschen, pure Eleganz und unverwechselbarer Geschmack." },
      "moet-chandon-rose": { title: "Moet & Chandon Rosé", description: "Frische rote Frucht- und Blütenaromen. Feiern Sie mit Stil." },
      "moet-chandon-ice": { title: "Moet & Chandon Ice", description: "Auf Eis serviert, kühn und unkonventionell. Der Champagner, der Regeln bricht." },
      "mojito-normal": { title: "Klassischer Mojito", description: "Rum, Limette, Minze, Zucker und Sodawasser. Der Cocktail des ewigen Sommers." },
      "mojito-sabores": { title: "Mojito mit Geschmack", description: "Melone, Erdbeere oder Maracuja." },
      "daikiri-frozen": { title: "Frozen Daiquiri", description: "Gefrorener Daiquiri, cremig, säuerlich und erfrischend. Direkt aus den Tropen." },
      "pina-colada": { title: "Piña Colada", description: "Rum, Kokosnusscreme und gemahlene Ananas. Augen schließen und den Strand spüren." },
      caipirinha: { title: "Caipirinha", description: "Cachaça, Limette und Zucker. Brasiliens Nationalcocktail, direkt und unverfälscht." },
      caipiroska: { title: "Caipiroska", description: "Die Vodka-Version der Caipirinha, milder und genauso erfrischend." },
      "granizado-limon": { title: "Zitronen-Slush", description: "Natürlicher Zitronen-Slush, eiskalt mit der richtigen Säure.", note: "3 € Aufpreis mit Alkohol." },
      "smoothie-mango": { title: "Mango-Smoothie", description: "Gemahlene Mango mit Eis, cremig und tropisch.", note: "3 € Aufpreis mit Alkohol." },
      "smoothie-coco-pina": { title: "Kokos-Ananas-Smoothie", description: "Frische Kokosnuss und Ananas, eine unwiderstehliche Tropenkombination.", note: "3 € Aufpreis mit Alkohol." },
      "smoothie-yogur-melon": { title: "Joghurt-Melonen-Smoothie", description: "Cremiger Joghurt mit frischer Melone, sanft und erfrischend.", note: "3 € Aufpreis mit Alkohol." },
      "frappe-cafe": { title: "Kaffee-Frappé", description: "Mit Eis gemischter Kaffee, intensiv und zugleich erfrischend.", note: "3 € Aufpreis mit Alkohol." },
      "frappe-chocolate": { title: "Schokoladen-Frappé", description: "Kalte Schokolade mit Eis gemischt. Ein Genuss zu jeder Tageszeit.", note: "3 € Aufpreis mit Alkohol." },
      "frappe-vainilla": { title: "Vanille-Frappé", description: "Sanft und cremig mit Vanillearoma, kalt und delikat.", note: "3 € Aufpreis mit Alkohol." },
      "tinto-verano-vaso": { title: "Tinto de verano (Glas)", description: "Rotwein mit Soda oder Zitrone. Der zeitlose spanische Sommerklassiker, im Glas." },
      "tinto-verano-jarra": { title: "Tinto de verano (Krug)", description: "Ein Krug Tinto de Verano zum Teilen. Frisch, leicht und perfekt für den Strandkiosk." },
      "sangria-vino-blanco": { title: "Weißwein-Sangria", description: "Krug Weißwein-Sangria mit frischem Saisonobst." },
      "sangria-vino-tinto": { title: "Rotwein-Sangria", description: "Krug Rotwein-Sangria mit Früchten, Gewürzen und einer Prise Zitrus." },
      "sangria-cava": { title: "Cava-Sangria", description: "Sangria mit Cava. Prickelnd, elegant und perfekt zum Feiern." },
      "agua-valencia": { title: "Agua de Valencia", description: "Cava, Orangensaft, Vodka und Gin. Der valencianische Cocktail schlechthin." }
    }
  }
};

/* ===================================================================== */
/* ---------- Referencias DOM ---------- */
const topTabs = document.querySelector("#topTabs");
const bottomTabs = document.querySelector("#bottomTabs");
const languageSwitcher = document.querySelector("#languageSwitcher");
const menuLayout = document.querySelector(".menu-layout");
const menuList = document.querySelector("#menuList");
const dishPreview = document.querySelector("#dishPreview");
const imageFrame = document.querySelector("#imageFrame");
const dishImage = document.querySelector("#dishImage");
const dishCategory = document.querySelector("#dishCategory");
const dishTitle = document.querySelector("#dishTitle");
const dishPrice = document.querySelector("#dishPrice");
const dishDescription = document.querySelector("#dishDescription");
const dishNote = document.querySelector("#dishNote");
const photoDisclaimer = document.querySelector("#photoDisclaimer");
const dishStatus = document.querySelector("#dishStatus");
const imageLightbox = document.querySelector("#imageLightbox");
const imageLightboxImg = document.querySelector("#imageLightboxImg");
const imageLightboxClose = document.querySelector("#imageLightboxClose");
const allergenModal = document.querySelector("#allergenModal");
const allergenModalClose = document.querySelector("#allergenModalClose");
const allergenEyebrow = document.querySelector(".allergen-modal-eyebrow");
const allergenTitle = document.querySelector("#allergenTitle");
const allergenMessage = document.querySelector(".allergen-modal-message");
const allergenModalContent = document.querySelector("#allergenModalContent");

const languageNames = { es: "Español", en: "English", de: "Deutsch" };

let activeSectionId = "comidas";
let currentLanguage = getSavedLanguage();
let lastFocusedElement = null;
let ignoreNextImageClick = false;
let imageDragState = null;
let activeDragReturn = null;
let previewUpdateToken = 0;

const imagePreloadCache = new Map();

/* ---------- Idioma ---------- */
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("lussoLanguage");
    return translations[saved] ? saved : "es";
  } catch (error) {
    return "es";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("lussoLanguage", language);
  } catch (error) {
    /* Almacenamiento no disponible en algunos modos privados. */
  }
}

function getCopy() {
  return translations[currentLanguage] || translations.es;
}

function getUiCopy() {
  return getCopy().ui;
}

function getSectionText(section) {
  return getCopy().sections[section.id] || translations.es.sections[section.id] || { category: section.id, shortLabel: section.id };
}

function getGroupText(group) {
  return getCopy().groups[group.id] || translations.es.groups[group.id] || { category: group.id, shortLabel: group.id };
}

function getItemText(item) {
  const text = getCopy().items[item.id] || translations.es.items[item.id] || {};
  return {
    title: text.title || item.id,
    description: text.description || "",
    note: text.note || ""
  };
}

function getItemPrice(item) {
  return item.price;
}

function getAllergenLabels() {
  return ALLERGEN_LABELS[currentLanguage] || ALLERGEN_LABELS.es;
}

/* ---------- Helpers ---------- */
function formatProductCount(count) {
  const ui = getUiCopy();
  const label = count === 1 ? ui.productSingular : ui.productPlural;
  return `${count} ${label}`;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getScrollBehavior() {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function scrollElementNearTop(element, offset = 12) {
  if (!element) return;
  const top = Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset);
  window.scrollTo({ top, behavior: getScrollBehavior() });
}

function scheduleScrollToMainPanel() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollElementNearTop(menuLayout, isMobileLayout() ? 10 : 24);
    });
  });
}

function scheduleScrollToGroupStart(groupBlock) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const previewOffset = isMobileLayout() && !dishPreview.classList.contains("is-hidden")
        ? dishPreview.getBoundingClientRect().height + 14
        : 18;
      scrollElementNearTop(groupBlock, previewOffset);
    });
  });
}

function getActiveSection() {
  return menuSections.find((section) => section.id === activeSectionId) || menuSections[0];
}

function getSectionItemCount(section) {
  return section.groups.reduce((total, group) => total + group.items.length, 0);
}

function getFirstSectionDish(section) {
  const firstGroup = section.groups.find((group) => group.items.length > 0);
  if (!firstGroup) return null;
  return { dish: firstGroup.items[0], group: firstGroup };
}

function getAllergenInfo(item) {
  return allergenData[item.id] || null;
}

/* ---------- Tabs ---------- */
function createTab(section, placement) {
  const button = document.createElement("button");
  const sectionText = getSectionText(section);
  button.className = placement === "bottom" ? "tab-button category-chip" : "tab-button";
  button.type = "button";
  button.dataset.category = section.id;
  button.setAttribute("aria-controls", "menuList");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${getUiCopy().viewSection} ${sectionText.category}`);

  if (placement === "bottom") {
    const label = document.createElement("span");
    label.className = "category-label";
    label.textContent = sectionText.shortLabel;
    button.append(label);
  } else {
    button.textContent = sectionText.category;
  }

  button.addEventListener("click", () => setActiveSection(section.id));
  return button;
}

function renderTabs() {
  const topFragment = document.createDocumentFragment();
  const bottomFragment = document.createDocumentFragment();
  topTabs.textContent = "";
  bottomTabs.textContent = "";
  menuSections.forEach((section) => {
    topFragment.append(createTab(section, "top"));
    bottomFragment.append(createTab(section, "bottom"));
  });
  topTabs.append(topFragment);
  bottomTabs.append(bottomFragment);
}

function updateActiveTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isSelected = button.dataset.category === activeSectionId;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setActiveSection(sectionId) {
  if (sectionId === activeSectionId) return;
  activeSectionId = sectionId;
  renderActiveSection();
  updateActiveTabs();
  scheduleScrollToMainPanel();
}

/* ---------- Botón de producto + alérgenos ---------- */
function createAllergenButton(item, title) {
  const ui = getUiCopy();
  const button = document.createElement("button");
  const icon = document.createElement("img");
  const label = document.createElement("span");
  button.className = "allergen-trigger";
  button.type = "button";
  button.setAttribute("aria-label", `${ui.allergenButtonAria} ${title}`);
  icon.src = "assets/ui/icons/precaucion1.webp";
  icon.alt = "";
  icon.loading = "lazy";
  icon.decoding = "async";
  icon.setAttribute("aria-hidden", "true");
  label.textContent = ui.allergenButton;
  button.append(icon, label);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openAllergenModal(item, button);
  });
  return button;
}

function createDishButton(item, sectionName) {
  const card = document.createElement("article");
  const button = document.createElement("button");
  const itemText = getItemText(item);
  const itemPrice = getItemPrice(item);
  const allergens = getAllergenInfo(item);

  card.className = "dish";
  card.dataset.dish = item.id;
  card.classList.toggle("has-allergens", Boolean(allergens));

  if (item.selectable === false) {
    const text = document.createElement("span");
    const title = document.createElement("strong");
    const description = document.createElement("small");
    const price = document.createElement("b");

    card.classList.add("is-static", "dish--static");
    title.textContent = itemText.title;
    description.textContent = itemText.description;
    price.textContent = itemPrice;
    text.append(title, description);

    if (itemText.note) {
      const note = document.createElement("em");
      note.className = "dish-note-inline";
      note.textContent = itemText.note;
      text.append(note);
    }

    card.append(text, price);
    return card;
  }

  button.className = "dish-select";
  button.type = "button";
  button.setAttribute("aria-controls", "dishPreview");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${itemText.title}, ${sectionName}, ${itemPrice}`);

  const text = document.createElement("span");
  const title = document.createElement("strong");
  const description = document.createElement("small");
  const price = document.createElement("b");

  title.textContent = itemText.title;
  description.textContent = itemText.description;
  price.textContent = itemPrice;
  text.append(title, description);

  if (itemText.note) {
    const note = document.createElement("em");
    note.className = "dish-note-inline";
    note.textContent = itemText.note;
    text.append(note);
  }

  button.append(text, price);
  button.addEventListener("click", () => showDish(item, sectionName));
  card.append(button);
  if (allergens) {
    card.append(createAllergenButton(item, itemText.title));
  }
  return card;
}

/* ---------- Grupos plegables (Comida y Bebidas) ---------- */
function createFoodGroup(group, isExpanded) {
  const groupBlock = document.createElement("section");
  const toggle = document.createElement("button");
  const titleWrap = document.createElement("span");
  const label = document.createElement("span");
  const title = document.createElement("strong");
  const count = document.createElement("small");
  const indicator = document.createElement("span");
  const panel = document.createElement("div");
  const groupText = getGroupText(group);
  const lineartSrc = groupLinearts[group.id];

  groupBlock.className = "food-group";
  groupBlock.dataset.group = group.id;
  toggle.className = "food-group-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-controls", `food-group-${group.id}`);
  toggle.setAttribute("aria-expanded", String(isExpanded));

  titleWrap.className = "food-group-title-wrap";
  label.className = "food-group-label";
  title.textContent = groupText.category;
  count.textContent = formatProductCount(group.items.length);
  label.append(title, count);

  if (lineartSrc) {
    const lineart = document.createElement("img");
    lineart.className = "food-group-lineart";
    if (group.id === "cavas-espumosos") {
      lineart.classList.add("food-group-lineart--cavas");
    }
    lineart.src = lineartSrc;
    lineart.alt = "";
    lineart.loading = "eager";
    lineart.decoding = "async";
    lineart.setAttribute("aria-hidden", "true");
    titleWrap.append(lineart);
  }

  titleWrap.append(label);
  indicator.className = "food-group-indicator";
  indicator.setAttribute("aria-hidden", "true");
  indicator.textContent = isExpanded ? "−" : "+";

  panel.className = "food-group-panel";
  panel.id = `food-group-${group.id}`;
  panel.hidden = !isExpanded;

  if (isExpanded) groupBlock.classList.add("is-open");

  group.items.forEach((item) => {
    panel.append(createDishButton(item, groupText.category));
  });

  toggle.append(titleWrap, indicator);
  toggle.addEventListener("click", () => toggleFoodGroup(groupBlock, panel, toggle, indicator, group));
  groupBlock.append(toggle, panel);
  return groupBlock;
}

function toggleFoodGroup(groupBlock, panel, toggle, indicator, group) {
  const shouldOpen = !groupBlock.classList.contains("is-open");

  document.querySelectorAll(".food-group.is-open").forEach((openGroup) => {
    if (openGroup === groupBlock) return;
    const openPanel = openGroup.querySelector(".food-group-panel");
    const openToggle = openGroup.querySelector(".food-group-toggle");
    const openIndicator = openGroup.querySelector(".food-group-indicator");
    openGroup.classList.remove("is-open");
    openPanel.hidden = true;
    openToggle.setAttribute("aria-expanded", "false");
    openIndicator.textContent = "+";
  });

  groupBlock.classList.toggle("is-open", shouldOpen);
  panel.hidden = !shouldOpen;
  toggle.setAttribute("aria-expanded", String(shouldOpen));
  indicator.textContent = shouldOpen ? "−" : "+";

  if (shouldOpen && group.items[0]) {
    const groupText = getGroupText(group);
    dishPreview.classList.remove("is-hidden");
    menuLayout.classList.remove("is-empty-section");
    showDish(group.items[0], groupText.category);
    scheduleScrollToGroupStart(groupBlock);
  }
}

function createEmptySection() {
  const ui = getUiCopy();
  const emptyState = document.createElement("div");
  const title = document.createElement("strong");
  const copy = document.createElement("p");
  emptyState.className = "empty-section";
  title.textContent = ui.emptyTitle;
  copy.textContent = ui.emptyCopy;
  emptyState.append(title, copy);
  return emptyState;
}

/* ---------- Render de la sección activa ---------- */
function renderActiveSection() {
  const section = getActiveSection();
  const sectionText = getSectionText(section);
  const ui = getUiCopy();
  const sectionBlock = document.createElement("div");
  const heading = document.createElement("div");
  const eyebrow = document.createElement("p");
  const title = document.createElement("h2");
  const count = document.createElement("span");
  const itemCount = getSectionItemCount(section);

  menuList.textContent = "";
  sectionBlock.className = "menu-section active-section";
  heading.className = "section-heading";
  eyebrow.className = "section-eyebrow";
  title.id = "activeCategoryTitle";
  count.className = "section-count";

  eyebrow.textContent = ui.sectionEyebrow;
  title.textContent = sectionText.category;
  count.textContent = itemCount > 0 ? formatProductCount(itemCount) : ui.pending;

  heading.append(eyebrow, title, count);
  sectionBlock.append(heading);

  if (itemCount === 0) {
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    sectionBlock.append(createEmptySection());
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    return;
  }

  if (section.id === "comidas" || section.id === "bebidas") {
    const firstDish = getFirstSectionDish(section);
    section.groups.forEach((group, index) => {
      sectionBlock.append(createFoodGroup(group, index === 0));
    });
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    dishPreview.classList.remove("is-hidden");
    menuLayout.classList.remove("is-empty-section");
    if (firstDish) showDish(firstDish.dish, getGroupText(firstDish.group).category);
    return;
  }

  section.groups.forEach((group) => {
    group.items.forEach((item) => {
      sectionBlock.append(createDishButton(item, sectionText.category));
    });
  });

  menuList.append(sectionBlock);
  menuList.setAttribute("aria-labelledby", "activeCategoryTitle");

  const firstDish = getFirstSectionDish(section);
  dishPreview.classList.remove("is-hidden");
  menuLayout.classList.remove("is-empty-section");
  if (firstDish) showDish(firstDish.dish, sectionText.category);
}

/* ---------- Preview de producto ---------- */
function preloadImage(src) {
  if (imagePreloadCache.has(src)) return imagePreloadCache.get(src);
  const preload = new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).then(() => resolve(src));
        return;
      }
      resolve(src);
    };
    image.onerror = reject;
    image.src = src;
  });
  imagePreloadCache.set(src, preload);
  preload.catch(() => imagePreloadCache.delete(src));
  return preload;
}

async function showDish(selectedDish, sectionName) {
  const updateToken = ++previewUpdateToken;
  const itemText = getItemText(selectedDish);
  const ui = getUiCopy();

  resetImageDrag();
  dishPreview.classList.add("is-changing");

  document.querySelectorAll(".dish").forEach((card) => {
    const isSelected = card.dataset.dish === selectedDish.id;
    const selectButton = card.querySelector(".dish-select");
    card.classList.toggle("is-active", isSelected);
    if (selectButton?.tagName === "BUTTON") {
      selectButton.setAttribute("aria-pressed", String(isSelected));
    }
  });

  try {
    await preloadImage(selectedDish.image);
  } catch (error) {
    console.warn("No se pudo cargar la imagen:", selectedDish.image);
  }

  if (updateToken !== previewUpdateToken) return;

  dishImage.loading = "lazy";
  dishImage.decoding = "async";
  dishImage.src = selectedDish.image;
  dishImage.alt = itemText.title;
  dishCategory.textContent = sectionName;
  dishTitle.textContent = itemText.title;
  dishPreview.dataset.titleSize = itemText.title.length > 18 ? "long" : "short";
  dishPrice.textContent = getItemPrice(selectedDish);
  dishDescription.textContent = itemText.description;
  photoDisclaimer.classList.toggle("is-hidden", !selectedDish.image);
  dishStatus.textContent = `${ui.dishSelected}: ${itemText.title}.`;

  if (itemText.note) {
    dishNote.textContent = itemText.note;
    dishNote.classList.remove("is-hidden");
  } else {
    dishNote.textContent = "";
    dishNote.classList.add("is-hidden");
  }

  requestAnimationFrame(() => {
    if (updateToken === previewUpdateToken) {
      dishPreview.classList.remove("is-changing");
    }
  });
}

/* ---------- Modal de alérgenos ---------- */
function createAllergenGroup(label, allergenKeys, className) {
  if (!allergenKeys?.length) return null;
  const labels = getAllergenLabels();
  const group = document.createElement("div");
  const title = document.createElement("strong");
  const list = document.createElement("div");
  group.className = `allergen-group ${className}`;
  title.textContent = label;
  list.className = "allergen-chip-list";
  allergenKeys.forEach((key) => {
    const chip = document.createElement("span");
    chip.textContent = labels[key] || key;
    list.append(chip);
  });
  group.append(title, list);
  return group;
}

function openAllergenModal(item, sourceElement) {
  const ui = getUiCopy();
  const itemText = getItemText(item);
  const info = getAllergenInfo(item);

  lastFocusedElement = sourceElement || document.activeElement;
  allergenTitle.textContent = itemText.title;
  allergenModalContent.textContent = "";

  if (!info) {
    const note = document.createElement("p");
    note.className = "allergen-pending";
    note.textContent = ui.allergenPending;
    allergenModalContent.append(note);
  } else {
    const contains = createAllergenGroup(ui.allergenContains, info.contains, "contains");
    const traces = createAllergenGroup(ui.allergenTraces, info.traces, "traces");
    const card = document.createElement("article");
    card.className = "allergen-entry";
    if (contains) card.append(contains);
    if (traces) card.append(traces);
    if (!contains && !traces) {
      const note = document.createElement("p");
      note.className = "allergen-pending";
      note.textContent = ui.allergenPending;
      card.append(note);
    }
    allergenModalContent.append(card);
    if (info.pending) {
      const extra = document.createElement("p");
      extra.className = "allergen-pending";
      extra.textContent = ui.allergenPending;
      allergenModalContent.append(extra);
    }
  }

  allergenModal.classList.add("is-open");
  allergenModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("allergen-open");
  allergenModalClose.focus({ preventScroll: true });
}

function closeAllergenModal() {
  allergenModal.classList.remove("is-open");
  allergenModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("allergen-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

/* ---------- Lightbox de imagen ---------- */
function openImageLightbox() {
  lastFocusedElement = document.activeElement;
  imageLightboxImg.src = dishImage.currentSrc || dishImage.src;
  imageLightboxImg.alt = dishImage.alt;
  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  imageLightboxClose.focus({ preventScroll: true });
}

function closeImageLightbox() {
  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

/* ---------- Arrastre "liquid" de la imagen (portado de la referencia) ---------- */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetImageDrag() {
  if (imageDragState?.preview) imageDragState.preview.remove();
  clearActiveDragReturn();
  imageFrame.classList.remove("is-drag-source", "is-liquid-settle");
  imageDragState = null;
}

function clearActiveDragReturn({ settle = false } = {}) {
  const runningReturn = activeDragReturn;
  if (!runningReturn) return false;
  if (runningReturn.animation) runningReturn.animation.cancel();
  if (runningReturn.preview) runningReturn.preview.remove();
  activeDragReturn = null;
  imageFrame.classList.remove("is-drag-source");
  if (settle) runImageFrameSettle();
  return true;
}

function beginImageDrag(event) {
  if (!event.isPrimary || imageLightbox.classList.contains("is-open")) return;
  imageFrame.classList.remove("is-liquid-settle");
  imageDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    rect: imageFrame.getBoundingClientRect(),
    preview: null,
    isDragging: false,
    scale: 1
  };
  imageFrame.setPointerCapture(event.pointerId);
}

function updateImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  const deltaX = event.clientX - imageDragState.startX;
  const deltaY = event.clientY - imageDragState.startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  if (distance < 3) return;
  event.preventDefault();
  imageDragState.isDragging = true;
  if (!imageDragState.preview) {
    imageDragState.preview = createImageDragPreview(imageDragState.rect);
    imageFrame.classList.add("is-drag-source");
  }
  updateImageDragPreview(imageDragState, deltaX, deltaY, distance);
}

function finishImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  const wasDragging = imageDragState.isDragging;
  const dragState = imageDragState;
  if (imageFrame.hasPointerCapture(event.pointerId)) {
    imageFrame.releasePointerCapture(event.pointerId);
  }
  imageDragState = null;
  if (wasDragging) {
    ignoreNextImageClick = true;
    window.setTimeout(() => { ignoreNextImageClick = false; }, 450);
    animateImageDragBack(dragState);
  }
}

function handleImageFrameClick(event) {
  if (ignoreNextImageClick || imageDragState || imageLightbox.classList.contains("is-open")) {
    event.preventDefault();
    return;
  }
  event.preventDefault();
  openImageLightbox();
}

function cancelImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  resetImageDrag();
}

function createImageDragPreview(rect) {
  const preview = document.createElement("img");
  preview.className = "image-drag-preview";
  preview.src = dishImage.currentSrc || dishImage.src;
  preview.alt = dishImage.alt;
  preview.decoding = "async";
  preview.style.width = `${rect.width}px`;
  preview.style.height = `${rect.height}px`;
  preview.style.left = `${rect.left}px`;
  preview.style.top = `${rect.top}px`;
  document.body.append(preview);
  return preview;
}

function updateImageDragPreview(state, deltaX, deltaY, distance) {
  const rect = state.rect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.55;
  const progress = Math.min(distance / threshold, 1);
  const eased = progress * progress * (3 - 2 * progress);
  const finalRect = getImageDragFinalRect(rect, viewportWidth, viewportHeight);
  const currentLeft = rect.left + (finalRect.left - rect.left) * eased;
  const currentTop = rect.top + (finalRect.top - rect.top) * eased;
  const currentWidth = rect.width + (finalRect.width - rect.width) * eased;
  const currentHeight = rect.height + (finalRect.height - rect.height) * eased;
  state.left = currentLeft;
  state.top = currentTop;
  state.width = currentWidth;
  state.height = currentHeight;
  state.progress = progress;
  state.preview.style.left = `${currentLeft}px`;
  state.preview.style.top = `${currentTop}px`;
  state.preview.style.width = `${currentWidth}px`;
  state.preview.style.height = `${currentHeight}px`;
}

function getImageDragFinalRect(rect, viewportWidth, viewportHeight) {
  const maxWidth = viewportWidth * 0.9;
  const maxHeight = viewportHeight * (viewportWidth <= 820 ? 0.72 : 0.76);
  const ratio = rect.height / rect.width;
  let width = Math.min(maxWidth, rect.width * (viewportWidth <= 820 ? 4.1 : 2.35));
  let height = width * ratio;
  if (height > maxHeight) {
    height = maxHeight;
    width = height / ratio;
  }
  const left = (viewportWidth - width) / 2;
  const top = clamp((viewportHeight - height) / 2, 20, Math.max(20, viewportHeight - height - 20));
  return { left, top, width, height };
}

function animateImageDragBack(state) {
  const preview = state.preview;
  const rect = state.rect;
  if (!preview) {
    imageFrame.classList.remove("is-drag-source");
    return;
  }
  const fromLeft = state.left ?? rect.left;
  const fromTop = state.top ?? rect.top;
  const fromWidth = state.width ?? rect.width;
  const fromHeight = state.height ?? rect.height;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || typeof preview.animate !== "function") {
    imageFrame.classList.remove("is-drag-source");
    window.setTimeout(() => preview.remove(), 180);
    return;
  }
  imageFrame.classList.remove("is-drag-source");
  const returnAnimation = preview.animate(
    [
      { left: `${fromLeft}px`, top: `${fromTop}px`, width: `${fromWidth}px`, height: `${fromHeight}px`, transform: "scale(1, 1)", opacity: 1, filter: "saturate(1)", offset: 0 },
      { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, transform: "scale(1, 1)", opacity: 1, filter: "saturate(1)", offset: 1 }
    ],
    { duration: 400, easing: "cubic-bezier(0.25, 1, 0.5, 1)", fill: "forwards" }
  );
  activeDragReturn = { animation: returnAnimation, preview };
  returnAnimation.onfinish = () => {
    if (activeDragReturn?.preview !== preview) return;
    activeDragReturn = null;
    preview.remove();
    runImageFrameSettle();
  };
  returnAnimation.oncancel = () => {
    if (activeDragReturn?.preview === preview) activeDragReturn = null;
  };
}

function runImageFrameSettle() {
  imageFrame.classList.remove("is-liquid-settle");
  void imageFrame.offsetWidth;
  imageFrame.classList.add("is-liquid-settle");
}

/* ---------- Texto estático según idioma ---------- */
function updateStaticText() {
  const ui = getUiCopy();
  document.documentElement.lang = currentLanguage;
  document.title = ui.documentTitle;
  languageSwitcher.setAttribute("aria-label", ui.languageLabel);
  topTabs.setAttribute("aria-label", ui.topTabsLabel);
  bottomTabs.setAttribute("aria-label", ui.bottomTabsLabel);
  menuLayout.setAttribute("aria-label", ui.menuLayoutLabel);
  menuList.setAttribute("aria-label", ui.menuListLabel);
  imageFrame.setAttribute("aria-label", ui.imageFrameLabel);
  imageLightbox.setAttribute("aria-label", ui.lightboxLabel);
  imageLightboxClose.setAttribute("aria-label", ui.closeLightboxLabel);
  photoDisclaimer.textContent = ui.photoDisclaimer;
  if (allergenEyebrow) allergenEyebrow.textContent = ui.allergenEyebrow;
  if (allergenMessage) allergenMessage.textContent = ui.allergenMessage;
  allergenTitle.textContent = ui.allergenTitle;

  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    const languageName = languageNames[button.dataset.lang] || button.dataset.lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", `${ui.languageLabel}: ${languageName}`);
  });
}

function setLanguage(language) {
  if (!translations[language] || language === currentLanguage) return;
  currentLanguage = language;
  saveLanguage(language);
  updateStaticText();
  renderTabs();
  renderActiveSection();
  updateActiveTabs();
}

function setupLanguageSwitcher() {
  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

/* ---------- Eventos globales ---------- */
imageFrame.addEventListener("animationend", (event) => {
  if (event.animationName === "imageLiquidSettle") {
    imageFrame.classList.remove("is-liquid-settle");
  }
});

window.addEventListener("scroll", () => { clearActiveDragReturn({ settle: true }); }, { passive: true });

imageFrame.addEventListener("pointerdown", beginImageDrag);
imageFrame.addEventListener("pointermove", updateImageDrag);
imageFrame.addEventListener("pointerup", finishImageDrag);
imageFrame.addEventListener("pointercancel", cancelImageDrag);
imageFrame.addEventListener("click", handleImageFrameClick);

imageFrame.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageLightbox();
  }
});

imageLightboxClose.addEventListener("click", closeImageLightbox);
imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) closeImageLightbox();
});

allergenModalClose.addEventListener("click", closeAllergenModal);
allergenModal.addEventListener("click", (event) => {
  if (event.target === allergenModal) closeAllergenModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  }
  if (event.key === "Escape" && allergenModal.classList.contains("is-open")) {
    closeAllergenModal();
  }
});

/* ---------- Arranque ---------- */
setupLanguageSwitcher();
updateStaticText();
renderTabs();
renderActiveSection();
updateActiveTabs();

/* ---------- Portada / Landing Screen ---------- */
(function () {
  const landing  = document.getElementById("landing-screen");
  const btn      = document.getElementById("landingBtn");
  const shell    = document.querySelector(".menu-shell");
  const bottomNav = document.getElementById("bottomTabs");
  const root = document.documentElement;
  const body = document.body;

  function lockLandingScroll() {
    root.classList.add("landing-active");
    body.classList.add("landing-active");
    window.scrollTo(0, 0);
  }

  function unlockLandingScroll() {
    root.classList.remove("landing-active");
    body.classList.remove("landing-active");
  }

  if (!landing || !btn) {
    unlockLandingScroll();
    return;
  }

  lockLandingScroll();

  /* Mientras la portada es visible, la carta no es alcanzable
     por teclado ni lectores de pantalla. */
  if (shell)     shell.setAttribute("inert", "");
  if (bottomNav) bottomNav.setAttribute("inert", "");

  btn.addEventListener("click", function () {
    /* 1. Libera la carta */
    if (shell)     shell.removeAttribute("inert");
    if (bottomNav) bottomNav.removeAttribute("inert");
    unlockLandingScroll();

    /* 2. Fade-out de la portada */
    landing.classList.add("is-exiting");

    /* 3. Tras la transición, elimina la portada del flujo */
    let landingClosed = false;

    function done(event) {
      if (event && event.target !== landing) return;
      if (landingClosed) return;
      landingClosed = true;
      landing.classList.add("is-gone");
      landing.removeEventListener("transitionend", done);
    }

    landing.addEventListener("transitionend", done);
    window.setTimeout(done, 900);
  });
}());
