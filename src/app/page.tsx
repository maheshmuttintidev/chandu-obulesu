"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";
import Chandu1 from "../../public/chandu2.webp";
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
  const [age, setAge] = useState(0);

  // Calculate age and next birthday timer
  useEffect(() => {
    const birthDate = new Date("2001-07-03"); // Replace with actual birth date
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthdayDate = new Date(
      currentYear,
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (today > nextBirthdayDate) {
      nextBirthdayDate.setFullYear(currentYear + 1);
    }

    setAge(currentYear - birthDate.getFullYear());
  }, []);

  const audioRefs = useRef([]);
  const audioSources = ["/audio3.mp3", "/audio1.mp3", "/audio2.mp3"];

  useEffect(() => {
    const playNextAudio = (index) => {
      if (index >= audioSources.length) {
        index = 0;
      }
      const audio = new Audio(audioSources[index]);
      audioRefs.current[index] = audio;
      audio.play();
      audio.addEventListener("ended", () => playNextAudio(index + 1));
    };

    playNextAudio(0);
  }, []);

  // useEffect(() => {
  //   const audio = new Audio("/audio1.mp3");
  //   audio.loop = true;
  //   audio.play();
  // }, []);

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold py-3">
        Wish You Happy Birthday Chandu!
      </h1>
      <div className={styles.threedlook}>
        <section className="bg-red-500 px-3 text-white py-5 rounded-md flex flex-row mx-auto flex-wrap gap-7 bg-[url('/bg-birthday.webp')] bg-no-repeat bg-cover justify-center items-center shadow-xl">
          <div>
            <h2 className="text-xl font-bold bg-black px-3 py-2 rounded-md shadow-lg shadow-rose-100">
              July 3, 2001
            </h2>
            <div className="relative">
              <Image
                priority
                src={Chandu1}
                className="object-contain w-screen md:w-[300px] mt-4 rounded-full shadow-2xl border border-4 border-yellow-400"
                alt="Chandu 1"
              />
              <p className="text-3xl absolute bottom-[-20px] shadow-black shadow-lg left-[50%] translate-x-[-50%] text-yellow-600 font-bold bg-yellow-100 rounded-full h-12 w-12 flex justify-center items-center border border-2 border-yellow-500">
                {age}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className={styles.firecrackers}>🎉🎇✨</div>
            <div className={styles.giftBox}>🎁</div>
          </div>
        </section>
      </div>
      <Confetti />
    </div>
  );
}
