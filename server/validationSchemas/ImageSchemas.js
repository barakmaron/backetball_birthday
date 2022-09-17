const Upload = {
    type: "object",
    required: ["alt"],
    properties: {
        alt: {
            type: "string",
            minLength: 2
        }
    }
};

const UpdateAlt = {
    type: "object",
    required: ["alt"],
    properties: {
        alt: {
            type: "string",
            minLength: 2
        }
    }
}

const ImageSchemas = {
    Upload,
    UpdateAlt
};

export default ImageSchemas;