import insane from "insane";
import { marked } from "marked";

function parse(markdownText: string): string {
  const html = marked(markdownText, { async: false }) as string;
  return insane(html);
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("md", {
    mounted(el, { value }) {
      el.innerHTML = parse(value);
    },

    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.innerHTML = parse(value);
      }
    },
  });
});
