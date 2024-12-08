"use server";

import { redirect } from "next/navigation";

export const handleRedirect = (newLang, pathname) => {
  const pathParts = pathname.split("/");
  pathParts[1] = newLang;
  const newPath = pathParts.join("/");
  redirect(newPath);
};
