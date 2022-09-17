const Login = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
            type: "string",
            pattern: "[a-z0-9\._%+!$&*=^|~#%{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,22})"
        },
        password: {
            type: "string",
            minLength: 6
        }
    }
};

const UserSchemas = {
    Login
};

export default UserSchemas;