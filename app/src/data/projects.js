import {
  fruitsveg as FruitvegAnalysis,
  coelchaanalysis as Coelcha,
  marketingcampaign as MarketingCampaign,
  firesdashboard as ChileanFiresDashboard,
  centroide as Centroide
} from "../pages/projects/index";

const tableau_img = 'fruitsandvegs.png';
const coelcha_img = 'coelcha.png';
const marketing_camp_img = 'streamlit123.png';
const incendioschile = 'incendioschile.png';
const centroide = 'centroide-logo-portfolio.png';


export const projectList = [
  { title: "Dashboard de Incendios en Chile", imgsrc: incendioschile, path: '/projects/incendioschile', element: ChileanFiresDashboard },
  { title: "Centroide: App para resumir noticias", imgsrc: centroide, path: '/projects/centroide', element: Centroide }
];
