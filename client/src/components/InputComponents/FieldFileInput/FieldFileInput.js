import React from 'react';
import { useField } from 'formik';

const FieldFileInput = ({ classes, name, ...restProps }) => {
  const [{ value, ...rest }, meta, helpers] = useField(name);
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;

  const onChange = e => {
    const file = e.target.files[0];

    helpers.setValue(file);
  };

  const getFileName = () => {
    if (value) {
      return value.name;
    }
    return '';
  };

  return (
    <div className={fileUploadContainer}>
      <label htmlFor='fileInput' className={labelClass}>
        Choose file
      </label>
      <span id='fileNameContainer' className={fileNameClass}>
        {getFileName()}
      </span>
      <input
        {...rest}
        className={fileInput}
        id='fileInput'
        type='file'
        onChange={onChange}
      />
    </div>
  );
};

export default FieldFileInput;
