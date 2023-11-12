import { fruitsveg as FruitvegAnalysis, coelchaanalysis as Coelcha, marketingcampaign as MarketingCampaign} from "../pages/projects/index";

const tableau_img = 'fruitsandvegs.png';
const coelcha_img = 'coelcha.png';
const marketing_camp_img = 'streamlit123.png';


export const projectList = [
	{title: "Análisis mercado mayorista y práctica de Storytelling", imgsrc: tableau_img, path: '/projects/fruitsandvegs', element: FruitvegAnalysis},
	{title: "Análisis de impacto climático sobre llamados a Coelcha", imgsrc: coelcha_img, path: '/projects/coelcha', element: Coelcha},
	{title: "Marketing Campaign Dashboard", imgsrc: marketing_camp_img, path: '/projects/marketing_campaign', element: MarketingCampaign}
];