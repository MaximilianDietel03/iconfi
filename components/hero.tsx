import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/logo.png"
          alt="iConFi Logo"
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      <h1 className="sr-only">iConFi</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Bestehe deine TK-Prüfung <br />mit System.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
