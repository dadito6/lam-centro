import { Card, CardContent } from "@/components/ui/Card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar"

const team = [
  {
    name: "Marcos Valent",
    role: "Kinesiologo",
    image: "/negro.jpg",
  },
  {
    name: "Lic. Nombre Apellido",
    role: "Kinesiólogo",
    image: "",
  },
  {
    name: "Lic. Nombre Apellido",
    role: "Fisioterapeuta",
    image: "",
  },
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

