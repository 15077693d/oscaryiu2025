import RollingGallery from "./_components/rollingGallery";

export default async function Home() {
  return (
    <div className="relative">
      <h1 className="translate-y-[130px] text-center text-5xl font-black">
        Hello, I&apos;m
        <br className="block sm:hidden" /> Oscar Yiu
      </h1>
      <RollingGallery pauseOnHover />
    </div>
  );
}
