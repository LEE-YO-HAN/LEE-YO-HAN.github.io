import styled from "styled-components";

interface Props {
  currentExp: number;
  expHandler: (n: number) => void;
}

export const EXPbar = ({ currentExp, expHandler }: Props) => {
  return (
    <EXPbarWrap>
      <After onClick={() => expHandler(1)}>
        <Pointer
          style={currentExp === 1 ? { backgroundColor: "#6360ff" } : {}}
        ></Pointer>
      </After>
      <Wanted onClick={() => expHandler(2)}>
        <Pointer
          style={currentExp === 2 ? { backgroundColor: "#60b2ff" } : {}}
        ></Pointer>
      </Wanted>
      <Sparta onClick={() => expHandler(3)}>
        <Pointer
          style={currentExp === 3 ? { backgroundColor: "#ffad60" } : {}}
        ></Pointer>
      </Sparta>
      <University onClick={() => expHandler(4)}>
        <Pointer
          style={currentExp === 4 ? { backgroundColor: "#ff6060" } : {}}
        ></Pointer>
      </University>
    </EXPbarWrap>
  );
};

const EXPbarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const After = styled.div`
  width: 15px;
  height: 40%;
  background-color: #6360ff;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  & div {
    border: 3px solid #6360ff;
    transform: translate(-30%, 225%);
    transition: 0.2s;
    &:hover {
      background-color: #6360ff;
    }
  }
`;

const Wanted = styled.div`
  width: 15px;
  height: 30%;
  background-color: #60b2ff;
  cursor: pointer;
  & div {
    border: 3px solid #60b2ff;
    transform: translate(-30%, 150%);
    transition: 0.2s;
    &:hover {
      background-color: #60b2ff;
    }
  }
`;

const Sparta = styled.div`
  width: 15px;
  height: 20%;
  background-color: #ffad60;
  cursor: pointer;
  & div {
    border: 3px solid #ffad60;
    transform: translate(-30%, 90%);
    transition: 0.2s;
    &:hover {
      background-color: #ffad60;
    }
  }
`;
const University = styled.div`
  width: 15px;
  height: 10%;
  background-color: #ff6060;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  & div {
    border: 3px solid #ff6060;
    transform: translate(-30%, 15%);
    transition: 0.2s;
    &:hover {
      background-color: #ff6060;
    }
  }
`;

const Pointer = styled.div`
  position: absolute;
  transform: translate(-30%, 250%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid gold;
  cursor: pointer;
`;
