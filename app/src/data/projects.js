import { fruitsveg as FruitvegAnalysis } from "../pages/projects/index";

const tableau_img = decodeURIComponent('https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pr&#47;PreciosyVolumendelMercadoMayoristadeFrutasyVerdurasenChile&#47;Sheet1&#47;1.png'.replace(/&#47;/g, '/'));;

export const projectList = [
	{title: "Test Tableau", imgsrc: tableau_img, path: '/projects/fruitsandvegs', element: FruitvegAnalysis},
	{title: "Test Tableau", imgsrc: tableau_img, path: '/projects/fruitsandvegs2', element: FruitvegAnalysis},
	{title: "Test Tableau", imgsrc: tableau_img, path: '/projects/fruitsandvegs3', element: FruitvegAnalysis},
];