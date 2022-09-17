const NewEvent = {
    type: 'object',
    required: ["email", "full_name", "phone_number"],
    properties: {
        email: {
            type: "string",
            pattern: "[a-z0-9\._%+!$&*=^|~#%{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,22})"
        },
        full_name: {
            type: "string",
            pattern: "(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{3,16})"
        },
        phone_number: {
            type: "string",
            minLength: 8
        }
    }
};


const EventsSchemas = {
    NewEvent
};

export default EventsSchemas;