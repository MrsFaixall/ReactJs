const Label = (props) => {
    const {htmlfor, Children} = props;
    return (
        <label 
        htmlFor={htmlfor}
        className="block text-slate-600 text-sm font-bold mb-2">
              {Children}
            </label>
    );
};

export default Label;