export const WHATSAPP_NUMBER = "50497558568";
export const WHATSAPP_DISPLAY = "9755-8568";

export const images = {
  hero: "/images/hero-salsa-tomate.png",
  heroMermeladas: "/images/hero-mermeladas.png",
  mermeladaSpoon: "/images/mermelada-naranja-maracuya1.jpeg",
  mermeladasSizes: "/images/mermeladas-presentaciones.png",
  vegetales: "/images/conservas-vegetales.jpeg",
  antipasto: "/images/antipasto-bruschetta.png",
} as const;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Mayoristas", href: "#mayoristas" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const heroBadges = [
  "100% Natural",
  "Sin conservantes ni colorantes",
  "Bajas calorías",
] as const;

export const valueBadges = [
  {
    title: "100% natural",
    description:
      "Productos elaborados con ingredientes frescos y cuidadosamente seleccionados.",
    icon: "leaf",
  },
  {
    title: "Sin conservantes",
    description:
      "Sin aditivos que alteren la esencia auténtica de frutas y vegetales.",
    icon: "shield",
  },
  {
    title: "Sin colorantes",
    description:
      "Colores y sabores que provienen directamente de la naturaleza.",
    icon: "palette",
  },
  {
    title: "Sin sabores artificiales",
    description: "Cada bocado conserva el perfil real de sus ingredientes.",
    icon: "sparkle",
  },
  {
    title: "Más fruta, más sabor",
    description: "+ Más Fruta + Más Sabor en cada preparación artesanal.",
    icon: "fruit",
  },
  {
    title: "Toque artesanal",
    description:
      "Preparaciones hechas con cuidado para lograr sabores frescos, equilibrados y genuinos.",
    icon: "hand",
  },
] as const;

export const categories = [
  {
    id: "mermeladas",
    title: "Mermeladas y Jaleas Bajas en Calorías",
    description:
      "Mermeladas y jaleas artesanales con sabores frutales, frescos y equilibrados.",
    image: images.mermeladaSpoon,
    href: "#mermeladas",
  },
  {
    id: "vegetales",
    title: "Conservas de Vegetales",
    description:
      "Pickles artesanales con combinaciones de vegetales y opciones picantes.",
    image: images.vegetales,
    href: "#vegetales",
  },
  {
    id: "tomate",
    title: "Conservas de Tomate",
    description:
      "Salsas y antipastos listos para acompañar tus comidas con sabor natural.",
    image: images.antipasto,
    href: "#tomate",
  },
] as const;

export const mermeladaFlavors = [
  {
    name: "Piña",
    image: "/images/mermelada-pina.png",
    alt: "Mermelada de piña Santiso bajas en calorías",
  },
  {
    name: "Piña Mango",
    image: "/images/mermelada-pina-mango.png",
    alt: "Mermelada mango piña Santiso bajas en calorías",
  },
  {
    name: "Piña-Naranja",
    image: "/images/mermelada-pina-naranja.png",
    alt: "Mermelada naranja piña Santiso bajas en calorías",
  },
  {
    name: "Piña-Maracuyá",
    image: "/images/mermelada-pina-maracuya.png",
    alt: "Mermelada piña maracuyá Santiso bajas en calorías",
  },
  {
    name: "Jalea de Naranja",
    image: "/images/mermelada-naranja-maracuya.png",
    alt: "Jalea de naranja Santiso",
  },
  {
    name: "Naranja-Maracuyá",
    image: "/images/mermelada-naranja-maracuya.png",
    alt: "Mermelada naranja maracuyá Santiso bajas en calorías",
  },
  {
    name: "Cítricos",
    image: "/images/mermelada-pina-naranja.png",
    alt: "Mermelada cítricos Santiso bajas en calorías",
  },
  {
    name: "Fresa-Arándanos",
    image: "/images/mermelada-fresa-arandanos.png",
    alt: "Mermelada fresa arándanos Santiso bajas en calorías",
  },
] as const;

export type MermeladaFlavor = (typeof mermeladaFlavors)[number];

export const mermeladaPresentations = [
  {
    group: "Frutas tropicales",
    note: "Piña, Piña Mango, Piña-Naranja, Piña-Maracuyá, Jalea de Naranja, Naranja-Maracuyá, Cítricos",
    sizes: ["Tarro de 9 oz", "Tarro de 5 oz", "Tarro de 2 oz"],
  },
  {
    group: "Fresa-Arándanos",
    note: "Sabor premium con frutos rojos seleccionados",
    sizes: ["Tarro de 9 oz", "Tarro de 5 oz", "Tarro de 3 oz"],
  },
] as const;

export const vegetalesProducts = [
  "Pickles mixtos picante suave",
  "Pickles mixtos muy picantes",
  "Cebolla-Zanahoria",
  "Cebolla-Zanahoria picante suave",
] as const;

export const vegetalesPresentations = [
  { product: "Pickles mixtos", presentation: "Tarro de 16 oz" },
  { product: "Zanahoria y cebolla", presentation: "Tarro de 16 oz" },
] as const;

export const pricingNote =
  "Los precios varían según la cantidad. Escríbenos por WhatsApp para cotizar tu pedido." as const;

export const tomateProducts = [
  {
    name: "Salsa para Pastas",
    description: "Lista para usarse · Puro tomate",
    sizes: ["Tarro de 25 oz"],
    badge: "Lista para usarse",
  },
  {
    name: "Salsa Criolla",
    description: "Sabor casero y equilibrado para acompañar tus platillos",
    sizes: ["Tarro de 16 oz"],
  },
  {
    name: "Antipasto Tomate-Zanahoria",
    description: "Tomate y zanahoria seleccionados en preparación artesanal",
    sizes: ["Tarro de 25 oz", "Tarro de 15 oz"],
  },
] as const;

export const wholesaleNotes = [
  "Precios mayoristas",
  "ISV incluido",
  "Cantidad mínima: 6 unidades",
  "No incluye gastos de envío",
] as const;

export const benefits = [
  {
    title: "Ingredientes protagonistas",
    description:
      "Las frutas, verduras y especias conservan su esencia fresca y real.",
  },
  {
    title: "Sin excesos",
    description:
      "Sabores equilibrados, sin ingredientes artificiales que opaquen lo natural.",
  },
  {
    title: "Calidad artesanal",
    description:
      "Cada preparación se trabaja cuidadosamente para lograr un resultado genuino.",
  },
  {
    title: "Una experiencia diferente",
    description:
      "Una alternativa fresca y auténtica frente a las opciones tradicionales del mercado.",
  },
] as const;

export const orderTypes = [
  "Pedido personal",
  "Compra al por mayor",
  "Información de productos",
  "Otro",
] as const;
