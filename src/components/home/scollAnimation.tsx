import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editi",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
      />
    ),
  },
  {
    title: "Sheraton Grande Sukhamit,Thailand",
    description:
      "The Sheraton is beautiful and well placed to access all of Bangkok via the BRT. The Station 21 shops is one of the cities best centres. The area felt safe day and night. But that’s not why I stay here. It’s the warm, genuine service from the exceptional staff. Staff remembered our breakfast orders every morning, looked after us at the resort like pool and went out of their way to ensure we had all of our needs met..",
    content: (
      <img
        src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="object-cover h-full"
      />
    ),
  },
  {
    title: "The Ritz-Carlton,Langkawi",
    description:
      "As you enter The Ritz-Carlton, Langkawi for the first time, the Walkway of Wishes stands ready to greet you. Simply write your wish on a stone and place it in the fountain; filled with water from the Lake of the Pregnant Maiden (Dayang Bunting), it is said to have the power to make wishes come true. This is perhaps the first indication that your experience at this beachfront hotel will be full of new discoveries.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="object-cover h-full"
      />
    ),
  },
  {
    title: "Wydham Casablanca,Jakarta",
    description:
      "Semua orang butuh beristirahat. Untuk wisatawan yang mengunjungi Jakarta, The Park Lane Jakarta merupakan pilihan terbaik untuk beristirahat dan memulihkan diri. Terkenal karena suasana menawan dan lokasinya yang dekat dengan restoran populer, The Park Lane Jakarta membuat Anda mudah menikmati yang terbaik dari Jakarta.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1573047330191-fb342b1be381?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="object-cover h-full"
      />
    ),
  },
  {
    title: "Ayana Midplaza,Jakarta",
    description:
      "Menemukan hotel mewah yang ideal di Jakarta sangatlah mudah. Selamat datang di AYANA Midplaza JAKARTA, pilihan tepat untuk wisatawan seperti Anda.Selama menginap di AYANA Midplaza JAKARTA, tamu dapat mengunjungi Culinaria MODENA (Cooking Class) (1,4 km) dan Masjid Agung Sunda Kelapa (1,6 km), beberapa tempat terkenal di Jakarta.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1664174452200-f9494ab0498f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="object-cover h-full"
      />
    ),
  },
];
export function ScrollAnimation() {
  return (
    <div className="p-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 py-10">
        <h1 className="text-emerald-500 font-bold text-3xl tracking-widest text-center">
          Popular Destinatios
        </h1>
        <p className="text-md text-gray-200 ">Favorite Place in my Website</p>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
