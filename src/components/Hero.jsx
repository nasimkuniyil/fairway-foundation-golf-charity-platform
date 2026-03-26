import CustomLink from "./ui/CustomLink";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-between overflow-hidden md:mt-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-teal-soft border border-brand-teal-light text-brand-teal-dark text-sm font-semibold mb-6 backdrop-blur-sm">
            ● Join 5, 000+ Golfers making an impact
          </span> 
          <h1 className="text-3xl mb-4 sm:mb-5 lg:mb-6 sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Play Golf. <br />
            Win Prices. <br />
            <span className="text-4xl sm:text-5xl lg:text-7xl text-brand-orange-extra-dark">
              Change Lives.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-brand-50 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Monthly subscription that tracks your game, gives you lottery-style
            draws and donates to charity.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 items-center mb-6">
            <CustomLink
              href="#pricing"
              className="w-fit py-3 px-6 rounded-full bg-brand-orange-dark font-bold tracking-wider text-white hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/20 hover:scale-105 transition-all duration-300"
            >
              Subscribe now
            </CustomLink>
            <div className="text-sm text-center lg:text-start">
              <p>Monthly ₹999</p>
              <p className="text-brand-teal-dark">Yearly ₹9999 (Save ₹1988)</p>
            </div>
          </div>
          <div className="flex items-center text-xs mx-auto lg:mx-0 w-fit bg-slate-200 text-brand-navy-dark py-3 px-6 rounded-full">
            <Heart className="w-4 h-4 mr-2 text-brand-teal-dark fill-brand-teal-dark" />
            <span>10% of your subscription goes directly to charity</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block mr-20">
        <div className="relative h-96 aspect-4/3 rotate-3 bg-white shadow-lg rounded-3xl overflow-hidden">
          <img src="/hero-img.jpg" alt="Hero" className="object-cover h-full" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-white px-4 py-2 rounded-3xl mx-auto w-fit mb-4">
              <p className="text-xs text-brand-purple-dark font-semibold">Winner</p>
              <p className=" text-black">
                Arjun just won <span className="text-brand-purple-dark font-bold">1 lakh</span> in the monthly draw
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
