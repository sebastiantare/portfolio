import { fruitsveg as FruitvegAnalysis, coelchaanalysis as Coelcha, marketingcampaign as MarketingCampaign, firesdashboard as ChileanFiresDashboard} from "../pages/projects/index";

const tableau_img = 'fruitsandvegs.png';
const coelcha_img = 'coelcha.png';
const marketing_camp_img = 'streamlit123.png';
const incendioschile = 'incendioschile.png';


export const projectList = [
	{title: "Dashboard de Incendios en Chile", imgsrc: incendioschile, path: '/projects/incendioschile', element: ChileanFiresDashboard},
	{title: "Análisis mercado mayorista y práctica de Storytelling", imgsrc: tableau_img, path: '/projects/fruitsandvegs', element: FruitvegAnalysis},
	{title: "Análisis de impacto climático sobre llamados a Coelcha", imgsrc: coelcha_img, path: '/projects/coelcha', element: Coelcha},
	{title: "Marketing Campaign Dashboard", imgsrc: marketing_camp_img, path: '/projects/marketing_campaign', element: MarketingCampaign}
];