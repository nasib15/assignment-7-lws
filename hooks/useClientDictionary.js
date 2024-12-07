"use client";

import { usePathname } from "next/navigation";

const en = {
  errors: {
    notFound: {
      title: "404 - Page Not Found",
      message: "Sorry, the page you are looking for does not exist.",
      goBack: "Go Back Home",
    },
    videoNotFound: {
      message: "This video with {id} id was not found!",
    },
  },
};

const bn = {
  errors: {
    notFound: {
      title: "৪০৪ - পেজটি পাওয়া যায়নি",
      message: "দুঃখিত, আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই।",
      goBack: "হোমে ফিরে যান",
    },
    videoNotFound: {
      message: "{id} আইডি সহ এই ভিডিওটি পাওয়া যায়নি!",
    },
  },
};

const dictionaries = { en, bn };

export const useClientDictionary = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  return dictionaries[lang] || dictionaries.en;
};
