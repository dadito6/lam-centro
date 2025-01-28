import { Card, CardContent } from "@/components/ui/Card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const team = [
  {
    name: "Ariel Ferrer",
    role: "Kinesiologo Director",
    image: "/kine2.jpg",
  },
  {
    name: "Marcos Valent",
    role: " Kinesiologo Co-Director",
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
  


]

export function TeamSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
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
  ssr={true} // means to render carousel on server-side.
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
        <Avatar className="w-32 h-32 mx-auto mb-4 ">
          <AvatarImage src={member.image} alt={member.name}   />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl mb-1 menu-kine">{member.name}</h3>
        <p className="text-muted-foreground menu-tipoTrabajo">{member.role}</p>
      </CardContent>
    </Card>
  ))}
</Carousel>
      </div>
    </section>
  )
}