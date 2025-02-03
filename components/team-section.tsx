import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { renderRoleWithFlags } from "../pages/utils/renderRoleWithFlags";

const team = [
  {
    name: "Ariel Ferrer",
    titulo: "Kinesiologo U.N.C/U.C.R (Homologado)",
    role:
      "Kinesiologia deportiva/Entrenamiento |  Magister en ecografia MSK  |  Instructor Oficial ETGOM para Latinoamerica  |  MEP/ Microfenestracion (PMF) Director CentroLAM (La Plata. BsAs)",
    image: "/kine2.jpg",
  },
  {
    name: "Marcos Valent",
    titulo: "Kinesiologo especializado en deporte UBA",
    role:
      "Director centro de kinesiología y entrenamiento MVP gral. belgrano  |  Kinesiologo la Natividad polo team 🇦🇷  |  Kinesiologo Dubai polo team 🇬🇧 🇪🇸  |  Kinesiologo barto y jeta Castagnola 🇺🇸  |",
    Formación: "MEDICINA ORTOPÉDICA EUROPEA CYRIAX DNS FMS MEP",
    image: "/kine1.jpg",
  },
  {
    name: "Leonardo Ferrando",
    role: "Kinesiologo",
    image: "/kine6.jpg",
  },
  {
    name: "Daina Grosso",
    role: "Kinesiologa",
    image: "/kine3.jpg",
  },
  {
    name: "Agustina Carosillo",
    role: "Kinesiologa",
    image: "/kine7.jpg",
  },
  {
    name: "Tomas Éder",
    role: "Kinesiologo",
    image: "/kine4.jpg",
  },
  {
    name: "Celeste Zuccarelli",
    role: "Kinesiologa",
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
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
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
                <p className="text-muted-foreground menu-tipoTrabajo">{member.Formación} </p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

