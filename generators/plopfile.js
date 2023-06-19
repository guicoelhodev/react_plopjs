export default function (plop) {
  plop.setGenerator("component", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "input",
        name: "path",
        message: "Add relative path:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
    ],
  });
}
