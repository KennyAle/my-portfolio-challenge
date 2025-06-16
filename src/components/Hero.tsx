import Profile from "./Profile";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-0 px-8 py-13">
      <h1 className="text-4xl font-bold">Hi, I'm Kenny Viver</h1>
      <Profile />
    </section>
  );
};

export default Hero;