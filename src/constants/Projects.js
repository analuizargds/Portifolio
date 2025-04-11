import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import calendar from "../assets/images/calendar.png";

const projects = [
    {
      id: 1,
      imagem: calendar,
      titulo: "Calendário Interativo",
      descricao: "Calendário para visualizar tarefas e eventos. Podendo navegar entre meses e anos.",
      tecnologias: [
        { nome: "JavaScript", icone: <SiJavascript color='#FFFF00' size={15}/> },
        { nome: "HTML", icone: <SiHtml5 color='#FF8C00' size={15}/> },
        { nome: "CSS", icone: <SiCss3 color='#00BFFF' size={15}/> },
      ],
      links: {
        github: "https://github.com/analuizargds/desafio-frontend-jr",
        vercel: "https://desafio-frontend-jr-five.vercel.app/",
      },
    },
];

export default projects;