# Objective
Create an Action Plan of eight modules with 4 content phases each for Lina.
# Context
Currently Lina needs an Action Plan to start taking control over their business and take it to the next stage. The Action Plan is a 8 modules, with 4 stages within each module.

The Action Plan must help to solve the most important priority or pain that has been selected from an analysis based on a interview. The transcript of the interview has been attached.

This is the current priority and initial action to execute(as a sample, included in the profile generated).
```
Prioridad 1: Saneamiento y Estructura Financiera  
1. Accionable: Saneamiento y Estructura Financiera  
• ¿De qué trata del accionable? Estás trabajando para pagar deudas de insumos anteriores. Si no calculas bien tus márgenes ahora que los costos suben, podrías estar perdiendo dinero sin saberlo. Mezclar el mercado de la casa y los uniformes de las niñas con la caja del negocio impide que Montaña Mía tenga capital de trabajo propio.
```

The content of the modules have two main components: Knowledge and actions.
We want the entrepreneur to execute small, simple actions which done completely will fix, teach and level up the entrepreneur control and understanding of their business.
# Requirements
- Develop an 8-module action plan centered on addressing the #1 priority ONLY: their financial situation, to enable the entrepreneur to execute effectively.
- The eight paths must focus on "fixing" their current unorganized and manual financial system, how improve it, how to keep it organized.
- Each module must have 4 content phases.
- The `frontText` may be up to 70 characters.
- The `backContent.explanation` may be up to 180 characters.
- The `backContent.example` may be up to 180 characters.
- The `backContent.tip` may be up to 180 characters.
- The `backContent.action` may be up to 180 characters.
- The `backContent.action` is an action for the entrepreneur to execute.
- Content must me in Spanish.
- Stages:
	- Module 1 and Module 2 are stage 1
	- Module 3 and Module 4 are stage 2
	- Module 5 and Module 6 are stage 3
	- Module 7 and Module 8 are stage 4

# Execute in the following order
1. Create the modules following the **Requirements** and the **Deliverables** instructions.
2. Review the 8 modules and its 4 stages
3. Research for improvements, opportunities, missed subjects, better actions.
4. Improve the modules and its stages.
# Deliverables:
- Content must me in Spanish.
- The following is the model for the data that must be returned:
```
[
	{
		id: number,
		module: string,
		stage: number,
		moduleTitle: string,
		color: string,
		lightColor: string,
		textColor: string,
		icon: ReactComponent,
		title: string,
		frontText: string,
		backContent: {
			explanation: string,
			example: string,
			tip: string,
			action: string,
			"resources_links": [{
				"title": string,
				"url": string
			}]
		}
	},
	{ ... }
]
```
- The structure for each card may following the following example:
```
{
	id: 1,
	module: "MÓDULO NUMBER",
	stage: 1,
	moduleTitle: "Diagnóstico SEO Real",
	color: "bg-blue-600",
	lightColor: "bg-blue-50",
	textColor: "text-blue-600",
	icon: <Icons.Search />,
	title: "¿Cómo te ve Google hoy?",
	frontText: "Búsqueda en Incógnito: La prueba de la verdad.",
	backContent: {
		explanation: "Tu historial personal miente porque Google aprende tus gustos. Para ver la realidad que ven tus clientes, debes ser 'invisible'.",
		example: "Abre ventana incógnito > Busca 'experiencias rurales cundinamarca'. ¿Aparece rinconesyveredas.com en página 1?",
		tip: "No busques tu nombre de marca. Busca tu servicio.",
		action: "Haz la búsqueda y anota en qué posición sales. Esa es tu línea base.",
		"resources_links": [{
			"title": "Video: Cómo separar tus finanzas",
			"url": "https://www.youtube.com/watch?v=f9Q7s_x7_78"
		}]
	}
}
```
