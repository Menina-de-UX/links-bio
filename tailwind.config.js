/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        linkVolunteer:
          "url(https://cdn.beacons.ai/user_content/WOoVRCQnfvPCyDYZHkFI4PFV3SV2/referenced_images/c6dd3f25-e594-4121-b84c-b7b74d85ef45__link-in-bio__links-block__home__7ad03819-0e6d-4d34-84fd-6da8c8bc08a5__0392f9d8-fe62-493b-9254-501341e402a0__8101a182-d607-414a-baee-9656362e4c78.jpg?t=1696964466648)",
        linkSite:
          "url(https://cdn.beacons.ai/user_content/WOoVRCQnfvPCyDYZHkFI4PFV3SV2/referenced_images/28bdc0f4-a8b5-46ef-8817-7e3406a22d78__link-in-bio__links-block__home__7ad03819-0e6d-4d34-84fd-6da8c8bc08a5__ad9d112f-9b8b-4b4c-8811-afd78fd4553b__6113338c-f591-48bf-b6b1-4711d2d0b4cb.jpg?t=1696964487780)",
      },
      width: {
        card: "35rem",
        cardLink: "12rem",
      },
      height: {
        cardLink: "12rem",
      },
    },
    colors: {
      white: "#FFFFFF",
      pink: {
        100: "#fcf0f3",
        300: "#d5626d",
      },
      blue: {
        500: "#20376c",
        400: "#4678bc",
      },
      gray: {
        400: "#272727",
        300: "#514f50",
      },
      black: {
        300: "#091227",
        200: "#1F2125",
      },
    },
  },
};
