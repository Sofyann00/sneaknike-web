import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Nike React Infinity Run Flyknit",
    description: "Premium running shoes with responsive Boost cushioning",
    price: 3299000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    category: "Running",
  },
  {
    id: 2,
    name: "Nike React Miler",
    description: "Elite racing shoes for maximum performance",
    price: 3899000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
    category: "Running",
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus 37",
    description: "Retro basketball-inspired casual shoes",
    price: 1799000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
    category: "Lifestyle",
  },
  {
    id: 4,
    name: "Nike Joyride Run Flyknit",
    description: "Versatile daily training shoes with Boost cushioning",
    price: 2299000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
    category: "Running",
  },
  {
    id: 5,
    name: "Nike Mercurial Vapor 13 Elite FG",
    description: "Timeless suede sneakers with vintage appeal",
    price: 1699000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
    category: "Lifestyle",
  },
  {
    id: 6,
    name: "Nike Phantom Vision Elite Dynamic Fit FG",
    description: "Classic tennis-inspired casual sneakers",
    price: 1599000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
    category: "Lifestyle",
  },
  {
    id: 7,
    name: "Nike Phantom Venom Academy FG",
    description: "Classic tennis-inspired white leather sneakers",
    price: 1599000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
    category: "Lifestyle",
  },
  {
    id: 8,
    name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
    description: "Entry-level running shoes for daily use",
    price: 1299000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
    category: "Running",
  },
  {
    id: 9,
    name: "Nike Mercurial Superfly 7 Pro MDS FG",
    description: "Classic suede sneakers with timeless style",
    price: 1799000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
    category: "Lifestyle",
  },
  {
    id: 10,
    name: "Nike Air Force 1",
    description: "Chunky retro-inspired lifestyle sneakers",
    price: 2099000,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
    category: "Lifestyle",
  },
  {
    id: 11,
    name: "Nike Air Max 90",
    description: "Classic handball shoes with street style",
    price: 1799000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
    category: "Lifestyle",
  },
  {
    id: 12,
    name: "Nike Air Max 90 LTR",
    description: "Retro-inspired suede sneakers with modern comfort",
    price: 1699000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
    category: "Lifestyle",
  },
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
