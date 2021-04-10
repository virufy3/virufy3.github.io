import React from "react";

// Styles
import "./styles/Testimonials.css";

export default ({}) => {
  return (
    <section className="my-10 wrapper">
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube-nocookie.com/embed/KVjh6uKJ-ig"
        data-cookieconsent="marketing"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div class="text-center justify-between mb-8 text-gray-500">
        Presented at{" "}
        <a
          class="text-xl"
          target="_blank"
          href="https://www.sdgscaucus.com/speakers.html"
        >
          <span class="text-secondary-400">
            One Young World Tokyo 2020 Caucus
          </span>
        </a>
      </div>
    </section>
  );
};
