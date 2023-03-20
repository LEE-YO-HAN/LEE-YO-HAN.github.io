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
    /* transform: translate(-50%, -50%); */
    width: 40px;
    height: 40px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.loading};
    border-right: 3px solid ${props => props.theme.loading};
    border-bottom: 3px solid ${props => props.theme.loading};
    animation: spinner 0.6s infinite;
  }
`;
