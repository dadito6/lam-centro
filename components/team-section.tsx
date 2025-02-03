import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { renderRoleWithFlags } from "../utils/renderRoleWithFlags";

const team = [
  {
    name: "Ariel Ferrer",
    cargo: " Director Centro LAM  ",
    titulo:  " Kinesiologo U.N.C/U.C.R (Homologado)   ",
    role:
      "Kinesiologia deportiva/Entrenamiento |  Magister en ecografia MSK  |  Instructor Oficial ETGOM para Latinoamerica  |  MEP/ Microfenestracion (PMF) |",
    image: "/kine2.jpg",
  },
  {
    name: "Marcos Valent",
    cargo: " Co-Directo Centro LAM",
    titulo: " Kinesiologo especializado en deporte UBA ",
    role:
      "Director centro de kinesiología y entrenamiento MVP gral. belgrano  |  Kinesiologo la Natividad polo team 🇦🇷  |  Kinesiologo Dubai polo team 🇬🇧 🇪🇸  |  Kinesiologo barto y jeta Castagnola 🇺🇸  |  MEDICINA ORTOPÉDICA EUROPEA CYRIAX DNS FMS MEP |",
    image: "/kine1.jpg",
  },
  {
    name: "Leonardo Ferrando",
    cargo: "Kinesiologo Centro LAM",
    role : " Global Cyriax Institute Orthopaedic Medicine",
    image: "/kine6.jpg",
  },
  {
    name: "Daina Grosso",
    cargo: " Kinesiologa Centro LAM",
    titulo : "Lic en Kinesiologia y Fisiatrita",
    role: " Kloga del hospital Alejandro Korn |  Global Cyriax Institute Orthopaedic Medicine  |DNS clínico A B y C | Diplomatura en kinesiologia deportiva UNAJ ",
    image: "/kine3.jpg",
  },
  {
    name: "Agustina Carosillo",
    cargo: "Kinesiologa Centro LAM",
    role: "  Kinesiologa plantel profesional de primera división fut fem Gelp  |  Kinesiologa en CIK |  Profesora prácticas profesionales supervisadas UCALP  |  Módulo I-a “Introducción al razonamiento clínico”  |  Módulo I-b “Columna lumbar”Global Cyriax Institute Orthopaedic Medicine  |  Certificación MEP Sport y MEP Beauty  |  Programa de post grado columna lumbar The McKenzie Institute",
    image: "/kine7.jpg",
  },
  {
    name: "Tomas Éder",
    cargo: "Kinesiologo Centro LAM",
    titulo : " Lic en Kinesiologia y Fisiatria ",
    role : " Klgo Centro médico del diagnóstico City Bell  |  Diplomatura en Kinesiolgia deportiva UNAJ  |  Global Cyriax Institute Orthopaedic Medicine  |  Terapeuta Mep  |  Punción seca",
    image: "/kine4.jpg",
  },
  {
    name: "Celeste Zuccarelli",
    cargo: "Kinesiologa Centro LAM",
    image: "/kine5.jpg",
  },
];

export function TeamSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <section id="equipo" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 titulo-nuestroE">Nuestro Equipo</h2>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // Renderización en servidor.
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container menu-carousel"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
          renderButtonGroupOutside={true}
        >
        {team.map((member, index) => (
  <Card key={index} className="text-center">
    <CardContent className="pt-6">
      <Avatar className="w-32 h-32 mx-auto mb-4">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback>
          {member.name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-xl mb-1 menu-kine">
        {member.name}
      </h3>
      {member.cargo && (
        <p className="text-muted-foreground menu-tipoTrabajo">
          {member.cargo}
        </p>
      )}
      {member.titulo && (
         <p className="text-muted-foreground menu-tipoTrabajo">
         {member.titulo}
        </p>
      )}
      <p className="text-muted-foreground menu-tipoTrabajo">
        {member.name === "Marcos Valent"
          ? renderRoleWithFlags(member.role)
          : member.role}
      </p>
      
    </CardContent>
  </Card>
))}
        </Carousel>
      </div>
    </section>
  );
}

