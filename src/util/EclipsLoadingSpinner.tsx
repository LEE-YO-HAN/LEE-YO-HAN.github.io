import styled from "styled-components";

export const EclipsLoadingSpinner = () => {
  return (
    <LoadingSpinner>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
};

const LoadingSpinner = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #0f77ff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  @keyframes colorful {
    0% {
      background: #ff0000;
    }
    10% {
      background: #ff5e00;
    }
    20% {
      background: #ffd000;
    }
    30% {
      background: #d0ff00;
    }
    40% {
      background: #00ff22;
    }
    50% {
      background: #00ffd5;
    }
    60% {
      background: #00aeff;
    }
    70% {
      background: #0026ff;
    }
    80% {
      background: #8400ff;
    }
    90% {
      background: #ff00dd;
    }
    100% {
      background: #ff0077;
    }
  }
`;
