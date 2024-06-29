import Skills from "@/components/main/Skills";
import Image from "next/image";
import React from "react";

const Skillss = () => {
  return (
    <>
      <Skills />
      <div className="flex flex-col items-center justify-center bg-transparent text-white px-4 md:px-20">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Latest Technologies Which We Are Working On!
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/html.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                HTML 5:
              </h2>
              <p className="text-gray-300">
                HTML (HyperText Markup Language) is the standard language for
                creating and structuring content on web pages. It uses a system
                of tags and attributes to define elements like text, images,
                links, and interactive forms.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/css.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                CSS 3:
              </h2>
              <p className="text-gray-300">
                CSS (Cascading Style Sheets) is a stylesheet language used to
                control the presentation and layout of web pages. It allows
                developers to apply styles, such as colors, fonts, and spacing,
                to HTML elements, enhancing the visual appeal and user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/js.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                JavaScript:
              </h2>
              <p className="text-gray-300">
                JavaScript is a versatile, high-level programming language
                commonly used to create interactive effects and dynamic content
                on websites. It is an essential technology in web development,
                enabling the implementation of complex features like animations,
                form validations, and asynchronous data loading.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/tailwind.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Tailwind CSS:
              </h2>
              <p className="text-gray-300">
                Tailwind CSS is a utility-first CSS framework that provides
                low-level utility classes to build custom designs without
                leaving your HTML. It allows for rapid UI development by
                offering a flexible and highly customizable set of pre-defined
                styles.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/react.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                ReactJS:
              </h2>
              <p className="text-gray-300">
                ReactJS is a popular JavaScript library for building dynamic
                user interfaces, especially single-page applications, by
                creating reusable UI components. It efficiently updates and
                renders components in response to data changes, making
                development fast and scalable.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/redux.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Redux:
              </h2>
              <p className="text-gray-300">
                Redux is a state management library for JavaScript applications,
                commonly used with React, to manage and centralize application
                state. It provides a predictable state container, making it
                easier to manage and debug application state changes through a
                single source of truth.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image
                    src="/reactquery.png"
                    width={70}
                    height={70}
                    alt="Rea"
                  />
                </span>{" "}
                React Query:
              </h2>
              <p className="text-gray-300">
                React Query is a powerful library for fetching, caching, and
                synchronizing server data in React applications, enhancing data
                management with hooks. It simplifies complex data fetching
                logic, providing automatic updates and robust caching mechanisms
                for a more efficient and seamless user experience.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/ts.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                TypeScript:
              </h2>
              <p className="text-gray-300">
                TypeScript is a strongly typed superset of JavaScript that
                compiles to plain JavaScript, enhancing code quality and
                development efficiency with static type checking. It supports
                modern JavaScript features and offers powerful tools for
                large-scale application development.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/figma.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Figma:
              </h2>
              <p className="text-gray-300">
                Figma is a collaborative interface design tool that allows
                designers and teams to create, prototype, and share designs in
                real-time. Its cloud-based platform and powerful features make
                it a popular choice for designing user interfaces and
                experiences.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/nodejs.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Node.js:
              </h2>
              <p className="text-gray-300">
                Node.js is a runtime environment that allows developers to run
                JavaScript on the server-side. It enables the creation of
                scalable and high-performance applications, especially for
                real-time web services, by using a non-blocking, event-driven
                architecture.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/express.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Express.js:
              </h2>
              <p className="text-gray-300">
                Express.js is a minimal and flexible Node.js web application
                framework that provides robust features for building web and
                mobile applications. It facilitates the development of APIs and
                web servers by offering a simple and intuitive interface.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500">
                  <Image src="/mongo.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                MongoDB:
              </h2>
              <p className="text-gray-300">
                MongoDB is a NoSQL database known for its flexibility,
                scalability, and high performance. It stores data in a
                JSON-like format, allowing for efficient querying and indexing,
                and is widely used for developing modern applications that
                require dynamic and real-time data handling.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/Firebase.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Firebase :
              </h2>
              <p className=" text-gray-300">
                Firebase is a comprehensive mobile and web application
                development platform powered by Google&apos;s infrastructure,
                offering features like real-time database, authentication,
                hosting, and analytics, making app development easier and more
                scalable.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/postger.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Postger :
              </h2>
              <p className=" text-gray-300">
              &quot;Postger is a robust and feature-rich relational database
                management system, renowned for its scalability, reliability,
                and extensive support for SQL standards.&quot;
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/mysql.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                MySql :
              </h2>
              <p className=" text-gray-300">
                MySQL is an open-source relational database management system
                renowned for its reliability and scalability, powering numerous
                web applications and platforms worldwide. Its robust features
                and flexibility make it a preferred choice for managing
                structured data efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/prisma.webp" width={70} height={70} alt="Rea" />
                </span>{" "}
                Prisma :
              </h2>
              <p className=" text-gray-300">
                Prisma is a popular photo editing app renowned for its artistic
                filters that transform ordinary images into vibrant artworks.
                With its intuitive interface and diverse range of effects,
                Prisma offers users a creative outlet to express their visual
                imagination.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/graphql.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                GraphQl :
              </h2>
              <p className=" text-gray-300">
                GraphQL is a query language for APIs, providing a more
                efficient, flexible, and powerful alternative to REST. It
                enables clients to request only the data they need, reducing
                over-fetching and under-fetching issues.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image
                    src="/ReactNative .png"
                    width={70}
                    height={70}
                    alt="Rea"
                  />
                </span>{" "}
                React Native :
              </h2>
              <p className=" text-gray-300">
                React Native: A JavaScript framework for building native mobile
                apps using React, combining the power of React with native
                capabilities for seamless cross-platform development.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/tauri.svg" width={70} height={70} alt="Rea" />
                </span>{" "}
                Tauri :
              </h2>
              <p className=" text-gray-300">
                Tauri is a lightweight and customizable framework for building
                fast, secure, and cross-platform native applications using Rust.
                It empowers developers with robust tooling and libraries for
                crafting high-performance desktop and mobile apps.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/docker.webp" width={70} height={70} alt="Rea" />
                </span>{" "}
                Docker :
              </h2>
              <p className=" text-gray-300">
                Docker revolutionizes software development by packaging
                applications and their dependencies into containers, enabling
                seamless deployment across diverse environments with consistency
                and efficiency. With Docker, developers can build, ship, and run
                applications reliably, regardless of the underlying
                infrastructure.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-4 mt-8 md:mt-0">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/figma.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Figma :
              </h2>
              <p className=" text-gray-300">
                Figma is a collaborative interface design tool that enables
                teams to create, prototype, and iterate on designs in real-time,
                fostering seamless teamwork and efficient workflows. With its
                cloud-based platform and intuitive features, Figma
                revolutionizes the way designers and developers collaborate to
                bring ideas to life.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:mr-8">
            <div className="px-4  ">
              <h2 className="text-xl md:text-2xl font-bold text-transparent flex items-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                <span className="text-red-500 ">
                  <Image src="/go.png" width={70} height={70} alt="Rea" />
                </span>{" "}
                Go :
              </h2>
              <p className=" text-gray-300">
                Go is a strategic board game originating from ancient China,
                requiring skillful placement of black and white stones to
                control territory and capture opponents&apos; pieces. It combines
                simplicity with profound complexity, captivating players with
                its elegant rules and deep strategic possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillss;
