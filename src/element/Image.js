import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { size, src, width, height, margin, shape, borderRadius} = props;

  const styles = {
    src,
    width,
    height,
    margin,
    shape,
    size,
    borderRadius
  };


  if (shape === 'circle') {
    return (
      <ImageCircle {...styles}></ImageCircle>
    );
  }

  return (
    <>
      <ImageDefault {...styles} />
    </>
  );
};

Image.defaultProps = {
  src: "https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1228368893321736193%2FOv0og7E8_400x400.jpg",
  width: '450px',
  height: '450px', 
  size: 36,
  margin: false,
};

const ImageCircle = styled.div`
--size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: ${(props) => props.borderRadius};
  ${(props)=> props.borderRadius ? `border-radius: ${props.borderRadius}`: ""};
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 2px 4px;
`;

const ImageDefault = styled.div`
 ${(props)=> props.width ? `height: ${props.width}`: ""};
  ${(props)=> props.height ? `height: ${props.height}`: ""};
  ${(props)=> props.margin ? `margin: ${props.margin}`: ""};
  background-color: #fff;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Image;
