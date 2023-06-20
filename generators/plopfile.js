export default function (plop) {
  plop.setGenerator("create-component", {
    description: "Create react component with tests and storybook",
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Component name:",
      },
      {
        type: "input",
        name: "path",
        message: "Add relative path:",
      },
      {
        type: "input",
        name: "storieTitle",
        message: "Add storie title:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../{{path}}/{{pascalCase component}}/index.tsx",
        templateFile: "./templates/createComponent/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../{{path}}/{{pascalCase component}}/style.ts",
        templateFile: "./templates/createComponent/style.ts.hbs",
      },
      {
        type: "add",
        path: "../{{path}}/{{ pascalCase component }}/storybook/{{pascalCase component}}.stories.tsx",
        templateFile: "./templates/createComponent/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../{{path}}/{{ pascalCase component}}/__tests__/{{ pascalCase component}}.spec.tsx",
        templateFile: "./templates/createComponent/test.tsx.hbs",
      },
    ],
  }),
    plop.setGenerator("react-query/useQuery", {
      description: "Create useQuery hook",
      prompts: [
        {
          type: "input",
          name: "queryName",
          message: "Add query name:",
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
          path: "../{{path}}/use {{ pascalCase queryName }}/index.ts",
          templateFile: "./templates/reactQuery/useQuery.ts.hbs",
        },
      ],
    });
  plop.setGenerator("react-query/useMutation", {
    description: "Create useMutation hook",
    prompts: [
      {
        type: "input",
        name: "queryName",
        message: "Add query name:",
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
        path: "../{{path}}/use{{ pascalCase queryName }}/index.ts",
        templateFile: "./templates/reactQuery/useMutation.ts.hbs",
      },
    ],
  });
}
