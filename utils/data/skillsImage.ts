import html from "@/public/image/html.svg";
import css from "@/public/image/css.svg";
import javascript from "@/public/image/javascript.svg";
import react from "@/public/image/react.svg";
import node from "@/public/image/nodejs-icon.svg";
import express from "@/public/image/expressjs-icon.svg";
import mongodb from "@/public/image/mongoDB.svg";
import typescript from "@/public/image/typescript.svg";
import next from "@/public/image/nextJS.svg";
import postgresql from "@/public/image/postgresql.svg";
import strapi from "@/public/image/strapi.svg";
import nginx from "@/public/image/nginx.svg";
import docker from "@/public/image/docker.svg";
import git from "@/public/image/git.svg";
import tailwind from "@/public/image/tailwind.svg";
import firebase from "@/public/image/firebase.svg";
import vite from "@/public/image/vitejs.svg";
import figma from "@/public/image/figma.svg";
import nest from "@/public/image/nestjs-icon.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return next;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "mongodb":
      return mongodb;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vite;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "nginx":
      return nginx;
    case "strapi":
      return strapi;
    case "figma":
      return figma;
    case "node js":
      return node;
    case "express js":
      return express;
    case "nest js":
      return nest;
    default:
      break;
  }
};
