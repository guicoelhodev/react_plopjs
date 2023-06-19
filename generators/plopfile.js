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
        path: "../{{path}}/{{pascalCase name}}.tsx",
        templateFile: "../generators/templates/component.tsx.hbs",
      },
    ],
  });
}
