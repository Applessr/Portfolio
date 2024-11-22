'use client';
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mt-[600px] mx-auto w-full max-w-screen-xl">
      <Image
        src="https://i.imgur.com/UelGops.jpeg"
        alt="Example Image"
        width={1400}
        height={250}
        className="mt-[350px] mx-auto"
        priority
      />
      <div>
        <div></div>
        <div>
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <Image
              src='https://i.imgur.com/yf3RdEz.jpeg'
              alt="Profile"
              width={160} 
              height={160}
              className="object-cover"  
            />
          </div>
        </div>
      </div>
    </div>
  );
}
