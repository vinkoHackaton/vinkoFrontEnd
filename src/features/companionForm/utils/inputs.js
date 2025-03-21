const inputs = [
    {
        id:1,
        name: "name",
        type: "text",
        placeholder: "Nombre",
        label: "Nombre",
        errorMessage: "El nombre no puede estar vacío",
        required: true
    },
    {
        id:2,
        name: "age",
        type: "number",
        placeholder: "Edad",
        label: "Edad",
        errorMessage: "Debes ser mayor de edad para anunciarte como acompañante",
        min: 18,
        max: 110,
        required: true
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Debe ser una dirección de correo válida!",
        label: "Email",
        required: true
    },
    {
        id: 4,
        name: "hourlyRate",
        type: "number",
        placeholder: "Precio por hora",
        label: "Estipula un precio",
        step: "0.01",
        errorMessage: "Debes estipular un precio para el plan",
        required: true
    }
]

export default inputs;