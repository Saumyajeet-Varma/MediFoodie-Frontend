const Loader = ({ size = 16, thick = 8, color = "white" }) => {

    const loaderSize = `${size}rem`;
    const borderColor = color === "white" ? "white" : "#7c3aed"

    return (
        <div className="flex items-center justify-center">
            <div
                style={{
                    width: loaderSize,
                    height: loaderSize,
                    borderWidth: thick,
                    borderColor: `${borderColor} transparent ${borderColor} ${borderColor}`,
                    borderStyle: "solid",
                    borderRadius: "50%",
                }}
                className="animate-spin"
            ></div>
        </div>
    );
};

export default Loader;
