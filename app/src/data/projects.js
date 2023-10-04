import { fruitsveg as FruitvegAnalysis, coelchaanalysis as Coelcha} from "../pages/projects/index";

const tableau_img = 'fruitsandvegs.png';
const coelcha_img = 'coelcha.png';


export const projectList = [
	{title: "Análisis mercado mayorista verduras y hortalizas en Chile", imgsrc: tableau_img, path: '/projects/fruitsandvegs', element: FruitvegAnalysis},
	{title: "Análisis de impacto climático sobre llamados a Coelcha", imgsrc: coelcha_img, path: '/projects/coelcha', element: Coelcha}
];