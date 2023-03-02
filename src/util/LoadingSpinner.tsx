import styled from "styled-components";

export const LoadingSpinner = () => {
  return (
    <Spinner>
      <div className="spinner"></div>
    </Spinner>
  );
};

const Spinner = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  & .spinner {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-color: #3c2a21 white #3c2a21 white;
    animation: spinner 0.6s infinite;
  }
`;
